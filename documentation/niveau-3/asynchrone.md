# Programmation Asynchrone en JavaScript

La programmation asynchrone en JavaScript permet d'exécuter certaines tâches de manière non bloquante, ce qui est essentiel pour des applications réactives, comme celles qui manipulent des interfaces utilisateurs ou font des appels API. Le code asynchrone permet de lancer une tâche et de continuer à exécuter d'autres opérations sans attendre la fin de celle-ci.

## Concepts Clés de l'Asynchrone

### Callback Functions (Fonctions de Rappel)

Une fonction de rappel (callback) est une fonction passée en argument à une autre fonction, qui sera exécutée plus tard, après que l'autre fonction ait terminé son exécution. C'est un concept fondamental dans l'asynchrone.

#### Exemple de Callback

```javascript
function afficherMessage(message, callback) {
  console.log(message);
  callback();
}

afficherMessage("Opération terminée", function () {
  console.log("Callback exécuté !");
});
```

Explication : La fonction afficherMessage prend un message et une fonction de rappel (callback) en argument. Elle affiche d'abord le message, puis appelle la fonction de rappel.

### setTimeout() et setInterval()

Ces fonctions JavaScript permettent d'exécuter des opérations après un délai ou de manière répétée.

#### Exemple de setTimeout

```javascript
setTimeout(function () {
  console.log("Exécuté après 2 secondes");
}, 2000);
```

#### Exemple de setInterval

```javascript
setInterval(function () {
  console.log("Exécuté toutes les 3 secondes");
}, 3000);
```

### Promesses (Promises)

Les Promesses représentent des opérations qui peuvent être terminées dans le futur. Elles sont utilisées pour gérer des tâches asynchrones et permettent de chaîner des actions à effectuer après la résolution de la promesse.

#### Exemple de Promesse

```javascript
const maPromesse = new Promise((resolve, reject) => {
  let succes = true; // Simule une condition
  if (succes) {
    resolve("Opération réussie");
  } else {
    reject("Opération échouée");
  }
});

maPromesse
  .then((resultat) => console.log(resultat)) // Si réussie
  .catch((erreur) => console.log(erreur)); // Si échouée
```

Explication : Une promesse est créée avec un exécuteur qui prend deux fonctions : resolve (pour signaler un succès) et reject (pour signaler une erreur). Ensuite, .then() et .catch() sont utilisés pour gérer les résultats ou erreurs.

### Async/Await (Introduit avec ES6)

async et await sont des mots-clés qui simplifient la gestion du code asynchrone. async rend une fonction asynchrone, et await permet d'attendre la résolution d'une promesse avant de passer à la ligne suivante du code, rendant le code plus lisible.

#### Exemple avec Async/Await

```javascript
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Erreur :", error);
  }
}

fetchData();
```

Explication : Ici, fetchData() est une fonction asynchrone qui attend la réponse d'une requête HTTP avant de continuer l'exécution. await bloque l'exécution jusqu'à ce que la promesse soit résolue, simplifiant ainsi la gestion des appels asynchrones.

## Résumé des Concepts

| Concept       | Description                                                                                                       | Exemple                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Callback      | Fonction passée en argument à une autre fonction, exécutée plus tard.                                             | `setTimeout(() => { console.log("Hello !"); }, 1000);`                                          |
| setTimeout()  | Exécute une fonction après un délai spécifié.                                                                     | `setTimeout(() => { console.log("Exécuté après 2 secondes"); }, 2000);`                         |
| setInterval() | Exécute une fonction à intervalles réguliers.                                                                     | `setInterval(() => { console.log("Exécuté toutes les 3 secondes"); }, 3000);`                   |
| Promises      | Représente une tâche asynchrone qui se résout (ou échoue) à un moment donné.                                      | `new Promise((resolve, reject) => { resolve("Succès"); }).then(result => console.log(result));` |
| Async/Await   | Simplifie la syntaxe pour travailler avec des Promesses. Permet d'écrire du code asynchrone de manière synchrone. | `async function fetchData() { let response = await fetch("https://api.example.com"); }`         |

## Conclusion

Ces concepts permettent d'exécuter du code en parallèle, sans bloquer l'exécution d'autres tâches, ce qui est essentiel pour des applications modernes telles que les sites web interactifs ou les serveurs API.
