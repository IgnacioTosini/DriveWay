// Obtener todos los elementos que deseas observar
const animatedHeadings = document.querySelectorAll('.animated-heading');

// Crear una función de callback para el IntersectionObserver
const animateElement = (entry) => {
  if (entry.isIntersecting) {
    entry.target.style.animation = "scrollUp 1s forwards"; // Iniciamos la animación cuando el texto es visible
    observer.unobserve(entry.target); // Dejamos de observar una vez que se inicia la animación
  }
};

// Crear un nuevo IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(animateElement);
}, { threshold: 0.5 }); // Puedes ajustar el umbral según tus necesidades

// Observar cada uno de los elementos
animatedHeadings.forEach((animatedHeading) => {
  observer.observe(animatedHeading);
});