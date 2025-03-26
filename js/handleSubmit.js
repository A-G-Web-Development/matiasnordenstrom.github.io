document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LdHvAArAAAAACAsTv7MtvLw8a_N0nEODLyBu4Uy", {
          action: "submit_form",
        })
        .then(function (token) {
          // Añadir el token al formulario antes de enviarlo
          const tokenInput = document.createElement("input");
          tokenInput.type = "hidden";
          tokenInput.name = "g-recaptcha-response";
          tokenInput.value = token;
          form.appendChild(tokenInput);

          // Continuar con el envío del formulario
          enviarCorreo();
        });
    });

    function enviarCorreo() {
      // Obtener los valores de los campos del formulario
      const formData = new FormData(form);
      const name = formData.get("nombre");
      const email = formData.get("email");
      const message = formData.get("mensaje");
      const telefono = formData.get("telefono");

      // Crear un objeto con los datos del formulario
      const data = {
        to: "webdevelopment.ag@gmail.com",
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
              timer: 3000,
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un error al enviar el correo.",
            showConfirmButton: false,
            timer: 3000,
          });
        });

      // Resetear el formulario después de procesar los datos
      form.reset();
    }
  });
});
