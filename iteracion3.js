//Iteración#3: Calcular la Suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let suma = 0;

  for (y = 0; y<numbers.length ; y++){
    suma += numbers[y];
  }

   return suma; 
}

//console.log(sumAll(numbers));
