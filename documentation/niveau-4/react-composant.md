# React

## Composant simple

Un composant React est une fonction ou une classe qui retourne du JSX (une syntaxe proche du HTML) pour rendre des éléments dans le DOM.

Exemple d'un composant simple:

```jsx
function MonComposant() {
  return <h1>Bonjour, React!</h1>;
}

export default MonComposant;
```

## Composant simple avec expression de fonction (Composant Fonctionnel)

Les composants peuvent également être définis comme des expressions de fonction, souvent appelées "composants fonctionnels". Ils sont souvent utilisés pour leur simplicité et leur concision.

Exemple d'un composant avec une expression de fonction:

```jsx
const MonComposant = () => {
  return <h1>Bonjour, React!</h1>;
};

export default MonComposant;
```

## Composant avec props

Les **props** (propriétés) permettent de passer des données aux composants. Elles sont utilisées pour rendre les composants dynamiques.

Exemple d'un composant qui utilise des props:

```jsx
function Saluer(props) {
  return <h1>Bonjour, {props.nom}!</h1>;
}

export default Saluer;
```

Utilisation du composant avec props:

```jsx
<Saluer nom="Johnny" />
// retourne "Bonjour, Johnny!"
```

### Avec PropTypes

Dans cet exemple, le composant Salut reçoit une propriété nom via props, et nous utilisons PropTypes pour valider que cette propriété est une chaîne de caractères (string).

```jsx
import PropTypes from "prop-types";

function Salut(props) {
  return <h1>Bonjour, {props.nom}!</h1>;
}

Salut.propTypes = {
  nom: PropTypes.string.isRequired,
};

export default Salut;
```

## Composant avec logique simple

Les composants React peuvent contenir de la logique JavaScript pour rendre les éléments de manière dynamique. Voici un exemple de composant avec une logique conditionnelle.

Exemple d'un composant avec logique simple:

```jsx
function MonComposant() {
  const message = "Coucou !";

  const handleClick = () => {
    console.log(message);
  };

  return (
    <div>
      <button onClick={handleClick}>Afficher le message dans la console</button>
    </div>
  );
}

export default MonComposant;
```
