<?php
// Soubor, kam se budou zprávy ukládat (nemusíte řešit SQL databázi)
$souborData = 'data.json';

// Pokud soubor ještě neexistuje, vytvoříme ho s prázdným polem
if (!file_exists($souborData)) {
    file_put_contents($souborData, json_encode([]));
}

// Načteme aktuální data ze souboru
$vsechnyZpravy = json_decode(file_get_contents($souborData), true);

// 1. ZPRACOVÁNÍ POST REQUESTU (Odeslání zprávy)
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['akce']) && $_POST['akce'] === 'odeslat') {
    $roomka = $_POST['roomka'];
    
    // Vytvoříme pole pro danou roomku, pokud ještě neexistuje
    if (!isset($vsechnyZpravy[$roomka])) {
        $vsechnyZpravy[$roomka] = [];
    }

    // Sestavíme novou zprávu
    $novaZprava = [
        'jmeno' => $_POST['jmeno'],
        'text' => $_POST['zprava'],
        'timestamp' => time(), // Aktuální čas pro logiku stahování
        'cas' => date("H:i:s") // Hezký čas pro zobrazení uživateli
    ];

    // Přidáme zprávu do roomky a uložíme zpět do souboru
    $vsechnyZpravy[$roomka][] = $novaZprava;
    file_put_contents($souborData, json_encode($vsechnyZpravy));

    // Odpovíme JavaScriptu, že je vše OK
    echo json_encode(['status' => 'ok']);
    exit;
}

// 2. ZPRACOVÁNÍ GET REQUESTU (Čtení zpráv)
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['akce']) && $_GET['akce'] === 'cist') {
    $roomka = $_GET['roomka'];
    $klientTimestamp = isset($_GET['timestamp']) ? (int)$_GET['timestamp'] : 0;
    
    $noveZpravy = [];

    // Pokud roomka existuje, najdeme v ní zprávy novější než má klient
    if (isset($vsechnyZpravy[$roomka])) {
        foreach ($vsechnyZpravy[$roomka] as $zprava) {
            if ($zprava['timestamp'] > $klientTimestamp) {
                $noveZpravy[] = $zprava;
            }
        }
    }

    // Pošleme nové zprávy JavaScriptu
    echo json_encode(['zpravy' => $noveZpravy]);
    exit;
}
?>