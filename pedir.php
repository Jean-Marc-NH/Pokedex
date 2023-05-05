<?php

try{

    $conexion = new PDO('mysql:host=localhost;port=3306;dbname=favoritos' , 'root' , '');
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $res = $conexion->query('SELECT * FROM pokemons2') or die(print($conexion->errorInfo()));
    $data = [];

    while($item = $res->fetch(PDO::FETCH_OBJ)) {
        $data[] = [
            'numero' => $item->numero,
            'Id' => $item->Id,
            'Nombre' => $item->Nombre
        ];
    }

    echo json_encode($data);

} catch(PDOException $error) {
    echo $error->getMessage();
    die();
}