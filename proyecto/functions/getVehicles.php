<?php
if (isset($_POST['token'])) {

    require_once('../includes/conec.php');
    $options = "<option value='-1' disabled selected>Seleccione un Auto</option>";
    $query = "SELECT * FROM VEHICLE;";
    if ($res = mysqli_query($link, $query)) {
        while ($row = mysqli_fetch_row($res)) {
            $options .= "<option value ='" . $row[0] . "'>" . $row[1] . "</option>";
        }
    }

?>

    $("#vehicle").empty();
    $("#vehicle").append("<?php echo $options; ?>");

    $("#vehicleEdit").empty();
    $("#vehicleEdit").append("<?php echo $options; ?>");

<?php }else{
    die("No puedes entrar aqui");
}
