document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    button.addEventListener('click', function() {
        message.textContent = 'Message changed by JavaScript!';
        message.style.color = '#007bff';
    });
});