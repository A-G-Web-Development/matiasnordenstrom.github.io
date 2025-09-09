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
          const tokenInput = document.createElement("input");
          tokenInput.type = "hidden";
          tokenInput.name = "g-recaptcha-response";
          tokenInput.value = token;
          form.appendChild(tokenInput);

          enviarCorreo();
        });
    });

    function enviarCorreo() {
      const formData = new FormData(form);
      const name = formData.get("nombre");
      const email = formData.get("email");
      const message = formData.get("mensaje");
      const telefono = formData.get("telefono");

      // Adaptación al nuevo formato
      const body = {
        template: "contacto-generico",
        origen_name: "estudio-juridico-nordenstrom",
        campania_name: "contacto",
        data: {
          nombre: name,
          email: email,
          telefono: telefono,
          mensaje: message,
          subject: "Nuevo mensaje de contacto",
        },
      };

      fetch("https://sistemajudi.online/api/api/emails/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((res) => {
          if (!res.data) throw new Error(res.error || "Error");

          Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "El correo se envió correctamente.",
            showConfirmButton: false,
            timer: 3000,
          });
          form.reset();
        })
        .catch((error) => {
          console.error("Error al enviar:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un error al enviar el correo.",
            showConfirmButton: false,
            timer: 3000,
          });
        });
    }
  });
});
