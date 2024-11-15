# Objets et Tableaux en JavaScript

En JavaScript, les objets et les tableaux sont deux structures de données fondamentales utilisées pour stocker et manipuler des collections de données. Ces structures sont extrêmement puissantes et sont au cœur de la gestion de données dans la plupart des applications JavaScript.

## Les Objets

Un objet est une collection de propriétés (ou attributs) et de valeurs, où chaque propriété est un nom (clé), et la valeur associée peut être de n'importe quel type, y compris un autre objet.

### Déclaration d'un Objet

```javascript
const personne = {
  nom: "Alice",
  age: 25,
  profession: "Développeuse",
};
```

Dans cet exemple, nom, age et profession sont des clés de l'objet personne, et "Alice", 25, "Développeuse" sont leurs valeurs respectives.

### Accéder aux Propriétés

On peut accéder aux valeurs d'un objet de deux manières :

#### Notation par points :

```javascript
console.log(personne.nom); // Affiche "Alice"
```

#### Notation par crochets (utile pour des clés dynamiques ou contenant des espaces) :

```javascript
console.log(personne["age"]); // Affiche 25
```

### Modifier ou Ajouter des Propriétés

On peut ajouter ou modifier des propriétés d'un objet comme suit :

```javascript
personne.age = 26; // Modification
personne.ville = "Paris"; // Ajout
```

### Supprimer une Propriété

Utilisez `delete` pour supprimer une propriété d'un objet :

```javascript
delete personne.profession;
```

### Exemple avec Objet Complexe

```javascript
const utilisateur = {
  nom: "Bob",
  contacts: {
    email: "bob@example.com",
    téléphone: "0123456789",
  },
  hobbies: ["lecture", "voyage", "musique"],
};
```

## Les Tableaux

Un tableau est une collection ordonnée de valeurs, pouvant être de n'importe quel type. Les éléments d'un tableau sont indexés numériquement, à partir de zéro.

#### Déclaration d'un Tableau

```javascript
const fruits = ["Pomme", "Banane", "Orange"];
```

#### Accéder aux Éléments du Tableau

Les éléments d'un tableau sont accessibles via leur index :

```javascript
console.log(fruits[0]); // Affiche "Pomme"
```

#### Modifier un Élément du Tableau

On peut modifier un élément d'un tableau en accédant à son index :

```javascript
fruits[1] = "Fraise"; // Remplace "Banane" par "Fraise"
```

#### Ajouter des Éléments

Pour ajouter un élément à un tableau, on peut utiliser :

- push() pour ajouter à la fin :

```javascript
fruits.push("Kiwi");
```

- unshift() pour ajouter au début :

```javascript
fruits.unshift("Mangue");
```

#### Supprimer des Éléments

Pour supprimer un élément, on peut utiliser :

- pop() pour retirer le dernier élément :

```javascript
fruits.pop(); // Supprime "Kiwi"
```

- shift() pour retirer le premier élément :

```javascript
fruits.shift(); // Supprime "Mangue"
```

### Exemple avec Tableau d'Objets

Les tableaux peuvent aussi contenir des objets, ce qui est souvent utile dans des scénarios de gestion de collections complexes de données.

```javascript
const utilisateurs = [
  { nom: "Alice", age: 30 },
  { nom: "Bob", age: 25 },
];
console.log(utilisateurs[0].nom); // Affiche "Alice"
```

## Méthodes Utiles pour les Tableaux

JavaScript propose plusieurs méthodes utiles pour manipuler les tableaux :

- forEach() : Exécute une fonction pour chaque élément du tableau.

```javascript
fruits.forEach(function (fruit) {
  console.log(fruit);
});
```

- map() : Crée un nouveau tableau avec les résultats d'une fonction appliquée sur chaque élément.

```javascript
const longueurFruits = fruits.map((fruit) => fruit.length);
console.log(longueurFruits); // [5, 6, 6, 4] (longueurs des fruits)
```

- filter() : Crée un tableau avec les éléments qui satisfont une condition.

```javascript
const fruitsCommencantParP = fruits.filter((fruit) => fruit.startsWith("P"));
console.log(fruitsCommencantParP); // ["Pomme"]
```

- find() : Trouve et retourne le premier élément qui satisfait une condition.

```javascript
const fruitTrouvez = fruits.find((fruit) => fruit === "Banane");
console.log(fruitTrouvez); // "Banane"
```

## Résumé des Concepts

| **Concept**            | **Objet**                                                                    | **Tableau**                                     |
| ---------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------- |
| **Déclaration**        | `const personne = { nom: "Alice", age: 25 };`                                | `const fruits = ["Pomme", "Banane", "Orange"];` |
| **Accès aux valeurs**  | `personne.nom` ou `personne["nom"]`                                          | `fruits[0]`                                     |
| **Ajout/Modification** | `personne.age = 26;` ou `personne.ville = "Paris";`                          | `fruits.push("Kiwi");`                          |
| **Suppression**        | `delete personne.profession;`                                                | `fruits.pop();`                                 |
| **Tableau d'objets**   | `const utilisateurs = [{ nom: "Alice", age: 30 }, { nom: "Bob", age: 25 }];` | `const utilisateurs = ["Alice", "Bob"];`        |

## Conclusion

Les objets sont utilisés pour représenter des entités avec des propriétés spécifiques, tandis que les tableaux sont utilisés pour stocker des collections ordonnées d'éléments. En combinant objets et tableaux, tu peux gérer des structures de données complexes et créer des applications dynamiques et interactives.
