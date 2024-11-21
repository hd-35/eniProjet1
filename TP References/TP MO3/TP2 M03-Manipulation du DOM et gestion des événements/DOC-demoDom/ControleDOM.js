/* Voici une liste des principales commandes en JavaScript qui permettent de contrôler le DOM (Document Object Model) // */

//1. **Accéder aux éléments du DOM**
document.getElementById(id) // Retourne l'élément avec l'ID spécifié.
document.getElementsByClassName(className) // Retourne une collection d'éléments avec la classe spécifiée.
document.getElementsByTagName(tagName) // Retourne une collection d'éléments avec le nom de balise spécifié.
document.querySelector(selector) // Retourne le premier élément correspondant au sélecteur CSS.
document.querySelectorAll(selector) // Retourne tous les éléments correspondant au sélecteur CSS.

//2. **Manipuler les éléments du DOM**
element.innerHTML // Permet de lire ou de modifier le contenu HTML à l’intérieur d’un élément.
element.textContent // Permet de lire ou de modifier le texte (sans balises HTML) à l’intérieur d’un élément.
element.setAttribute(attribute, value) // Modifie l’attribut spécifié d’un élément.
element.getAttribute(attribute) // Récupère la valeur de l’attribut spécifié d’un élément.
element.classList.add(className) // Ajoute une classe à un élément.
element.classList.remove(className) // Retire une classe d’un élément.
element.classList.toggle(className) // Ajoute ou retire une classe selon si elle est présente.
element.style.property = value // Modifie une propriété CSS en ligne de l’élément.

//3. **Créer et insérer des éléments**
document.createElement(tagName) // Crée un nouvel élément HTML avec la balise spécifiée.
parentElement.appendChild(childElement) // Ajoute un élément enfant à un élément parent.
parentElement.insertBefore(newElement, referenceElement) // Insère un nouvel élément avant un élément de référence.
parentElement.replaceChild(newElement, oldElement) // Remplace un enfant existant par un autre.

//4. **Supprimer des éléments**
parentElement.removeChild(childElement) // Supprime un élément enfant d’un parent.
element.remove() // Supprime un élément du DOM.

//5. **Écouter les événements**
element.addEventListener(event, callback) // Attache un gestionnaire d’événement à un élément (ex // `click`, `mouseover`, `keydown`, etc.).
element.removeEventListener(event, callback) // Supprime un gestionnaire d’événement d’un élément.

//6. **Parcourir le DOM**
element.children // Retourne une collection des enfants directs de l’élément.
element.firstChild // Retourne le premier enfant de l’élément (peut être un texte ou un autre type de nœud).
element.lastChild // Retourne le dernier enfant de l’élément.
element.parentNode // Retourne le parent de l’élément.
element.nextSibling // Retourne le frère suivant de l’élément.
element.previousSibling // Retourne le frère précédent de l’élément.

//7. **Modifier le style**
element.style.property = value // Modifie une propriété CSS en ligne pour l’élément.
window.getComputedStyle(element) // Récupère les styles calculés d’un élément (les styles finaux après calcul par le navigateur).

//8. **Autres méthodes utiles**
document.createTextNode(text) // Crée un nœud de texte.
element.focus() // Fait prendre le focus à un élément (utile pour les formulaires, champs de texte, etc.).
element.blur() // Retire le focus d’un élément.

//9. **Manipulation de la classe CSS**
element.classList.contains(className) // Vérifie si un élément possède une classe spécifique.
element.classList.toggle(className, force) // Si `force` est spécifié, la classe est ajoutée si `force` est vrai et retirée si `force` est faux.

/* Ces commandes forment la base de l’interaction avec le DOM en JavaScript.
Elles permettent de manipuler les éléments d'une page, de gérer les événements, et de contrôler
l'apparence des éléments via le DOM. */