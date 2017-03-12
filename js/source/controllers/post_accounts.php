<?php
include 'connection.php';

$firstname = $_POST['firstname'] ? $_POST['firstname'] : '';
$lastname = $_POST['lastname'] ? $_POST['lastname'] : '';
$password = $_POST['password'] ? $_POST['password'] : '';
$emailaddress = $_POST['emailaddress'] ? $_POST['emailaddress'] : '';

/* Mysqli way
$query = "insert into account (firstname, lastname, password, emailaddress) values ('$firstname', '$lastname', '$password', '$emailaddress')";
if (!$result = $db->query($query)) {
	die ('There was an error running the query [' . $db->error . ']');
	}
$db->close();
*/
$sth = $db->prepare("INSERT INTO account
	(firstname, lastname, password, emailaddress) 
	values (:var1, :var2, :var3, :var4)");

$sth->execute(array(
	"var1" => $firstname,
	"var2" => $lastname,
	"var3" => $password,
	"var4" => $emailaddress
));

?>
