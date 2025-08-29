// FORMULARIO DE CONTACTO CON VALIDACIÓN

document.addEventListener("DOMContentLoaded", function () {
  const contactoFormulario = document.getElementById("contactoFormulario");

  if (contactoFormulario) {
    contactoFormulario.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("Nombre").value.trim();
      const email = document.getElementById("Email").value.trim();
      const mensaje = document.getElementById("Documento").value.trim();

      //VALIDACION BÁSICA
      if (!nombre || !email || !mensaje) {
        alert("❌Por favor, completa todos los campos obligatorios.");
        return;
      }

      //VALIDACION DE EMAIL
      //Esta línea crea una expresión regular (regex) que define cómo debe verse un email válido.
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("❌Por favor, introduce un email válido.");
        return;
      }

      //VALIDACION DE LONGITUD DEL MENSAJE
      if (mensaje.length < 10) {
        alert("❌ El mensaje debe tener al menos 10 caracteres.");
        return;
      }

      //ENVÍO EXITOSO
      alert("✅ ¡Gracias ${nombre}! Mensaje enviado correctamente.");

      //LIMPIAR FORMULARIO
      contactoFormulario.reset();

      //LOG PARA DESARROLLO
      console.log("📧 Formulario enviado:", {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        timestamp: new Date().toISOString(),
      });
    });
  }
});

//INICIALIZACIÓN Y DEBUGGING
window.addEventListener("load", function() {
  console.log('🚀 Portfolio cargado correctamente');
});


//MANEJO DE ERRORES
window.addEventListener("error",function(e) {
  console.log('❌ Error en el portfolio:', e.error);
});
