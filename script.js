const modal = document.getElementById("modal-legales");
const linkPrivacidad = document.getElementById("link-privacidad");
const linkTerminos = document.getElementById("link-terminos");
const spanClose = document.getElementsByClassName("close-modal")[0];

linkPrivacidad.onclick = function(e) {
  e.preventDefault();
  modal.style.display = "flex";
}
linkTerminos.onclick = function(e) {
  e.preventDefault();
  modal.style.display = "flex";
}

spanClose.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ===== PORTFOLIO NICOW3B (antes script.js) =====
document.addEventListener('DOMContentLoaded', () => {

  // Funcionalidad del botón de saludo
  const btnSaludo = document.getElementById('btn-saludo');
  if (btnSaludo) {
    btnSaludo.addEventListener('click', () => {
      alert('¡Gracias por tu interés! Puedes contactarme enviando un correo a mi dirección o a través de mi perfil de GitHub/LinkedIn.');
    });
  }

  // Smooth scrolling para los enlaces de navegación
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  console.log("nicow3b portfolio cargado correctamente.");
});
