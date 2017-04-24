<?php
// Variables
$remitente = "fwd613@gmail.com";
$destinatario = $_POST['email'];
$asunto = $_POST['asunto'];
$nombres = $_POST['nombres'];
$apellidos = $_POST['apellidos'];
$empresa = $_POST['empresa'];
$telefono = $_POST['telefono'];
$celular = $_POST['celular'];
$pais = $_POST['pais'];
$mensaje = $_POST['mensaje'];

$cuerpo = '
<html>
<head>
   <title>Contactanos</title>
</head>
<body>
<h1>Servicio de contacto de Lechugas y Más</h1>
<p>
<b>Mis datos son:</b>.
 <br>
 <b>Nombres: </b>';
$cuerpo .= $nombres;
$cuerpo .= '<br><b>Apellidos: </b>';
$cuerpo .= $apellidos;
$cuerpo .= '<br><b>Empresa: </b>';
$cuerpo .= $empresa;
$cuerpo .= '<br><b>Teléfono: </b>';
$cuerpo .= $telefono;
$cuerpo .= '<br><b>Móvil: </b>';
$cuerpo .= $celular;
$cuerpo .= '<br><b>Correo Electrónico: </b>';
$cuerpo .= $destinatario;
$cuerpo .= '<br><b>País: </b>';
$cuerpo .= $pais;
$cuerpo .= '<br><br><b>Mis comentarios son: </b><br>';
$cuerpo .= $mensaje;
$cuerpo .='</p>
</body>
</html>
';
//configuracion de correo
//para el envío en formato HTML
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

//dirección del remitente
$headers .= "From: Lechugas y Más <";
$headers .=$remitente;
$headers .=">\r\n";

//dirección de respuesta, si queremos que sea distinta que la del remitente
$headers .= "Reply-To: ";
$headers .=$remitente;
$headers .="\r\n";

//ruta del mensaje desde origen a destino
$headers .= "Return-path: ";
$headers .=$remitente;
$headers .="\r\n";

//direcciones que recibián copia
$headers .= "Cc: ";
$headers .=$destinatario;
$headers .="\r\n";

//direcciones que recibirán copia oculta
//$headers .= "Bcc: \r\n";

mail($remitente,$asunto,$cuerpo,$headers)
?>