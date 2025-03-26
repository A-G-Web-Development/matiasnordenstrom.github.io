document.addEventListener("DOMContentLoaded", function () {
  // Obtener el formulario por su ID
  const form = document.getElementById("formulario");

  // Manejar el evento submit del formulario
  form.addEventListener("submit", function (event) {
    // Prevenir que el formulario se envíe de manera convencional
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const formData = new FormData(form);
    const name = formData.get("nombre");
    const email = formData.get("email");
    const message = formData.get("mensaje");
    const telefono = formData.get("telefono");

    // Crear un objeto con los datos del formulario
    const data = {
      to: "webdevelopment.ag@gmail.com", // Reemplaza con la dirección de correo electrónico del destinatario
      titulo: "Nuevo mensaje de contacto",
      texto: message + "\n Teléfono: " + telefono,
      subject: "Nuevo mensaje de contacto",
      fromEmail: email,
      fromNombre: name,
    };

    // Hacer una solicitud POST a tu endpoint con los datos del formulario
    fetch("https://api.mpconfort.com.ar/api/send-email-externo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Hubo un problema al enviar el correo.");
        } else {
          alert("Correo electrónico enviado correctamente");
        }
      })
      .catch((error) => {
        alert(
          "Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo más tarde."
        );
      });

    // Resetear el formulario después de procesar los datos
    form.reset();
  });
});
