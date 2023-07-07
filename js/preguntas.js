const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    // Comprueba si la pregunta ya está activa
    const isActive = question.classList.contains('active');

    // Cierra todas las preguntas abiertas
    questions.forEach(q => q.classList.remove('active'));

    // Abre la pregunta si no estaba previamente activa
    if (!isActive) {
      question.classList.add('active');
    }
  });
});