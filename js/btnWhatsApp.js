const whatsappIcon = document.querySelector('#whatsapp-icon');
const whatsappContainer = document.querySelector('.whatsapp-container');

whatsappIcon.addEventListener('mouseover', () => {
    whatsappContainer.classList.add('hover');
});

whatsappIcon.addEventListener('mouseout', () => {
    whatsappContainer.classList.remove('hover');
});