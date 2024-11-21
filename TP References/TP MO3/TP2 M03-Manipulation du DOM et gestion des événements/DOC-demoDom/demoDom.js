//récupération du h1
let title = document.querySelector("h1");

console.log(title);



//modification du texte du h1
title.innerHTML="autre chose";



//récupération d'un élément par son id
let paragraphe = document.getElementById("idP");

console.log(paragraphe);

paragraphe.innerHTML = "un text";



//modification de la classe de mon paragraphe
paragraphe.className = "red";



//récupération de la liste
let list = document.getElementById("list");

for (let i = 0; i< 10; i++){
    //création de l'élémént 
    let elem = document.createElement("li");

    elem.innerText = "element : " + i;

    elem.setAttribute("class", "green");
    
    list.appendChild(elem);
}