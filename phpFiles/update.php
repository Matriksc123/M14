<?php
    include "config.php";
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $response = array();

    print_r($data);
    $id = $data['id'];
    $nom = $data['songN'];
    $album = $data['album'];
    $grup = $data['group'];
    $genere = $data['genre'];
    $duracio = $data['duration'];
    $sql = mysqli_query($con, "UPDATE `canciones` SET `nombre` = '$nom', `album` = '$album', `grupo` = '$grup', `genero` = '$genere', `duracion` = '$duracio' WHERE `canciones`.`id` = '$id' ");
    if($sql){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }
    echo json_encode($response);
?>
