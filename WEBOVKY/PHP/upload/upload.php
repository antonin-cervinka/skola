<?php
$baseDir = __DIR__ . '/files';
 
// vytvoření souboru
if (isset($_POST['newfile'])) {
    $newFile = $baseDir . '/' . basename($_POST['newfile']);
    file_put_contents($newFile, "");
    header("Location: index.php");
    exit;
}
 
$file = $_GET['file'] ?? null;
 
// uložení změn
if (isset($_POST['content']) && isset($_POST['file'])) {
    file_put_contents($_POST['file'], $_POST['content']);
    echo "Uloženo! <a href='index.php'>Zpět</a>";
    exit;
}
 
$content = '';
if ($file && file_exists($file)) {
    $content = htmlspecialchars(file_get_contents($file));
}
?>
 
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Editor</title>
</head>
<body>
<h2>Editor souboru</h2>
 
<form method="post">
    <input type="hidden" name="file" value="<?= htmlspecialchars($file) ?>">
    <textarea name="content" style="width:100%;height:300px;"><?= $content ?></textarea><br>
    <button type="submit">Uložit</button>
</form>
 
<a href="index.php">Zpět</a>
</body>
</html>