# Boucles en JavaScript et React

## Boucle for

La boucle for permet de répéter un bloc de code un certain nombre de fois.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
} // Cet exemple affiche les nombres de 0 à 4.
```

## Boucle while

La boucle while exécute un bloc de code tant qu'une condition est vraie.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
} // Cet exemple affiche également les nombres de 0 à 4.
```

## Boucle do...while

La boucle do...while exécute un bloc de code une première fois, puis répète l'exécution tant que la condition est vraie.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5); // Cet exemple affiche aussi les nombres de 0 à 4, mais la différence avec while est que le bloc de code est exécuté au moins une fois, même si la condition est fausse au départ.
```

## Boucle for...in

La boucle for...in permet d'itérer sur les propriétés d'un objet.

```javascript
const person = { name: "Alice", age: 25, city: "Paris" };
for (let key in person) {
  console.log(key, person[key]);
} // Cet exemple affiche les clés et valeurs de l'objet person.
```

## Boucle for...of

La boucle for...of permet d'itérer sur les éléments d'un tableau ou d'une autre structure itérable.

```javascript
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
} // Cet exemple affiche les éléments du tableau fruits.
```

# Boucles en React

En React, les boucles sont souvent utilisées pour afficher des listes d'éléments.

## Boucle avec map() pour afficher une liste

La méthode map() permet de créer un nouveau tableau en appliquant une fonction à chaque élément d'un tableau. Elle est souvent utilisée pour afficher des éléments dans React.

```jsx
const fruits = ["apple", "banana", "cherry"];
function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
} // Dans cet exemple, map() génère un <li> pour chaque élément du tableau fruits, et chaque élément est affiché dans une liste non ordonnée.
```

## Boucle for dans JSX

Il est possible d'utiliser une boucle classique for pour itérer sur un tableau, mais il est recommandé d'utiliser map() en React pour générer du JSX.

```jsx
const numbers = [1, 2, 3, 4, 5];
function NumberList() {
  const listItems = [];
  for (let i = 0; i < numbers.length; i++) {
    listItems.push(<li key={i}>{numbers[i]}</li>);
  }
  return <ul>{listItems}</ul>;
} // Cet exemple utilise une boucle for classique pour créer des éléments de liste et les afficher dans le rendu de React.
```
