const toggleButton = document.getElementById('night-mode')
const body = document.body

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode')
});
