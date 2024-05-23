const displayButton = document.getElementById('display');
const body = document.body;

displayButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});


const backButton = document.getElementById('backButton');

backButton.addEventListener('click', () => {
 
    window.history.back();
});