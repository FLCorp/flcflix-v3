// Récupérer les éléments du DOM
const daysElementTwo = document.getElementById('daysTwo');
const hoursElementTwo = document.getElementById('hoursTwo');
const minutesElementTwo = document.getElementById('minutesTwo');
const secondsElementTwo = document.getElementById('secondsTwo');

// Date et heure cible (remplacez cette valeur par la date et l'heure souhaitées)
const targetDate = new Date('2024-07-01T00:00:00');

function updateTimer() {
  // Obtenir la date et l'heure actuelles
  const now = new Date();

  // Calculer le temps restant en millisecondes
  const remainingTime = targetDate - now;

  if (remainingTime <= 0) {
    // Si la date cible est dépassée, afficher 00:00:00:00
    daysElementTwo.textContent = '00';
    hoursElementTwo.textContent = '00';
    minutesElementTwo.textContent = '00';
    secondsElementTwo.textContent = '00';
    clearInterval(interval);
    alert("La nouvelle MAJ débarque bientôt!");
    return;
  }

  // Convertir le temps restant en jours, heures, minutes et secondes
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Mettre à jour l'affichage du timer
  daysElementTwo.textContent = String(days).padStart(2, '0');
  hoursElementTwo.textContent = String(hours).padStart(2, '0');
  minutesElementTwo.textContent = String(minutes).padStart(2, '0');
  secondsElementTwo.textContent = String(seconds).padStart(2, '0');
}

// Mettre à jour le timer toutes les secondes
const interval = setInterval(updateTimer, 1000);
