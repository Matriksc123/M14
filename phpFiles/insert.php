<?php
    include "config.php";
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $response = array();

    $nom = $_POST['song'];
    $album = $_POST['album'];
    $grup = $_POST['group'];
    $genere = $_POST['genre'];
    $duracio = $_POST['duration'];

    if ($_FILES['image']){
        $uDir = 'C:\Users\jaap\Desktop\M14\Ohm\src\assets\images\\';
        $oDir = $_FILES['image']['tmp_name'];
        $_FILES['image']['name'] = time() . $_FILES['image']['name'];
        $uDir = $uDir . basename( $_FILES['image']['name']);
        if (move_uploaded_file($oDir, $uDir)) {
            print_r($_FILES['image']);
            $uDir = $_FILES['image']['name'];
            $sql = mysqli_query($con, "INSERT INTO `canciones`(`nombre`, `album`,`grupo`,`genero`,`duracion`,`image`) VALUES ('$nom', '$album', '$grup', '$genere', '$duracio', '$uDir')");
            if($sql){
                $response["message"] = "OK";
            }else{
                $response["message"] = "KO";
            }
        } else {
            echo "nooo";
        }	
    }


    
    
?>

