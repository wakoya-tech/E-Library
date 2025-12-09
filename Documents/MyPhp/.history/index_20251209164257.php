<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        <label>quantity:</label>
        <input type="text" name="quantity">

    </form>

</body>

</html>
<?php
echo "{$_POST["username"]} <br>";
echo "{$_POST["password"]} <br>";
?>