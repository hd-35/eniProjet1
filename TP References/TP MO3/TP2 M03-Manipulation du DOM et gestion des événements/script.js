/* Niveau 1 
Dans un fichier html créer un select qui contient les valeurs Bleu, Vert et Rouge. Ajouter un 
évènement qui change la couleur de fond de la page par la couleur choisie.  */

document.getElementById('btnBlue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
})

document.getElementById('btnGreen').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})

document.getElementById('btnRed').addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
})


/* Niveau 2  
Dans un fichier html, ajouter une balise h1 contenant « Mon ancien titre ». 
Ajouter un évènement qui modifie le titre par « Mon nouveau titre » quand vous passez la 
souris dessus. 
Puis un second évènement qui remet l’ancien titre quand la souris quitte l’élément.  */

let bodyH1 = document.getElementsByTagName("body")[0]; 
let elementH1 = document.createElement('h1'); 
bodyH1.append(elementH1);
elementH1.innerHTML = "Mon ancien titre"; 


document.querySelector('h1').addEventListener('mouseover', mouseHoverH1);
function mouseHoverH1() {
    document.querySelector('h1').innerText = "Mon nouveau titre";
}
document.querySelector('h1').addEventListener('mouseout', mouseOutH1);
function mouseOutH1() {
    document.querySelector('h1').innerText = "Mon ancien titre";
}


/* Niveau 3  
Ajouter une balise h2 à l’exercice précédent qui utilise les mêmes évènements.  */

let bodyH2 = document.getElementsByTagName("body")[0]; 
let elementH2 = document.createElement('h2'); 
bodyH2.append(elementH2);
elementH2.innerHTML = "Mon ancien sous-titre"; 


document.querySelector('h2').addEventListener('mouseover', mouseHover);
function mouseHover() {
    document.querySelector('h2').innerText = "Mon nouveau sous-titre";
}
document.querySelector('h2').addEventListener('mouseout', mouseOut);
function mouseOut() {
    document.querySelector('h2').innerText = "Mon ancien sous-titre";
}


/* Niveau 4  
Dans un fichier html, ajoutez un input et un bouton, le bouton se déplace si vous essayez 
de cliquer dessus tant que l'input est vide. Quand l’input n’est plus vide, le bouton revient 
à sa position originale. */



// PISTE
/* const element = document.getElementById('escapeBtn');
const maxX = 1000; // largeur de la fenêtre
const maxY = 600; // hauteur de la fenêtre

function moveElement() {
  const x = Math.round(Math.random() * (maxX - element.offsetWidth));
  const y = Math.round(Math.random() * (maxY - element.offsetHeight));
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
  setTimeout(moveElement, 100); // répétez le mouvement à intervalle régulier
}
moveElement(); */

const inpEscape = '<input type="button" id="escapeBtn" value="cliquez ici">';
let escapeBtn = document.getElementById("inputTexte");
let elementEscape = document.createElement('inpEscape'); 
escapeBtn.append(elementEscape);
/* elementEscape.innerHTML = '<input type="button" id="escapeBtn" value="cliquez ici">'; 
 */

/* document.querySelector('inpEscape').addEventListener('mouseover', mouseHover);
function mouseHover() {
    elementEscape = document.removeElement('inpEscape');}

    document.querySelector('inpEscape').addEventListener('mouseout', mouseHover);
function mouseHover() {
    elementEscape = document.createElement('inpEscape');} */
