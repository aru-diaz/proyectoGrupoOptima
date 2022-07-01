<?php

if (isset($_POST['token'])) {
    require_once('../includes/conec.php');
    $query = "DELETE FROM QUOTATION WHERE quotationID = " . $_POST['quotationID'] . ";";
    echo $query;
    if ($res = mysqli_query($link, $query)) {
    } else {
        die("Connection failed: " . $link->errno);
    }
} else {
    die("No puedes entrar aqui");
}
