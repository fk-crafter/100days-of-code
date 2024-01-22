document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Error : Complete all required fields.';
    } else {
        document.getElementById('error-message').textContent = '';
        resetButtonPosition();
    }
});

function moveButton() {
    let submitButton = document.querySelector('input[type="submit"]');
    let buttonRect = submitButton.getBoundingClientRect();
    let formRect = document.querySelector('.login-container').getBoundingClientRect();

    let minX = Math.max(formRect.left, buttonRect.left - 200);
    let maxX = Math.min(formRect.right - submitButton.offsetWidth, buttonRect.left + 200);
    let minY = Math.max(formRect.top, buttonRect.top - 200);
    let maxY = Math.min(formRect.bottom - submitButton.offsetHeight, buttonRect.top + 200);

    let newX = Math.random() * (maxX - minX) + minX;
    let newY = Math.random() * (maxY - minY) + minY;

    submitButton.style.transform = `translate(${newX - buttonRect.left}px, ${newY - buttonRect.top}px)`;
}

function resetButtonPosition() {
    let submitButton = document.querySelector('input[type="submit"]');
    submitButton.style.transform = 'translate(0, 0)';
}

let submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('mouseover', function(event) {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username === '' || password === '') {
        moveButton();
    }
});

document.querySelectorAll('input[type="text"], input[type="password"]').forEach(input => {
    input.addEventListener('input', function() {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        if(username !== '' && password !== '') {
            resetButtonPosition();
        }
    });
});
