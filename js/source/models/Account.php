<?php
class Account {
	$firstname;
	$lastname;
	$password;
	$emailaddress;
	
	function __construct($f, $l, $p, $e) {
		$this->firstname = $f;
		$this->lastname = $l;
		$this->password = $p;
		$this->emailaddress = $e; 
	}

}
?>
