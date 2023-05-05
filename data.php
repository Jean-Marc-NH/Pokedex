<?php

$id = isset($_POST['id']) ? $_POST['id'] : '';
$nombre = isset($_POST['name']) ? $_POST['name'] : '';

try {

    $conexion = new PDO('mysql:host=localhost;port=3306;dbname=favoritos' , 'root' , '');
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion->prepare('INSERT INTO pokemons2(Id, Nombre) VALUES(?,?)');
    $pdo->bindParam(1, $id);
    $pdo->bindParam(2, $nombre);


    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');

} catch (PDOException $error) {
    echo $error->getMessage();
    die();
}