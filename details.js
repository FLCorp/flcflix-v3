

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton et la popup
    var showSecondPopupButton = document.getElementById('showSecondPopupButton');
    var popup2 = document.getElementById('popup2');
    var closeButton2 = document.getElementById('closeButton2');
  
    // Afficher la popup lorsque le bouton est cliqué
    showSecondPopupButton.addEventListener('click', function() {
      popup2.style.display = 'block';
    });
  
    // Fermer le popup lorsque le bouton de fermeture est cliqué
    closeButton2.addEventListener('click', function() {
      popup2.style.display = 'none';
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton et la popup
    var showThirdPopupButton = document.getElementById('showThirdPopupButton');
    var popup3 = document.getElementById('popup3');
    var closeButton3 = document.getElementById('closeButton3');
  
    // Afficher la popup lorsque le bouton est cliqué
    showThirdPopupButton.addEventListener('click', function() {
      popup3.style.display = 'block';
    });
  
    // Fermer le popup lorsque le bouton de fermeture est cliqué
    closeButton3.addEventListener('click', function() {
      popup3.style.display = 'none';
    });
  });