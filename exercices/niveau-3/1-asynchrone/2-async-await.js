function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async/await - Créer un fonction asynchrone "displayMessages"
// Afficher un premier message immédiatement : "Premier message!".
// Afficher un second message après 2 secondes : "Second message!".
// Afficher un dernier message après 4 secondes : "Dernier message!".
// Vous pouvez utiliser la fonction "delay" pour appliquer vos délais.
