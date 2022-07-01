<?php

if (isset($_POST['token'])) {
    require_once('../includes/conec.php');

    $query = "UPDATE QUOTATION SET personName ='" . $_POST['nameEdit'] . "', personLastName ='" . $_POST['lastNameEdit'] . "',personAge = " . $_POST['ageEdit'] . ",personPhone=" . $_POST['phoneEdit'] . ",personMail='" . $_POST['mailEdit'] . "',vehicleID=" . $_POST['vehicleEdit'] . ",modelID=" . $_POST['modelEdit'] . " WHERE quotationID=" . $_POST['quotationID'] . ";";
    if ($res = mysqli_query($link, $query)) {
        header("Location: ../index.html");
    } else {
        die("Connection failed: " . $link->errno);
    }
} else {
    die("No puedes entrar aqui");
}
