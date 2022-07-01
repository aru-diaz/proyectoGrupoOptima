<?php
if (isset($_POST['token'])) {

    require_once('../includes/conec.php');
    $rowsReport = "";
    $query = "SELECT Q.*,V.vehicleName,M.modelName FROM QUOTATION Q INNER JOIN VEHICLE V ON Q.vehicleID = V.vehicleID INNER JOIN MODEL M ON Q.modelID = M.modelID ;";
    if ($res = mysqli_query($link, $query)) {
        while ($row = mysqli_fetch_row($res)) {
            $rowsReport .= "<tr>";
            $rowsReport .= "<td> " . $row[1] . " " . $row[2] . " </td>";
            $rowsReport .= "<td> " . $row[3] . " </td>";
            $rowsReport .= "<td> " . $row[4] . " </td>";
            $rowsReport .= "<td> " . $row[5] . " </td>";
            $rowsReport .= "<td> " . $row[8] . " </td>";
            $rowsReport .= "<td> " . $row[9] . " </td>";
            $rowsReport .= "<td><a href='' class='btn btn-info'>Editar</a></td>";
            $rowsReport .= "<td><a onClick='deleteQuotation(" . $row[0] . ");' class='btn btn-danger'>Eliminar</a></td>";
            $rowsReport .= "</tr>";
        }
    }

?>

    $("tbody").empty();
    $("tbody").append("<?php echo $rowsReport; ?>");

<?php } else {
    die("No puedes entrar aqui");
}
