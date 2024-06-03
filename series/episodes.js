let episodesTitle = document.getElementById('episodesTitle');

// Saison 1
let s1e1 = document.getElementById('s1e1');
let s1e2 = document.getElementById('s1e2');
let s1e3 = document.getElementById('s1e3');
let s1e4 = document.getElementById('s1e4');
let s1e5 = document.getElementById('s1e5');
let s1e6 = document.getElementById('s1e6');
let s1e7 = document.getElementById('s1e7');
let s1e8 = document.getElementById('s1e8');
let s1e9 = document.getElementById('s1e9');
let s1e10 = document.getElementById('s1e10');
let s1e11 = document.getElementById('s1e11');
// Saison 2
let s2e1 = document.getElementById('s2e1');
let s2e2 = document.getElementById('s2e2');
let s2e3 = document.getElementById('s2e3');
let s2e4 = document.getElementById('s2e4');
let s2e5 = document.getElementById('s2e5');
let s2e6 = document.getElementById('s2e6');
let s2e7 = document.getElementById('s2e7');
let s2e8 = document.getElementById('s2e8');
let s2e9 = document.getElementById('s2e9');
let s2e10 = document.getElementById('s2e10');
let s2e11 = document.getElementById('s2e11');
let s2e12 = document.getElementById('s2e12');
let s2e13 = document.getElementById('s2e13');

// Saison 1
s1e1.addEventListener('click', function() {
    modifierTitre("Saison 1 - Épisode 1");
});
s1e2.addEventListener('click', function() {
    modifierTitre("Saison 1 - Épisode 2");
});
s1e3.addEventListener('click', function() {
    modifierTitre("Saison 1 - Épisode 3");
});
s1e4.addEventListener('click', function() {
    modifierTitre("Saison 1 - Épisode 4");
});
s1e5.addEventListener('click', function() {
    modifierTitre("Saison 1 - Épisode 5");
});
s1e6.addEventListener('click', function() {
    modifierTitre("Saison 1 - Épisode 6");
});
s1e7.addEventListener('click', function() {
    modifierTitre("Saison 1 - Épisode 7");
});
s1e8.addEventListener('click', function() {
    modifierTitre("Saison 1 - Épisode 8");
});
s1e9.addEventListener('click', function() {
    modifierTitre("Saison 1 - Épisode 9");
});
s1e10.addEventListener('click', function() {
    modifierTitre("Saison 1 - Épisode 10");
});
s1e11.addEventListener('click', function() {
    modifierTitre("Saison 1 - Épisode 11");
});

// Saison 2
s2e1.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 1");
});
s2e2.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 2");
});
s2e3.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 3");
});
s2e4.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 4");
});
s2e5.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 5");
});
s2e6.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 6");
});
s2e7.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 7");
});
s2e8.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 8");
});
s2e9.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 9");
});
s2e10.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 10");
});
s2e11.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 11");
});
s2e12.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 12");
});
s2e13.addEventListener('click', function() {
    modifierTitre("Saison 2 - Épisode 13");
});


// Fonction pour modifier le titre
function modifierTitre(nouveauTitre) {
    episodesTitle.textContent = nouveauTitre;
}
