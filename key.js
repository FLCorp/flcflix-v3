// Attache un écouteur d'événement pour détecter les touches du clavier
document.addEventListener('keydown', function(event) {
    // Vérifie si la touche appuyée est la touche souhaitée
    if (event.key === 't') {
        // Empêche le comportement par défaut de la touche
        event.preventDefault();

        // Appelle la fonction pour faire défiler vers l'élément avec l'ID spécifié, par exemple 'monElement'
        scrollToElement('top');
    }
});

document.addEventListener('keydown', function(event) {
    // Vérifie si la touche appuyée est la touche souhaitée
    if (event.key === 'f') {
        // Empêche le comportement par défaut de la touche
        event.preventDefault();

        // Appelle la fonction pour faire défiler vers l'élément avec l'ID spécifié, par exemple 'monElement'
        scrollToElement('films');
    }
});

document.addEventListener('keydown', function(event) {
    // Vérifie si la touche appuyée est la touche souhaitée
    if (event.key === 's') {
        // Empêche le comportement par défaut de la touche
        event.preventDefault();

        // Appelle la fonction pour faire défiler vers l'élément avec l'ID spécifié, par exemple 'monElement'
        scrollToElement('series');
    }
});

document.addEventListener('keydown', function(event) {
    // Vérifie si la touche appuyée est la touche souhaitée
    if (event.key === 'd') {
        // Empêche le comportement par défaut de la touche
        event.preventDefault();

        // Appelle la fonction pour faire défiler vers l'élément avec l'ID spécifié, par exemple 'monElement'
        scrollToElement('docs');
    }
});

document.addEventListener('keydown', function(event) {
    // Vérifie si la touche appuyée est la touche souhaitée
    if (event.key === 'b') {
        // Empêche le comportement par défaut de la touche
        event.preventDefault();

        // Appelle la fonction pour faire défiler vers l'élément avec l'ID spécifié, par exemple 'monElement'
        scrollToElement('bottom');
    }
});

document.addEventListener('keydown', function(event) {
    // Vérifie si la touche appuyée est la touche souhaitée
    if (event.key === 'n') {
        // Empêche le comportement par défaut de la touche
        event.preventDefault();

        // Appelle la fonction pour faire défiler vers l'élément avec l'ID spécifié, par exemple 'monElement'
        scrollToElement('news-update');
    }
});

// Fonction pour faire défiler vers un élément par son ID
function scrollToElement(elementId) {
    // Récupère l'élément par son ID
    var element = document.getElementById(elementId);

    // Vérifie si l'élément existe
    if (element) {
        // Utilise la méthode scrollIntoView pour faire défiler la page jusqu'à l'élément
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
