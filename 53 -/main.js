document.addEventListener('DOMContentLoaded', function () {
    // Bouton de Menu
    const menuButton = document.getElementById('menuButton');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuButton.addEventListener('click', function (event) {
        event.preventDefault();
        toggleDropdownMenu();
        resetEtatActifNavItem();
        menuButton.parentNode.classList.add('active');
    });

    document.addEventListener('click', function (event) {
        if (!event.target.matches('#menuButton')) {
            fermerDropdownMenu();
            resetEtatActifNavItem();
        }
    });

    // Bouton de Panier
    const cartButton = document.querySelector('.nav-list-item:nth-child(2) a');
    const cartNotification = document.getElementById('cartNotification');

    cartButton.addEventListener('click', function (event) {
        event.preventDefault();
        toggleNotificationPanier();
    });

    document.addEventListener('click', function (event) {
        const isCartButton = event.target.matches('.nav-list-item:nth-child(2) a');
        const isNotification = event.target.closest('#cartNotification');

        if (!isCartButton && !isNotification) {
            fermerNotificationPanier();
        }
    });

    // Bouton de Recherche
    const searchButton = document.getElementById('searchButton');
    const searchBox = document.getElementById('searchBox');
    const closeSearchBox = document.getElementById('closeSearchBox');

    searchButton.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleBoiteRecherche();
    });

    closeSearchBox.addEventListener('click', function () {
        fermerBoiteRecherche();
    });

    document.addEventListener('click', function (event) {
        if (!searchBox.contains(event.target) && event.target !== searchButton && event.target !== closeSearchBox) {
            fermerBoiteRecherche();
        }
    });

    // Fonction pour basculer le menu déroulant
    function toggleDropdownMenu() {
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    }

    // Fonction pour fermer le menu déroulant
    function fermerDropdownMenu() {
        dropdownMenu.style.display = 'none';
    }

    // Fonction pour réinitialiser l'état actif des éléments de navigation
    function resetEtatActifNavItem() {
        document.querySelectorAll('.nav-list-item').forEach(function (item) {
            item.classList.remove('active');
        });
    }

    // Fonction pour basculer la notification de panier
    function toggleNotificationPanier() {
        cartNotification.style.display = (cartNotification.style.display === 'none' || cartNotification.style.display === '') ? 'block' : 'none';
    }

    // Fonction pour fermer la notification de panier
    function fermerNotificationPanier() {
        cartNotification.style.display = 'none';
    }

    // Fonction pour basculer la boîte de recherche
    function toggleBoiteRecherche() {
        searchBox.style.display = (searchBox.style.display === 'block') ? 'none' : 'block';
    }

    // Fonction pour fermer la boîte de recherche
    function fermerBoiteRecherche() {
        searchBox.style.display = 'none';
    }
});
