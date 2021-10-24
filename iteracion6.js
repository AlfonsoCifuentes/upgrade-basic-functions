// Iteración #6: Valores Únicos

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(param) {
  const notDuplicates = new Set();

  for (y = 0; y < duplicates.length; y++) {
    notDuplicates.add(duplicates[y]);
    duplicates.shift(duplicates[y]);
  }

  for (y = 0; y < notDuplicates.length; y++) {
    duplicates.push(notDuplicates[y]);
  }

  return duplicates;
}

//console.log (removeDuplicates(duplicates));
