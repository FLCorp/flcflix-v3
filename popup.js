document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le popup et le bouton de fermeture
    var popup = document.getElementById('popup');
    var closeButton = document.getElementById('closeButton');
  
    // Afficher le popup
    popup.style.display = 'block';
  
    // Fermer le popup lorsque le bouton est cliqué
    closeButton.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  });
  