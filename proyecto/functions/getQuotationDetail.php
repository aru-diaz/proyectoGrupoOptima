<?php
if (isset($_POST['token'])) {

    require_once('../includes/conec.php');
    $name = "";
    $lastName = "";
    $age = "";
    $phone = "";
    $mail = "";
    $vehicle = "";
    $model = "";
    $query = "SELECT * FROM QUOTATION WHERE quotationID = " . $_POST['quotationID'] . ";";
    if ($res = mysqli_query($link, $query)) {
        while ($row = mysqli_fetch_row($res)) {
            $name = $row[1];
            $lastName = $row[2];
            $age = $row[3];
            $phone = $row[4];
            $mail = $row[5];
            $vehicle = $row[6];
            $model = $row[7];
        }
    }

?>

    document.getElementById("nameEdit").value = "<?php echo $name; ?>";
    document.getElementById("lastNameEdit").value = "<?php echo $lastName; ?>";
    document.getElementById("ageEdit").value = "<?php echo $age; ?>";
    document.getElementById("phoneEdit").value = "<?php echo $phone; ?>";
    document.getElementById("mailEdit").value = "<?php echo $mail; ?>";
    document.getElementById("vehicleEdit").value = "<?php echo $vehicle; ?>";
    loadModel(<?php echo $vehicle; ?>, 'edit',<?php echo $model; ?>);    

<?php } else {
    die("No puedes entrar aqui");
}
