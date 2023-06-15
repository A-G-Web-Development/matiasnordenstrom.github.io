// Obtener los elementos del formulario
const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const mensajeInput = document.getElementById('mensaje');
const correoLink = document.getElementById('boton-submit');

// Agregar el evento submit al formulario
formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos del formulario
  const nombre = nombreInput.value;
  const email = emailInput.value;
  const telefono = telefonoInput.value;
  const mensaje = mensajeInput.value;

  // Construir el enlace del correo electrónico con los valores del formulario
  const subject = encodeURIComponent('Contacto desde el sitio web');
  const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`);
  const correoHref = `mailto:matias.correanqn@gmail.com?Subject=${subject}&Body=${body}`;

  // Actualizar el enlace del correo con los nuevos valores
  correoLink.href = correoHref;

  // Abrir la ventana de correo electrónico
  window.open(correoHref);
});