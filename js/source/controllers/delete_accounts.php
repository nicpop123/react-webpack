<?php 
include 'connection.php';

$sql = "DELETE FROM account";
$query = $db->prepare($sql);
$response = $query->execute();
echo $response;

