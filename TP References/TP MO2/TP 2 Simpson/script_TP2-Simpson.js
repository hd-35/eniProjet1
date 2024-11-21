/* Énoncé
Niveau 1
Créer un fichier index.html et un fichier javascript associé.
Par le biais d’un popup, permettre une saisie utilisateur afin de connaitre son personnage préféré des Simpsons.
Stocker cette information dans le storage pour la durée de la session sous la clé « personnage ».

Niveau 2
Lorsque vous arrivez sur la page index.html, s’il n’y a rien de stocker dans le storage sous la clé « personnage »,
permettre la saisie et l’enregistrement d’un personnage de façon pérenne, sinon afficher l’information dans une popup

Niveau 3
Dans le cas où vous affichez l’information, permettre à l’utilisateur de modifier son choix, s’il le désire.

Niveau 4
Créer un fichier JSON représentant les informations de 3 utilisateurs (nom, âge, ville), sous la clé générale « users ».
Testez la conformité de votre fichier à cette adresse : https://jsonformatter.curiousconcept.com/

Niveau 5
Depuis votre fichier javascript récupérer les informations contenues dans le fichier JSON et stocker les dans le localStorage, puis récupérer ces informations depuis le localStorage pour les afficher. Pour cet exercice utiliser la fonction fetch (attention : pour son bon fonctionnement vous devez lancer le code depuis une page html).
Solution
 */

"use strict";

// Niveau 2 : Vérification si un personnage est déjà enregistré dans le sessionStorage
let personnageStocke = sessionStorage.getItem("personnage");

if (!personnageStocke) {
  // Si aucun personnage n'est enregistré dans le sessionStorage
  personnageStocke = localStorage.getItem("personnage");

  if (!personnageStocke) {
    // Si rien n'est trouvé dans le localStorage, on demande à l'utilisateur
    personnageStocke = prompt("Quel est ton personnage préféré des Simpsons ?");
    
    if (personnageStocke && personnageStocke.trim() !== "") {
      // Niveau 1 : On stocke la donnée dans le sessionStorage et le localStorage pour la persistance
      sessionStorage.setItem("personnage", personnageStocke);
      localStorage.setItem("personnage", personnageStocke);
      alert("Ton personnage préféré est " + personnageStocke);
    } else {
      alert("Tu n'as pas choisi de personnage.");
    }
  } else {
    // Niveau 2 : Si un personnage est trouvé dans le localStorage
    alert("Ton personnage préféré est " + personnageStocke);
  }
} else {
  // Niveau 3 : Si le personnage est déjà dans le sessionStorage, on affiche et demande une confirmation
  let reponseConfirmation = confirm(personnageStocke + " est vraiment ton personnage préféré ?");
  if (reponseConfirmation) {
    console.log("Parfait !");
  } else {
    console.log("Recommençons !");
    personnageStocke = prompt("Quel est ton personnage préféré des Simpsons ?");
    if (personnageStocke && personnageStocke.trim() !== "") {
      // On met à jour le sessionStorage et le localStorage
      sessionStorage.setItem("personnage", personnageStocke);
      localStorage.setItem("personnage", personnageStocke);
      alert("Ton personnage préféré est maintenant " + personnageStocke);
    } else {
      alert("Tu n'as pas choisi de personnage.");
    }
  }
}


fetch("data.json")