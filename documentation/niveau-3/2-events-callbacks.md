# Les Événements et Callbacks en JavaScript

Les événements et les callbacks sont des concepts fondamentaux en JavaScript qui permettent de créer des applications interactives et réactives.

## 1. Les Événements

Les événements sont des actions qui se produisent dans votre page web, comme un clic de souris, une frappe au clavier, ou le chargement d'une page.

### Types d'Événements Courants

```javascript
// Événements de souris
element.onclick; // Clic
element.ondblclick; // Double-clic
element.onmouseover; // Survol
element.onmouseout; // Fin de survol

// Événements de clavier
element.onkeydown; // Touche enfoncée
element.onkeyup; // Touche relâchée
element.onkeypress; // Touche pressée (caractère)

// Événements de formulaire
element.onsubmit; // Soumission
element.onchange; // Changement de valeur
element.onfocus; // Focus sur l'élément
element.onblur; // Perte du focus

// Événements de document
window.onload; // Chargement de la page
window.onresize; // Redimensionnement
```

### Ajout d'Écouteurs d'Événements

```javascript
// Méthode moderne (recommandée)
const bouton = document.querySelector("#monBouton");
bouton.addEventListener("click", function () {
  console.log("Bouton cliqué !");
});

// Plusieurs écouteurs sur le même événement
bouton.addEventListener("click", function () {
  console.log("Premier gestionnaire");
});
bouton.addEventListener("click", function () {
  console.log("Deuxième gestionnaire");
});
```

### L'Objet Event

```javascript
bouton.addEventListener("click", function (event) {
  // Informations sur l'événement
  console.log(event.type); // Type d'événement
  console.log(event.target); // Élément ciblé

  // Empêcher le comportement par défaut
  event.preventDefault();

  // Arrêter la propagation
  event.stopPropagation();
});
```

## 2. Les Callbacks

Un callback est une fonction passée en argument à une autre fonction, qui sera exécutée plus tard.

### Exemple Simple de Callback

```javascript
function saluer(nom, callback) {
  console.log(`Bonjour ${nom} !`);
  callback();
}

saluer("Alice", function () {
  console.log("Callback exécuté après la salutation");
});
```

### Callbacks dans des Opérations Asynchrones

```javascript
// Exemple avec setTimeout
console.log("Début");
setTimeout(function () {
  console.log("3 secondes se sont écoulées");
}, 3000);
console.log("Fin");

// Exemple avec un événement
document.getElementById("monBouton").addEventListener("click", function () {
  console.log("Bouton cliqué");
});
```

### Gestion d'Erreurs avec les Callbacks

```javascript
function chargerDonnees(callback) {
  try {
    // Simulation d'une opération
    const donnees = { id: 1, nom: "Test" };
    callback(null, donnees);
  } catch (erreur) {
    callback(erreur, null);
  }
}

chargerDonnees(function (erreur, donnees) {
  if (erreur) {
    console.error("Erreur:", erreur);
    return;
  }
  console.log("Données:", donnees);
});
```

## 3. Callback Hell et Solutions

### Problème du Callback Hell

```javascript
// Exemple de callback hell
asyncOperation1(function (result1) {
  asyncOperation2(result1, function (result2) {
    asyncOperation3(result2, function (result3) {
      asyncOperation4(result3, function (result4) {
        console.log("Résultat final:", result4);
      });
    });
  });
});
```

### Solutions Modernes

```javascript
// Utilisation des Promesses
maPromesse
  .then((result1) => operation2(result1))
  .then((result2) => operation3(result2))
  .then((result3) => operation4(result3))
  .catch((error) => console.error(error));

// Utilisation de async/await
async function executerOperations() {
  try {
    const result1 = await operation1();
    const result2 = await operation2(result1);
    const result3 = await operation3(result2);
    return await operation4(result3);
  } catch (error) {
    console.error(error);
  }
}
```

## 4. Bonnes Pratiques

### 1. Nommage Explicite des Callbacks

```javascript
// Bon exemple
button.addEventListener("click", handleClick);

function handleClick(event) {
  console.log("Bouton cliqué");
}
```

### 2. Gestion des Erreurs

```javascript
function processData(callback) {
  if (!callback || typeof callback !== "function") {
    throw new Error("Callback invalide");
  }
  // Suite du traitement...
}
```

### 3. Éviter les Callbacks Imbriqués

```javascript
// À éviter
function operation1(callback) {
  operation2(function (result2) {
    operation3(function (result3) {
      callback(result3);
    });
  });
}

// Préférer
function operation1(callback) {
  operation2(handleOperation2);

  function handleOperation2(result2) {
    operation3(handleOperation3);
  }

  function handleOperation3(result3) {
    callback(result3);
  }
}
```

## Résumé

| Concept                 | Description                                       |
| ----------------------- | ------------------------------------------------- |
| Événement               | Action qui se produit dans le navigateur          |
| Callback                | Fonction passée en argument et exécutée plus tard |
| addEventListener        | Méthode pour écouter les événements               |
| event.preventDefault()  | Empêche le comportement par défaut                |
| event.stopPropagation() | Arrête la propagation de l'événement              |
| Promesses               | Alternative moderne aux callbacks imbriqués       |
| async/await             | Syntaxe moderne pour gérer l'asynchrone           |

## Conclusion

Les événements et les callbacks sont essentiels pour créer des applications web interactives. Bien que les callbacks soient toujours utilisés, notamment avec les événements, les approches modernes comme les Promesses et async/await offrent des solutions plus élégantes pour gérer le code asynchrone.
