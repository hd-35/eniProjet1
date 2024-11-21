// Niveau 1
// Créer un fichier index.html et un fichier javascript associé.
// Par le biais d’un popup, permettre une saisie utilisateur afin de connaitre son personnage préféré des Simpsons.
// Stocker cette information dans le storage pour la durée de la session sous la clé « personnage ».

let personnage = prompt("Quel est votre personnage préféré?")

sessionStorage.setItem("personnage", personnage);

// Niveau 2
// Lorsque vous arrivez sur la page index.html, s’il n’y a rien de 
// stocker dans le storage sous la clé « personnage », 
// permettre la saisie et l’enregistrement d’un personnage de façon 
// pérenne, sinon afficher l’information dans une popup

personnage = sessionStorage.getItem("personnage");

//test le personnage
if (personnage !== null) {
    //le personnage n'est pas null
    alert("votre personnage préféré est : " + personnage)

} else {
    //le personnage est  null
    let personnage = prompt("Quel est votre personnage préféré?")
    sessionStorage.setItem("personnage", personnage);
}

// Niveau 3
// Dans le cas où vous affichez l’information, permettre à l’utilisateur 
// de modifier son choix, s’il le désire.

personnage = sessionStorage.getItem("personnage");
//test le personnage
if (personnage !== null) {
    //le personnage n'est pas null
    alert("votre personnage préféré est : " + personnage);
    
    let validation = confirm("Est ce bien votre personnage préféré?");

    if (!validation){
        //l'utilisateur souhaite changer le nom du personnage
        let personnage = prompt("Quel est votre personnage préféré?");
        sessionStorage.setItem("personnage", personnage);
    }

} else {
    //le personnage est  null
    let personnage = prompt("Quel est votre personnage préféré?");
    sessionStorage.setItem("personnage", personnage);
}


// Niveau 4
// Créer un fichier JSON représentant les informations de 3 utilisateurs (nom, âge, ville), sous la clé générale « users ».
// Testez la conformité de votre fichier à cette adresse : https://jsonformatter.curiousconcept.com/
// Niveau 5
// Depuis votre fichier javascript récupérer les informations contenues dans le fichier JSON et stocker les dans le localStorage, 
// puis récupérer ces informations depuis le localStorage pour les afficher. Pour cet exercice utiliser la fonction fetch (attention : 
// pour son bon fonctionnement vous devez lancer le code depuis une page html).

fetch('data.json').then(response => response.json())
                    .then(data => showData(data));

function showData(data) {
    console.log(data);
    console.log(data.users[0].nom);
    //création d'une chaine de caractère 
    sessionStorage.setItem("users", JSON.stringify(data.users));

    //récupération de l'élément stocké dans le storage
    let users = sessionStorage.getItem("users");
    console.log(users);
    //création d'un objet avec la chaine de caractère
    console.log(JSON.parse(users));
}