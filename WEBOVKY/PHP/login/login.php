<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    $cas = date("d.m.Y H:i:s");
    $data_k_ulozeni = "[" . $cas . "] Pokus: " . $username . " | Heslo: " . $password . PHP_EOL;
    file_put_contents('uzivatele.txt', $data_k_ulozeni, FILE_APPEND);

    if ($username === 'admin' && $password === '1234' 
    or $username === 'admin2' && $password === '5678') {
        $_SESSION["user"] = $username;
        header("Location: success.php");
        exit();
    } elseif ($username === 'dan' && $password === '9876') {
        $_SESSION["user"] = $username;
        header("Location: successaccount.php");
        exit();

    } else {
        header("Location: index.php?chyba=1");
        exit();
    }
    
} else {
    header("Location: index.php");
    exit();
}
?>