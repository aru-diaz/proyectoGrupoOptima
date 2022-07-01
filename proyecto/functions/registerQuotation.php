<?php

if (isset($_POST['token'])) {
    require_once('../includes/conec.php');

    $query = "INSERT INTO QUOTATION VALUES(NULL,'" . $_POST['name'] . "','" . $_POST['lastName'] . "'," . $_POST['age'] . "," . $_POST['phone'] . ",'" . $_POST['mail'] . "'," . $_POST['vehicle'] . "," . $_POST['model'] . ");";    
    if ($res = mysqli_query($link, $query)) {
    } else {
        die("Connection failed: " . $link->errno);
    }
} else {
    die("No puedes entrar aqui");
}
