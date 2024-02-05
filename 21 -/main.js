let toggler = document.getElementById('switch');

toggler.addEventListener('click', () => {
    if (toggler.checked === true) {
        document.body.style.backgroundColor = "#1f1e1e";
    } else {
        document.body.style.backgroundColor = "#dfcdcd";
    }
});
