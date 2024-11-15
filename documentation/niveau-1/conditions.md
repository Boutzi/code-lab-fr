# Conditions en JavaScript et React

## if (Si)

Exécution d'un bloc de code si une condition est vraie.

```javascript
if (condition) {
  // code exécuté si la condition est vraie
}
```

Exemple :

```javascript
if (age >= 18) {
  console.log("Vous êtes majeur");
}
```

## if...else (Sinon si)

Exécution d'un bloc de code si la condition est vraie, sinon exécution d'un autre bloc.

```javascript
if (condition) {
  // code si vrai
} else {
  // code si faux
}
```

Exemple :

```javascript
if (age >= 18) {
  console.log("Vous êtes majeur");
} else {
  console.log("Vous êtes mineur");
}
```

## else if (Sinon, si)

Vérifie une autre condition si la précédente est fausse.

```javascript
if (condition1) {
  // code si condition1 est vraie
} else if (condition2) {
  // code si condition2 est vraie
} else {
  // code si toutes les conditions sont fausses
}
```

Exemple :

```javascript
if (age >= 18) {
  console.log("Vous êtes majeur");
} else if (age >= 13) {
  console.log("Vous êtes un adolescent");
} else {
  console.log("Vous êtes un enfant");
}
```

## switch (Alternatives multiples)

Vérifie plusieurs valeurs possibles d'une variable.

```javascript
switch (expression) {
  case valeur1:
    // code si expression === valeur1
    break;
  case valeur2:
    // code si expression === valeur2
    break;
  default:
  // code si aucune des conditions n'est vraie
}
```

Exemple :

```javascript
switch (jour) {
  case "lundi":
    console.log("Début de la semaine");
    break;
  case "vendredi":
    console.log("Fin de la semaine");
    break;
  default:
    console.log("Jour ordinaire");
}
```

## Condition ternaire (opérateur ? :)

Exprime une condition simple en une ligne.

```javascript
condition ? valeur_si_vrai : valeur_si_faux;
```

Exemple :

```javascript
const message = age >= 18 ? "Majeur" : "Mineur";
```

## Opérateur logique && (ET)

Exécute un bloc de code si la condition est vraie (court-circuit).

```javascript
condition && code;
```

Exemple :

```javascript
isLoggedIn && console.log("Utilisateur connecté");
```

## Opérateur logique || (OU)

Exécute un bloc de code si l'une des conditions est vraie.

```javascript
condition1 || (condition2 && code);
```

Exemple :

```javascript
isAdmin || (isSuperUser && console.log("Accès autorisé"));
```

Conditions en React
En React, on utilise souvent les conditions pour afficher des éléments dynamiquement.

## Condition dans le JSX

Utilisation de l'opérateur && pour afficher un élément seulement si une condition est vraie.

```jsx
{
  isLoggedIn && <p>Bienvenue, utilisateur !</p>;
}
```

## Condition ternaire dans JSX

Utilisation de la condition ternaire pour afficher deux éléments différents.

```jsx
<p>{isLoggedIn ? "Bienvenue, utilisateur !" : "Veuillez vous connecter."}</p>
```

## Switch dans JSX

Utilisation d’un switch pour afficher différents composants ou éléments.

```jsx
switch (status) {
  case "loading":
    return <p>Chargement...</p>;
  case "success":
    return <p>Succès!</p>;
  default:
    return <p>Erreur</p>;
}
```
