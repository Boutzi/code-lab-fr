# Manipulation des Chaînes de Caractères en JavaScript

Les chaînes de caractères (strings) en JavaScript sont des séquences de caractères utilisées pour représenter du texte. JavaScript fournit de nombreuses méthodes pour manipuler et travailler avec des chaînes.

## 1. Déclaration d'une Chaîne de Caractères

Une chaîne peut être définie en utilisant des guillemets simples (`'`), des guillemets doubles (`"`) ou des backticks (`` ` ``) pour les chaînes multi-lignes ou les interpolations.

```javascript
let str1 = "Bonjour";
let str2 = "Mon nom est Alice";
let str3 = `Bonjour, ${str2}`;
```

## 2. Accès aux Caractères

Les caractères dans une chaîne sont accessibles par leur index (en commençant par 0).

```javascript
let str = "Bonjour";
console.log(str[0]); // "B"
console.log(str.charAt(1)); // "o"
```

## 3. Propriétés des Chaînes

Les chaînes de caractères ont des propriétés utiles, comme `length` qui retourne le nombre de caractères.

```javascript
let str = "JavaScript";
console.log(str.length); // 10
```

## 4. Méthodes Courantes de Manipulation

### a. toLowerCase() et toUpperCase()

```javascript
let str = "Bonjour";
console.log(str.toLowerCase()); // "bonjour"
console.log(str.toUpperCase()); // "BONJOUR"
```

### b. trim()

```javascript
let str = "   Bonjour   ";
console.log(str.trim()); // "Bonjour"
```

### c. includes()

```javascript
let str = "Bonjour tout le monde";
console.log(str.includes("tout")); // true
```

### d. indexOf()

```javascript
let str = "Bonjour tout le monde";
console.log(str.indexOf("le")); // 14
```

### e. substring() et slice()

```javascript
let str = "Bonjour tout le monde";
console.log(str.substring(0, 7)); // "Bonjour"
console.log(str.slice(0, 7)); // "Bonjour"
```

### f. replace()

```javascript
let str = "Bonjour tout le monde";
console.log(str.replace("tout", "à")); // "Bonjour à le monde"
```

### g. split()

```javascript
let str = "Bonjour tout le monde";
let mots = str.split(" ");
console.log(mots); // ["Bonjour", "tout", "le", "monde"]
```

## 5. Interpolation de Chaînes (Template Literals)

```javascript
let nom = "Alice";
let age = 25;
let message = `Bonjour, je m'appelle ${nom} et j'ai ${age} ans.`;
```

## 6. Méthodes de Recherche

### a. startsWith()

```javascript
let str = "Bonjour tout le monde";
console.log(str.startsWith("Bonjour")); // true
```

### b. endsWith()

```javascript
let str = "Bonjour tout le monde";
console.log(str.endsWith("monde")); // true
```

### c. match()

```javascript
let str = "Je suis un étudiant";
console.log(str.match(/\w+/g)); // ["Je", "suis", "un", "étudiant"]
```

## 7. Concaténation de Chaînes

### a. Avec l'opérateur +

```javascript
let str1 = "Bonjour";
let str2 = " tout le monde";
let message = str1 + str2;
```

### b. Avec concat()

```javascript
let str1 = "Bonjour";
let str2 = " tout le monde";
let message = str1.concat(str2);
```

## Résumé des Concepts

| Méthode               | Description                                |
| --------------------- | ------------------------------------------ |
| toLowerCase()         | Convertit la chaîne en minuscules          |
| toUpperCase()         | Convertit la chaîne en majuscules          |
| trim()                | Supprime les espaces au début et à la fin  |
| includes()            | Vérifie si une sous-chaîne est présente    |
| indexOf()             | Retourne l'index de la première occurrence |
| substring() / slice() | Extrait une portion de la chaîne           |
| replace()             | Remplace une sous-chaîne par une autre     |
| split()               | Divise la chaîne en un tableau             |
| startsWith()          | Vérifie le début de la chaîne              |
| endsWith()            | Vérifie la fin de la chaîne                |
| match()               | Recherche avec une expression régulière    |

## Conclusion

La manipulation des chaînes de caractères en JavaScript offre une grande flexibilité avec de nombreuses méthodes pour analyser, modifier et manipuler le texte. Que ce soit pour rechercher, couper, concaténer ou formater du texte, JavaScript fournit tout un ensemble d'outils pour travailler efficacement avec des chaînes.
