function checkAccessCode() {
    var enteredCode = document.getElementById('accessCodeInput').value;

    // Vérifier si le code entré est correct
    if (enteredCode === '01 07 2024') {
        // Rediriger vers la page autorisée
        window.location.href = 'https://flcorp.github.io/flcflixv4-webtesting';
    } else {
        // Afficher un message d'erreur
        document.getElementById('errorMessage').innerText = 'Et nan! Suis ta logique et regarde bien dans lAccueil';
    }
}
