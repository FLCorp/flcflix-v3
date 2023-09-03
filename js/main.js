//Couleurs
var t = document.getElementsByTagName('p');
var parag = t[1].innerHTML;


parag.addEventListener('click',changeTexte);

function changeTexte(){
    this.innerHTML = 'Vous avez cliqué sur le text!';
    this.style.color = 'red';
    this.style.fontSize = '20px';
}
let theOddOnes = document.getElementsByTagName("p");
for(let i=0; i<theOddOnes.length; i++){ theOddOnes[i].addEventListener('click', changeTexte); }
