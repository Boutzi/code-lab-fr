# Les Opérateurs en JavaScript pour Débutants

Les opérateurs sont des symboles spéciaux qui permettent d'effectuer des opérations sur des valeurs et des variables. Comprendre les opérateurs est essentiel pour la programmation en JavaScript.

## 1. Opérateurs Arithmétiques

Les opérateurs arithmétiques permettent d'effectuer des calculs mathématiques de base.

### Addition (+)

```javascript
let a = 5 + 3; // 8
let texte = "Bonjour " + "monde"; // "Bonjour monde"
```

### Soustraction (-)

```javascript
let b = 10 - 4; // 6
```

### Multiplication (\*)

```javascript
let c = 3 * 4; // 12
```

### Division (/)

```javascript
let d = 15 / 3; // 5
let e = 10 / 3; // 3.3333...
```

### Modulo (%)

Retourne le reste d'une division

```javascript
let f = 10 % 3; // 1 (reste de 10 ÷ 3)
let g = 15 % 4; // 3 (reste de 15 ÷ 4)
```

### Incrément (++) et Décrément (--)

```javascript
let compteur = 1;
compteur++; // compteur = 2
compteur--; // compteur = 1
```

## 2. Opérateurs de Comparaison

Ces opérateurs comparent deux valeurs et renvoient un booléen (`true` ou `false`).

### Égalité (== et ===)

```javascript
// == compare les valeurs (avec conversion de type)
5 == "5"; // true
// === compare les valeurs ET les types
5 === "5"; // false
5 === 5; // true
```

### Inégalité (!= et !==)

```javascript
5 != "5"; // false
5 !== "5"; // true
```

### Supérieur et Inférieur

```javascript
let x = 10;
let y = 5;

x > y; // true (supérieur à)
x < y; // false (inférieur à)
x >= y; // true (supérieur ou égal à)
x <= y; // false (inférieur ou égal à)
```

## 3. Opérateurs Logiques

Les opérateurs logiques sont utilisés pour combiner des conditions.

### ET logique (&&)

Les deux conditions doivent être vraies

```javascript
let age = 25;
let permis = true;

if (age >= 18 && permis === true) {
  console.log("Peut conduire");
}
```

### OU logique (||)

Au moins une condition doit être vraie

```javascript
let estEtudiant = true;
let estRetraite = false;

if (estEtudiant || estRetraite) {
  console.log("Réduction disponible");
}
```

### NON logique (!)

Inverse une valeur booléenne

```javascript
let estConnecte = false;
console.log(!estConnecte); // true
```

## 4. Opérateurs d'Affectation

Ces opérateurs permettent d'assigner des valeurs aux variables.

### Affectation Simple (=)

```javascript
let x = 5; // x vaut 5
```

### Affectation avec Opération

```javascript
let nombre = 10;
nombre += 5; // nombre = nombre + 5
nombre -= 3; // nombre = nombre - 3
nombre *= 2; // nombre = nombre * 2
nombre /= 4; // nombre = nombre / 4
```

## 5. Opérateur Ternaire

C'est une version courte d'une condition if/else.

```javascript
let age = 20;
let message = age >= 18 ? "Majeur" : "Mineur";
// Équivalent à :
// if (age >= 18) {
//     message = "Majeur";
// } else {
//     message = "Mineur";
// }
```

## Résumé des Opérateurs Principaux

| Opérateur | Type         | Description               |
| --------- | ------------ | ------------------------- |
| +         | Arithmétique | Addition                  |
| -         | Arithmétique | Soustraction              |
| \*        | Arithmétique | Multiplication            |
| /         | Arithmétique | Division                  |
| %         | Arithmétique | Modulo (reste)            |
| ==        | Comparaison  | Égalité (avec conversion) |
| ===       | Comparaison  | Égalité stricte           |
| !=        | Comparaison  | Inégalité                 |
| !==       | Comparaison  | Inégalité stricte         |
| >         | Comparaison  | Supérieur à               |
| <         | Comparaison  | Inférieur à               |
| >=        | Comparaison  | Supérieur ou égal à       |
| <=        | Comparaison  | Inférieur ou égal à       |
| &&        | Logique      | ET                        |
| \|\|      | Logique      | OU                        |
| !         | Logique      | NON                       |

## Conseils pour Débutants

1. **Égalité Stricte** : Préférez toujours `===` à `==` pour éviter les conversions de type inattendues.
2. **Priorité des Opérations** : Comme en mathématiques, la multiplication et la division sont effectuées avant l'addition et la soustraction.
3. **Parenthèses** : En cas de doute sur la priorité des opérations, utilisez des parenthèses pour clarifier.
4. **Test** : N'hésitez pas à utiliser la console pour tester les opérateurs et comprendre leur fonctionnement.

## Conclusion

Les opérateurs sont les outils de base pour effectuer des calculs et des comparaisons en JavaScript. Une bonne compréhension de leur fonctionnement est essentielle pour écrire des programmes efficaces et éviter les bugs courants.
