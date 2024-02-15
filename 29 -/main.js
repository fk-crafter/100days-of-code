const sidebar = document.querySelector('.sidebar')
const toggleBtn = document.querySelector('.toggle-btn')

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    let targetElement = e.target; // L'élément cliqué
    let clickedInsideSidebar = targetElement.closest('.sidebar');

    if (!clickedInsideSidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});
