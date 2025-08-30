// MENÚ RESPONSIVE
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const navMobile = document.getElementById("navMobile");

  if (!menuBtn || !navMobile) {
    console.log("ERROR: Elementos del menú no encontrados");
    return;
  }

  // Toggle menú móvil
  menuBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    navMobile.classList.toggle("active");
  });

  //Cerrar menú al hacer clic en enlaces
  const mobileLinks = navMobile.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuBtn.classList.remove("active");
      navMobile.classList.remove("active");
    });
  });
});

// FORMULARIO DE CONTACTO CON VALIDACIÓN
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

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
      alert(`✅ ¡Gracias ${nombre}! Mensaje enviado correctamente.`);

      //LIMPIAR FORMULARIO
      formulario.reset();

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

//POPUP DE COOKIES
document.addEventListener("DOMContentLoaded", function () {
  const cookiePopup = document.getElementById("cookiePopup");
  const acceptAll = document.getElementById("acceptAll");
  const acceptEssential = document.getElementById("acceptEssential");
  const rejectCookies = document.getElementById("rejectCookies");

  //Mostar popup si no hay consentimiento previo
  if (!getCookie("cookieConsent")) {
    setTimeout(() => {
      cookiePopup.classList.add("show");
    }, 2000);
  }

  acceptAll.addEventListener("click", () => {
    console.log("🍪 Usuario eligió: ACEPTAR TODAS las cookies");
    setCookie("cookieConsent", "all", 365);
    hidePopup();
  });

  acceptEssential.addEventListener("click", () => {
    console.log("🍪 Usuario eligió: SOLO COOKIES ESENCIALES");
    setCookie("cookieConsent", "essential", 365);
    hidePopup();
  });

  rejectCookies.addEventListener("click", () => {
    console.log("🍪 Usuario eligió: RECHAZAR cookies");
    setCookie("cookieConsent", "rejected", 365);
    hidePopup();
  });

  function hidePopup() {
    cookiePopup.classList.remove("show");
  }

  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
});

//INICIALIZACIÓN Y DEBUGGING
window.addEventListener("load", function () {
  console.log("🚀 Portfolio cargado correctamente");
});

//MANEJO DE ERRORES
window.addEventListener("error", function (e) {
  console.log("❌ Error en el portfolio:", e.error);
});
