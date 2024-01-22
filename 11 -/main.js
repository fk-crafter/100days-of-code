document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Error : Complete all required fields.';
    } else {
        document.getElementById('error-message').textContent = '';
        resetButtonPosition();
    }
});

function moveButton() {
    var submitButton = document.querySelector('input[type="submit"]');
    var buttonRect = submitButton.getBoundingClientRect();
    var formRect = document.querySelector('.login-container').getBoundingClientRect();

    var minX = Math.max(formRect.left, buttonRect.left - 200);
    var maxX = Math.min(formRect.right - submitButton.offsetWidth, buttonRect.left + 200);
    var minY = Math.max(formRect.top, buttonRect.top - 200);
    var maxY = Math.min(formRect.bottom - submitButton.offsetHeight, buttonRect.top + 200);

    var newX = Math.random() * (maxX - minX) + minX;
    var newY = Math.random() * (maxY - minY) + minY;

    submitButton.style.transform = `translate(${newX - buttonRect.left}px, ${newY - buttonRect.top}px)`;
}

function resetButtonPosition() {
    var submitButton = document.querySelector('input[type="submit"]');
    submitButton.style.transform = 'translate(0, 0)';
}

var submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('mouseover', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username === '' || password === '') {
        moveButton();
    }
});

document.querySelectorAll('input[type="text"], input[type="password"]').forEach(input => {
    input.addEventListener('input', function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if(username !== '' && password !== '') {
            resetButtonPosition();
        }
    });
});
