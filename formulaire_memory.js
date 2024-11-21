"use strict";

const form = document.getElementById("inscription"); //Peut-on l'évincer du code ????

// Valider inscription => pour écouté un evenement submit 
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire

    // récupérer les valeurs du login
    const loginVar = document.getElementById("loginID").value;

    // récupérer les valeurs du mot de passe
    const passwordVar = document.getElementById("mdpID").value;

    // récupérer les valeurs de la vérification du mot de passe
    const passwordVerifVar = document.getElementById("mdpVerifID").value;

    localStorage.setItem("login", loginVar);


    if (passwordVar === passwordVerifVar) {
        localStorage.setItem("password", passwordVar);

    } else {
        alert("mot de passe incorect");
    }

    alert("Inscription effectuée en LocalStorage");
})


// Information stockée ds le LocalStorage 

/* localStorage.setItem("inscriptionJSON", JSON.stringify(login));
localStorage.setItem("inscriptionJSON", JSON.stringify(password)); */
localStorage.setItem("inscriptionJSON", JSON.stringify({login, password}));

const recupInscriptionJSON = JSON.parse(localStorage.getItem("inscriptionJSON"));
console.log(recupInscriptionJSON);




//---Recuperation des données d'un fichier JSON--- //

fetch('data.json')
    .then(response=>response.json())
    .then(data => afficherData("inscriptionJSON"))

function afficherData(data){
    console.log(data)
}