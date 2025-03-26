document.addEventListener("DOMContentLoaded", function () {
  // Obtener el formulario por su ID
  const form = document.getElementById("formulario");

  // Manejar el evento submit del formulario
  form.addEventListener("submit", function (event) {
    // Prevenir que el formulario se envíe de manera convencional
    event.preventDefault();

    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LdHvAArAAAAACAsTv7MtvLw8a_N0nEODLyBu4Uy", { action: "submit_form" })
        .then(function (token) {
          // Verificar token con la API de Google
          verificarRecaptcha(token);
        }); 
    });

    function verificarRecaptcha(token) {
      fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=6LdHvAArAAAAAIVhTyeeNQUQZqtfI2XoA9B30Ovk&response=${token}`,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success && data.score > 0.5) {
            // reCAPTCHA verificado exitosamente, enviar formulario
            enviarCorreo();
          } else {
            // Mostrar error de reCAPTCHA
            Swal.fire({
              icon: "error",
              title: "Verificación fallida",
              text: "Por favor, intenta nuevamente.",
              showConfirmButton: false,
              timer: 3000,
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire({
            icon: "error",
            title: "Error de verificación",
            text: "Hubo un problema al verificar el formulario.",
            showConfirmButton: false,
            timer: 3000,
          });
        });
    }

    function enviarCorreo() {
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
            Swal.fire({
              icon: "success",
              title: "Éxito",
              text: "El correo se envió correctamente.",
              showConfirmButton: false,
              timer: 3000, // La alerta se cerrará automáticamente después de 3 segundos
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un error al enviar el correo.",
            showConfirmButton: false,
            timer: 3000, // La alerta se cerrará automáticamente después de 3 segundos
          });
        });

      // Resetear el formulario después de procesar los datos
      form.reset();
    }
  });
});
