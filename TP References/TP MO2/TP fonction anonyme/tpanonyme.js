// Exercice 1 : en utilisant forEach : Multiplier chaque élément d'un tableau par 2 et afficher 
// les résultats. Rédiger l’exercice avec une fonction anonyme puis utiliser une fonction lambda.
let table = [12, 2, 54, 6 ,9];

//avec une fonction
function multiplier(elem) {
    console.log(elem*2)
}

table.forEach(multiplier);

//avec une fonction anonyme
table.forEach(function (elem) { console.log(elem*2);});

//avec une fonction lambda
table.forEach((elem) => console.log(elem*2));

// Exercice 2 : En utilisant filter : Filtrer les nombres pairs d'un tableau.

let tableFilter = table.filter( (elem) => (elem % 2) === 0);

console.log(tableFilter);

// Exercice 3 : En utilisant forEach et filter : Afficher les mots d'un tableau après 
// les avoir filtrés les mots qui possèdent plus de 5 lettres. (Seuls les mots de 5 lettres 
//     et plus sont affichés).

let mots = ["chat", "chien", "oiseau", "maison", "voiture", "arbre", "ordinateur", "soleil", "montagne", "livre"];


mots.filter((elem) => elem.length > 5)
    .forEach( (elem) => console.log(elem));