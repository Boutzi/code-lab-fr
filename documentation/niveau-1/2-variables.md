# Les Variables en JavaScript : var, let, et const

En JavaScript, les variables sont utilisées pour stocker des données qui peuvent être utilisées ou modifiées au sein du programme. Il existe trois façons principales de déclarer une variable : var, let, et const. Chacune a des caractéristiques différentes concernant leur portée (scope), leur réaffectation, et leur comportement.

## var : Déclaration classique (avant ES6)

- Portée : var a une portée fonctionnelle (function scope). Cela signifie que si une variable est déclarée avec var dans une fonction, elle est accessible dans toute cette fonction, mais pas en dehors.
- Redéclaration : Les variables déclarées avec var peuvent être redéclarées dans le même scope sans erreur.
- Hoisting : Les variables var sont "hoistées" en haut de leur scope, mais sont initialisées avec la valeur undefined avant d'être affectées à leur valeur réelle.

#### Exemple :

```javascript
var x = 5;
var x = 10; // Pas d'erreur, x est redéclarée
console.log(x); // Affiche 10
```

## let : Déclaration moderne (ES6+)

- Portée : let a une portée de bloc (block scope), ce qui signifie qu'elle est limitée à l'intérieur des accolades {} (fonction, boucle, condition).
- Redéclaration : Les variables déclarées avec let ne peuvent pas être redéclarées dans le même bloc, mais elles peuvent l'être dans un autre bloc.
- Hoisting : Bien que let soit également hoistée, elle reste dans une "zone morte temporelle" (temporal dead zone) jusqu'à ce qu'elle soit effectivement déclarée, ce qui signifie qu'elle ne peut pas être utilisée avant la ligne de sa déclaration.

#### Exemple :

```javascript
let y = 20;
// let y = 30;  // Erreur, y est déjà déclarée dans ce bloc
console.log(y); // Affiche 20
```

## const : Déclaration de constante (ES6+)

- Portée : Comme let, const a une portée de bloc.
- Redéclaration : Les variables déclarées avec const ne peuvent pas être redéclarées dans le même bloc.
- Immutabilité : Contrairement à let, une fois une variable déclarée avec const, elle ne peut pas être réaffectée. Cependant, si la variable contient un objet ou un tableau, les propriétés ou éléments internes peuvent être modifiés.

#### Exemple :

```javascript
const z = 100;
// z = 200;  // Erreur, z ne peut pas être réaffectée
const obj = { a: 1 };
obj.a = 2; // Pas d'erreur, les propriétés de l'objet peuvent être modifiées
console.log(obj); // Affiche { a: 2 }
```

## Résumé des différences :

| **Caractéristique** | **`var`**                      | **`let`**                       | **`const`**               |
| ------------------- | ------------------------------ | ------------------------------- | ------------------------- |
| **Portée**          | Fonctionnelle (function scope) | Bloc (block scope)              | Bloc (block scope)        |
| **Redéclaration**   | Autorisée                      | Non autorisée dans le même bloc | Non autorisée             |
| **Réaffectation**   | Autorisée                      | Autorisée                       | Non autorisée             |
| **Hoisting**        | Oui, mais avec `undefined`     | Oui, mais avec zone morte       | Oui, mais avec zone morte |

## Quand utiliser quoi ?

- `var` : Utilisé principalement dans les anciens codes JavaScript, mais il est préférable de l'éviter dans les nouveaux projets en raison de sa portée et des comportements imprévus.
- `let` : À utiliser pour des variables qui peuvent changer de valeur. Recommandé pour la plupart des cas.
- `const` : À utiliser pour des valeurs qui ne doivent pas changer après leur affectation, comme les constantes ou les références d'objets qui ne doivent pas être réaffectées.
