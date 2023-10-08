// Récupérer les éléments du DOM
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Date et heure cible (remplacez cette valeur par la date et l'heure souhaitées)
const targetDate = new Date('2023-11-06T00:00:00');

function updateTimer() {
  // Obtenir la date et l'heure actuelles
  const now = new Date();

  // Calculer le temps restant en millisecondes
  const remainingTime = targetDate - now;

  if (remainingTime <= 0) {
    // Si la date cible est dépassée, afficher 00:00:00:00
    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
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
  daysElement.textContent = String(days).padStart(2, '0');
  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');
}

// Mettre à jour le timer toutes les secondes
const interval = setInterval(updateTimer, 1000);
