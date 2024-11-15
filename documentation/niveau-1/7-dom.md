# Le DOM (Document Object Model) en JavaScript

Le DOM est une interface de programmation qui représente une page web comme une structure d'arbre où chaque nœud est un objet représentant une partie du document.

## 1. Sélection d'Éléments

### Méthodes de Sélection Modernes

```javascript
// Sélectionner un élément par son ID
const element = document.getElementById("monId");

// Sélectionner le premier élément correspondant
const premier = document.querySelector(".maClasse");

// Sélectionner tous les éléments correspondants
const tous = document.querySelectorAll(".maClasse");

// Sélectionner par classe
const parClasse = document.getElementsByClassName("maClasse");

// Sélectionner par balise
const parBalise = document.getElementsByTagName("div");
```

### Navigation dans le DOM

```javascript
const parent = element.parentElement;
const enfants = element.children;
const premier = element.firstElementChild;
const dernier = element.lastElementChild;
const suivant = element.nextElementSibling;
const precedent = element.previousElementSibling;
```

## 2. Manipulation d'Éléments

### Création d'Éléments

```javascript
// Créer un nouvel élément
const div = document.createElement("div");
const texte = document.createTextNode("Hello World");

// Ajouter du contenu
div.textContent = "Hello World";
// ou
div.innerHTML = "<span>Hello World</span>";
```

### Ajout et Suppression d'Éléments

```javascript
// Ajouter à la fin d'un élément parent
parent.appendChild(div);

// Insérer avant un élément spécifique
parent.insertBefore(div, referenceElement);

// Supprimer un élément
element.remove();
// ou
parent.removeChild(element);
```

### Manipulation des Classes

```javascript
// Ajouter une classe
element.classList.add("maClasse");

// Supprimer une classe
element.classList.remove("maClasse");

// Basculer une classe (ajouter si absente, supprimer si présente)
element.classList.toggle("maClasse");

// Vérifier si une classe existe
const hasClass = element.classList.contains("maClasse");
```

### Manipulation des Attributs

```javascript
// Définir un attribut
element.setAttribute("id", "monId");

// Obtenir la valeur d'un attribut
const valeur = element.getAttribute("id");

// Vérifier si un attribut existe
const exists = element.hasAttribute("id");

// Supprimer un attribut
element.removeAttribute("id");
```

## 3. Styles et CSS

### Manipulation des Styles

```javascript
// Style direct
element.style.backgroundColor = "red";
element.style.fontSize = "16px";
element.style.marginTop = "20px";

// Obtenir les styles calculés
const styles = window.getComputedStyle(element);
console.log(styles.backgroundColor);
```

### Dimensions et Position

```javascript
// Dimensions de l'élément (incluant padding et border)
const largeur = element.offsetWidth;
const hauteur = element.offsetHeight;

// Position relative au parent positionné
const top = element.offsetTop;
const left = element.offsetLeft;

// Dimensions internes (sans border)
const clientWidth = element.clientWidth;
const clientHeight = element.clientHeight;

// Position et dimensions complètes
const rect = element.getBoundingClientRect();
```

## 4. Événements du DOM

### Gestion des Événements

```javascript
// Ajouter un écouteur d'événement
element.addEventListener("click", function (event) {
  console.log("Élément cliqué !");
});

// Supprimer un écouteur d'événement
function handleClick(event) {
  console.log("Clic !");
}
element.addEventListener("click", handleClick);
element.removeEventListener("click", handleClick);
```

### Propagation des Événements

```javascript
// Phase de capture
element.addEventListener(
  "click",
  function (event) {
    console.log("Capture !");
  },
  true
);

// Phase de bouillonnement (par défaut)
element.addEventListener("click", function (event) {
  // Arrêter la propagation
  event.stopPropagation();

  // Empêcher le comportement par défaut
  event.preventDefault();
});
```

## 5. Formulaires

### Manipulation des Formulaires

```javascript
// Accéder aux éléments d'un formulaire
const form = document.querySelector("form");
const input = form.elements["nomChamp"];

// Écouter la soumission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Récupérer les valeurs
  const valeur = input.value;

  // Validation
  if (valeur.trim() === "") {
    input.classList.add("erreur");
    return;
  }

  // Envoyer le formulaire
  form.submit();
});
```

## 6. Bonnes Pratiques

### Performance

```javascript
// Éviter les multiples manipulations du DOM
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.textContent = `Item ${i}`;
  fragment.appendChild(div);
}
container.appendChild(fragment);
```

### Délégation d'Événements

```javascript
// Au lieu d'attacher un événement à chaque bouton
document
  .querySelector(".container")
  .addEventListener("click", function (event) {
    if (event.target.matches(".bouton")) {
      console.log("Bouton cliqué !");
    }
  });
```

## Résumé des Méthodes Principales

| Méthode               | Description                                  |
| --------------------- | -------------------------------------------- |
| querySelector()       | Sélectionne le premier élément correspondant |
| querySelectorAll()    | Sélectionne tous les éléments correspondants |
| createElement()       | Crée un nouvel élément                       |
| appendChild()         | Ajoute un élément enfant                     |
| remove()              | Supprime un élément                          |
| classList             | Gère les classes CSS                         |
| setAttribute()        | Définit un attribut                          |
| addEventListener()    | Ajoute un écouteur d'événement               |
| removeEventListener() | Supprime un écouteur d'événement             |

## Conclusion

Le DOM est un outil puissant pour manipuler dynamiquement le contenu, la structure et le style d'une page web. Une bonne compréhension du DOM est essentielle pour créer des applications web interactives et réactives. Il est important de suivre les bonnes pratiques pour maintenir des performances optimales et un code propre.
