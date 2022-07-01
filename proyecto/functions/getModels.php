<?php
if (isset($_POST['token'])) {

    $vehicleID = $_POST['vehicleID'];

    require_once('../includes/conec.php');
    $options = "<option value='-1' disabled selected>Seleccione un Modelo</option>";
    $query = "SELECT * FROM MODEL WHERE vehicleID = " . $vehicleID . ";";
    if ($res = mysqli_query($link, $query)) {
        while ($row = mysqli_fetch_row($res)) {
            $options .= "<option value ='" . $row[0] . "'>" . $row[1] . "</option>";
        }
    }

    if ($_POST['type'] == "edit") {
?>

        $("#modelEdit").empty();
        $("#modelEdit").append("<?php echo $options; ?>");

        <?php
        if ($_POST['model'] !== "0") {
        ?>
            document.getElementById("modelEdit").value = "<?php echo $_POST['model']; ?>";
        <?php
        }
    } else {
        ?>

        $("#model").empty();
        $("#model").append("<?php echo $options; ?>");

<?php   }
} else {
    die("No puedes entrar aqui");
}
