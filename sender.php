<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'starshova1309@gmail.com';
$date = date ('d.m.y');
$time = date ('h:i');
$from = $email;

$msg="
Имя: $name
Почта: $email
Текст: $message";
mail($to, $msg, "From: $from")

?>