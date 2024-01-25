document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn');
    button.addEventListener('click', changeBackgroundGradient);
});

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const changeBackgroundGradient = () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;


    const colorInfo = document.getElementById('color-info');
    colorInfo.textContent = `Color gradient : ${color1} to ${color2}`;
};
