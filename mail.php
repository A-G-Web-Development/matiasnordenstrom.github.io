<?php
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $telefono = $_POST['telefono'];
  $mensaje = $_POST['mensaje'];

  $destinatario = 'guido.di.fiore@gmail.com';
  $asunto = 'Mail de Contacto';
  $cuerpo = '

<html>

<head>
  <title>Prueba de envio de mail</title>
</head>

<body>

  <p>
Mensaje enviado desde estudiojuridiconordenstrom.com <br><br>
    Nombre: ' . $nombre  . ' <br>
    Telefono: ' . $telefono .  ' <br>
    Email: ' . $email .  ' <br>
    Mensaje: ' . $mensaje . '
  </p>
</body>

</html>
';

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=UTF8\r\n";

  $headers .= "FROM: $nombre <$email>\r\n";
 $mailSuccess = mail($destinatario, $asunto, $cuerpo, $headers);
 

if ($mailSuccess) {
  // Si el correo se envió con éxito, redirige al índice con un mensaje de éxito
  header('Location: index.html?success=1');
} else {
  // Si hubo un error al enviar el correo, redirige al índice con un mensaje de error
  header('Location: index.html?success=0');
}
  ?>