# Introduction à TypeScript

TypeScript est un sur-ensemble de JavaScript qui ajoute des types statiques et des fonctionnalités supplémentaires. Il est conçu pour rendre le développement JavaScript plus sûr, plus rapide et plus facile à maintenir.

## Pourquoi utiliser TypeScript ?

- **Typage statique** : TypeScript permet de vérifier les types à la compilation, ce qui aide à éviter des erreurs au moment de l'exécution.
- **Support de ES6+** : TypeScript supporte les fonctionnalités récentes de JavaScript (comme les classes, les modules, les fonctions fléchées).
- **Développement plus sûr** : Le système de types statiques aide à attraper des erreurs tôt, ce qui rend le code plus fiable.

## Installation

Pour installer TypeScript, vous devez avoir **Node.js** installé sur votre machine.

1. Installez TypeScript globalement avec npm :

   ```bash
   npm install -g typescript
   ```

2. Pour vérifier l'installation :
   ```bash
   tsc --version
   ```

## Syntaxe de Base

### Déclaration de Variables

En TypeScript, vous pouvez déclarer des variables avec des types explicites.

```typescript
let message: string = "Bonjour, TypeScript!";
let age: number = 25;
let isActive: boolean = true;
```

### Fonctions

Les fonctions en TypeScript peuvent également spécifier les types des arguments et du retour.

```typescript
function addition(a: number, b: number): number {
  return a + b;
}

let result = addition(5, 10);
```

### Interfaces

Les interfaces permettent de définir des structures de données, comme des objets avec des propriétés spécifiques.

```typescript
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Alice",
  age: 30,
};
```

### Classes

TypeScript améliore les classes en permettant de spécifier des types pour les propriétés et les méthodes.

```typescript
class Personne {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Bonjour, je m'appelle ${this.name}`;
  }
}

const personne = new Personne("Alice", 30);
console.log(personne.greet()); // "Bonjour, je m'appelle Alice"
```

### Composants React

Les fichiers React avec TypeScript ont l'extension .tsx (et non .js ou .jsx).

Voici un exemple de composant React en TypeScript :

```typescript
interface BonjourProps {
  nom: string;
  age: number;
}

const Bonjour = ({ nom, age }: BonjourProps) => {
  return (
    <h1>Bonjour, {nom}!</h1>
    <span>Tu as {age} ans.</span>
  );
};

export default Bonjour;
```

## Types Avancés

### Union Types

En TypeScript, vous pouvez spécifier qu'une variable peut avoir plusieurs types possibles.

```typescript
let id: string | number;
id = "123";
id = 456;
```

### Type Assertions

Les assertions de type permettent de dire à TypeScript que vous "savez" qu'une variable a un certain type.

```typescript
let someValue: any = "Coucou!";
let stringLength: number = (<string>someValue).length;
```

### Types Optionnels

Vous pouvez rendre une propriété d'objet optionnelle en ajoutant un **?**.

```typescript
interface Person {
  name: string;
  age?: number; // age est optionnel
}
```

## Compilation TypeScript

TypeScript doit être compilé en JavaScript avant d'être exécuté. Pour compiler un fichier `.ts`, utilisez la commande suivante :

```bash
tsc fichier.ts
```

Cela génère un fichier JavaScript (`fichier.js`) que vous pouvez exécuter avec Node.js ou dans un navigateur.

## Conclusion

TypeScript offre une couche de sécurité et de robustesse au-dessus de JavaScript. En l'utilisant, vous pouvez détecter des erreurs avant même d'exécuter votre code. C'est un excellent outil pour améliorer la maintenabilité et la qualité du code, en particulier dans les projets de grande envergure.
