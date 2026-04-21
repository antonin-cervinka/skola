<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>Přihlášení</title>
</head>
<body>
    <h2>Přihlašovací formulář</h2>

    <?php
    if (isset($_GET['chyba']) && $_GET['chyba'] == 1) {
        echo "<p style='color: red; font-weight: bold;'>Špatné jméno nebo heslo!</p>";
    }
    ?>

    <form action="login.php" method="POST">
        <label for="username">Jméno:</label><br>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Heslo:</label><br>
        <input type="password" id="password" name="password" required><br><br>

        <input type="submit" value="Login">
    </form>
</body>
</html>