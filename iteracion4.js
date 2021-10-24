//Iteración #4: Calcular el promedio

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let valorActual = 0;
  let sumaTotal = 0;

  for (y = 0; y < numbers.length; y++) {
    sumaTotal += numbers[y];
  }

  return sumaTotal / numbers.length;
}

//console.log(average(numbers));
