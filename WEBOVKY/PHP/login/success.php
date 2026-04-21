<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>Přihlášení</title>
</head>
<body>
    <h2>LOGY</h2>
    <form action="index.php" method="POST">
    <input type="submit" value="Logout">
    <br>
    </form>
    
</body>
</html>

<?php
$cesta_k_souboru = "uzivatele.txt";

if (file_exists($cesta_k_souboru)) {
    
    $obsah = file_get_contents($cesta_k_souboru);
    echo nl2br($obsah);
    
} else {
    echo "soubor neexistuje";
}
?>