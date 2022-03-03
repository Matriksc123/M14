<?php
    include "config.php";
    $input = file_get_contents('php://input');
    $i = $input;
    $response = array();

    $sql = mysqli_query($con, "DELETE FROM `canciones` WHERE `canciones`.`id` = '$i'");
    if($sql){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }
    echo json_decode($i);
?>

