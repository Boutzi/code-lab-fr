async function calculateOperation(a, b, operation) {
  if (operation === "divide") {
    if (b === 0) {
      throw new Error("Division par zéro n'est pas permise !");
    }
    return a / b;
  } else if (operation === "multiply") {
    return a * b;
  } else if (operation === "add") {
    return a + b;
  } else if (operation === "subtract") {
    return a - b;
  } else {
    throw new Error("Opération inconnue !");
  }
}

async function main() {
  // Gérer les erreurs ici : la division par zéro n'est pas possible
  const result = await calculateOperation(10, 0, "divide");
  console.log("Résultat :", result);
}

main();
