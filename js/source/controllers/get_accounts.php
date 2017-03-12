<?php
include 'connection.php';

$statement = $db->prepare("SELECT * FROM account");
$statement->execute();
$result = json_encode($statement->fetchAll(PDO::FETCH_ASSOC));

echo $result;
?>
