// --------Question 1
// Changez le texte de l'élément "myParagraph" pour "Bonjour, Monde!".

//récupération d'un élément par son id
let paragraphe = document.getElementById("myParagraph");
// paragraphe.innerHTML = "Bonjour, Monde !";
paragraphe.innerText = "Bonjour, Monde !"; // Il est préférable d'utiliser innerText


// --------Question 2
// Changez la couleur de fond de l'élément "myDiv" en bleu.

//récupération d'un élément par son id
let myDivBlue = document.getElementById("myDiv");
myDivBlue.style = "background-color : #0000ff";


// --------Question 3
// Ajoutez la classe css "highlight" à l'élément "myText"

let ajoutClass = document.getElementById("myText");
ajoutClass.className = "highlight";

        // autre solution en ajoutant un attribut
        // ajoutClass.setAttribute("highlight");

        // autre solution pour ajouter une class à la div
        // ajoutClass.classList.add("highlight");


// --------Question 4
/* Créez un nouvel élément HTML avec le texte "Nouvel élément ajouté!"
et insérez-le dans l'élément "myContainer".”
 */

let myContainer = document.getElementById("myContainer");
let element = document.createElement("div");
myContainer.appendChild(element);
element.innerHTML = "Nouvel élément ajouté !";


// --------Question 5
// Supprimez l'élément "Élément 2" de la liste "myList".

let mylist = document.getElementById("myList");
console.log(mylist)
mylist.children[1].remove();


        // Autre méthode
/* let list = document.getElementsByTagName("li");
console.log(list);

if (list.length >1){
    list[1].remove();
} */


// --------Question 6
// Modifiez un attribut src de l'élément "myImage" pour qu'il affiche new_image.png. */

let myImage = document.getElementById("myImage");
myImage.setAttribute("src", "new_image.png") // Modifie l’attribut spécifié d’un élément.

