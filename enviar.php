<?php

$para = 'estebanoller73@gmail.com';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$contenido = "Nombre: " . $name . "\nCorreo: " . $email . "\nTeléfono: " . $phone . "\nMensaje: " . $message;
mail($para, "Contacto", $contenido);
header("Location:index.html");

?>