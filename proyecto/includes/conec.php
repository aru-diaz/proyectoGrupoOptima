<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "grupoOptimaExamen";

$link = new mysqli($servername, $username, $password, $db);

if ($link->connect_error) {
    die("Connection failed: " . $link->connect_error);
}
