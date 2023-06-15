// Obtener referencia al formulario
const form = document.querySelector('#miFormulario');

// Agregar un evento de envío al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los datos del formulario
  const formData = new FormData(form);
  const datos = {};
  formData.forEach((value, key) => {
    datos[key] = value;
  });

  // Crear el contenido del correo electrónico
  const correo = {
    to: 'destinatario@example.com', // Dirección de correo del destinatario
    subject: 'Nuevo formulario enviado',
    body: JSON.stringify(datos, null, 2) // Convertir los datos en una cadena JSON formateada
  };

  // Crear una cadena de consulta para el correo electrónico
  const queryString = Object.keys(correo).map(key => `${key}=${encodeURIComponent(correo[key])}`).join('&');

  // Crear un enlace "mailto" con la cadena de consulta
  const mailtoLink = `mailto:${correo.to}?${queryString}`;

  // Abrir el enlace de correo electrónico
  window.location.href = mailtoLink;
});
