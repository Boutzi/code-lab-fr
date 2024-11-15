# Fonctions JS

En JavaScript, une fonction est un bloc de code conçu pour effectuer une tâche spécifique. Une fonction peut être définie, appelée (ou invoquée) et elle peut retourner une valeur.

## Déclaration de Fonction

La syntaxe de base pour déclarer une fonction est :

```javascript
function maFonction() {
  // Instructions
}
```

### Exemple

```javascript
function saluer() {
  console.log("Bonjour !");
}

saluer(); // Appelle la fonction et affiche "Bonjour !"
```

## Fonctions avec Paramètres

Une fonction peut accepter des paramètres, qui sont des valeurs transmises lorsqu'on appelle la fonction.

Pour retourner une valeur, on utilise le mot-clé **return**.

### Exemple 1

```javascript
function addition(a, b) {
  return a + b;
}

const resultat = addition(5, 3); // Retourne 8
```

## Expressions de Fonction

Une fonction peut aussi être définie en tant qu'expression et assignée à une variable.

```javascript
const addition = function (a, b) {
  return a + b;
};

const resultat = addition(10, 4); // Retourne 14
```

## Fonctions Fléchées (Arrow Functions)

Introduites avec ES6, les fonctions fléchées offrent une syntaxe plus concise.

```javascript
const addition = (a, b) => a + b;

const resultat = addition(8, 2); // Retourne 10
```

## Fonctions Anonymes

Les fonctions peuvent être anonymes, c'est-à-dire sans nom. Elles sont souvent utilisées comme fonctions de rappel (callbacks).

```javascript
setTimeout(function () {
  console.log("Cette fonction est exécutée après 2 secondes");
}, 2000);
```
