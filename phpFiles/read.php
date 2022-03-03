<?php
    include "config.php";

    $response = array();
    $response["cancions"] = array();
    $cancions = array();
    $sql = mysqli_query($con, "Select * from canciones;");
    if($sql){
        $response["message"] = "OK";
        while ($cancio = mysqli_fetch_object($sql)) {
            array_push($cancions,$cancio);
        }
        print_r(json_encode($cancions));
    }else{
        $response["message"] = "KO";
    }
   
    
?>