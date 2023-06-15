function enviarCorreo() {
  Email.send({
    SecureToken: "4598042FDDB2E73BEA7CCC15475644C9EB5B",
    To: "webdevelopment.ag@gmail.com",
    From: "remitente@example.com",
    Subject: "Correo de prueba",
    Body: "Este es un correo de prueba enviado desde el navegador"
  }).then(
    message => alert("Correo enviado correctamente: " + message)
  );
}