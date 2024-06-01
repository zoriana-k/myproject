document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('overlay');
    const subscribeForm = document.getElementById('subscribeForm');
    const subscribeMessage = document.getElementById('subscribeMessage');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        overlay.style.display = navMenu.classList.contains('show') ? 'block' : 'none';
    });

    overlay.addEventListener('click', () => {
        navMenu.classList.remove('show');
        overlay.style.display = 'none';
    });

    subscribeForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(subscribeForm);
        const response = await fetch(subscribeForm.action, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        if (result.success) {
            subscribeMessage.textContent = 'Ви успішно підписались на розсилку!';
        } else {
            subscribeMessage.textContent = 'Виникла помилка: ' + result.error;
        }
    });
});
