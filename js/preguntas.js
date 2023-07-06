const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', () => {
        question.querySelector('.answer').classList.toggle('open');
    });
});