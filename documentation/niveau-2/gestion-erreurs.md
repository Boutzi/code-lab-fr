# Gestion des Erreurs en JavaScript

La gestion des erreurs est essentielle pour rendre une application JavaScript robuste et éviter les plantages inattendus. En JavaScript, les erreurs sont gérées à l'aide de **try**, **catch**, **throw** et **finally**.

## try...catch

Le bloc `try...catch` permet d'exécuter du code qui pourrait potentiellement générer une erreur, et de capturer cette erreur dans un bloc `catch` pour la gérer.

### Syntaxe :

```javascript
try {
  // Code qui peut générer une erreur
} catch (error) {
  // Code pour gérer l'erreur
}
```

#### Exemple :

```javascript
try {
  let result = 10 / 0; // Division par zéro
  console.log(result);
} catch (error) {
  console.log("Une erreur s'est produite : ", error);
}
```

Dans cet exemple, le code dans le bloc `try` tente de diviser par zéro, ce qui ne génère pas une erreur dans JavaScript, mais peut être capturé et géré dans le bloc `catch`.

## throw

La déclaration `throw` permet de lancer une erreur personnalisée. Cela peut être utile lorsque vous souhaitez générer une erreur dans un bloc `try` ou ailleurs dans votre code.

#### Syntaxe :

```javascript
throw new Error("Message d'erreur");
```

#### Exemple :

```javascript
function verifierAge(age) {
  if (age < 18) {
    throw new Error("L'âge doit être supérieur ou égal à 18.");
  }
  return "Accès autorisé";
}

try {
  console.log(verifierAge(16)); // Cette ligne lancera une erreur
} catch (error) {
  console.log("Erreur : ", error.message);
}
```

Dans cet exemple, si l'âge est inférieur à 18, une erreur est générée avec `throw`

## finally

Le bloc `finally` est exécuté après le try et le catch, que l'erreur ait été lancée ou non. Il est souvent utilisé pour libérer des ressources, comme la fermeture de fichiers ou de connexions réseau.

#### Syntaxe :

```javascript
try {
  // Code qui peut générer une erreur
} catch (error) {
  // Code pour gérer l'erreur
} finally {
  // Code exécuté toujours, après le try et le catch
}
```

```javascript
try {
  let data = JSON.parse('{"nom": "Alice"}');
  console.log(data.nom);
} catch (error) {
  console.log("Erreur de parsing JSON : ", error);
} finally {
  console.log("Exécution terminée.");
}
```

Dans cet exemple, peu importe si l'erreur se produit ou non, le bloc `finally` s'exécutera à la fin.

## Types d'Erreurs

JavaScript génère différents types d'erreurs qui peuvent être capturés. Les types les plus courants sont :

- SyntaxError : Erreur de syntaxe, souvent générée lors de l'évaluation de code malformé.
- ReferenceError : Erreur générée lorsqu'une référence à une variable ou une fonction inexistante est effectuée.
- TypeError : Erreur générée lorsque le type d'une variable n'est pas celui attendu.
- RangeError : Erreur générée lorsqu'une valeur dépasse la plage autorisée pour un type donné (par exemple, un nombre trop grand).

#### Exemple avec TypeError :

```javascript
try {
  let a = null;
  a.toString(); // Erreur : toString n'est pas une méthode d'un objet null
} catch (error) {
  console.log(error instanceof TypeError); // true
  console.log("Erreur : ", error.message);
}
```

## `Error` Object

Les erreurs générées dans JavaScript sont des objets Error. Ces objets possèdent des propriétés utiles, telles que :

- message : Un message décrivant l'erreur.
- name : Le nom de l'erreur (par exemple, TypeError, SyntaxError, etc.).
- stack : La pile d'exécution, qui donne des informations sur la trace d'exécution au moment où l'erreur s'est produite.

#### Exemple d'usage de stack :

```javascript
try {
  let undefinedVar;
  console.log(undefinedVar.toString()); // Lancement d'une erreur
} catch (error) {
  console.log(error.stack);
}
```

## Résumé des Concepts

| **Concept**         | **Description**                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| **`try...catch`**   | Permet d'exécuter du code qui peut générer une erreur et de capturer cette erreur.                     |
| **`throw`**         | Lance une erreur personnalisée dans le code.                                                           |
| **`finally`**       | Bloc exécuté toujours après le `try` et le `catch`.                                                    |
| **Types d'Erreurs** | `SyntaxError`, `ReferenceError`, `TypeError`, `RangeError` sont les types d'erreurs les plus courants. |
| **`Error` Object**  | L'objet d'erreur contient des propriétés comme `message`, `name` et `stack`.                           |

## Conclusion

La gestion des erreurs en JavaScript permet de capturer les erreurs qui se produisent dans le code et de les traiter de manière contrôlée, offrant ainsi une meilleure expérience utilisateur et une gestion plus robuste des applications.
