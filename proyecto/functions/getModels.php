<?php
if (isset($_POST['token'])) {

    $vehicleID = $_POST['vehicleID'];

    require_once('../includes/conec.php');
    $options = "<option value='-1' disabled selected>Seleccione un Model</option>";
    $query = "SELECT * FROM MODEL WHERE vehicleID = " . $vehicleID . ";";
    if ($res = mysqli_query($link, $query)) {
        while ($row = mysqli_fetch_row($res)) {
            $options .= "<option value ='" . $row[0] . "'>" . $row[1] . "</option>";
        }
    }

?>

    $("#model").empty();
    $("#model").append("<?php echo $options; ?>");

<?php } else {
    die("No puedes entrar aqui");
}
