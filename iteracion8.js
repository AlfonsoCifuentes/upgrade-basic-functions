// Iteration #8: Contador de Repeticiones

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function contarRepeticiones(array){
  let palabasYVecesQueSeRepiten = {};
  for (i=0; i < array.length; i++){
    let palabra = array[i];
    if(palabra in palabasYVecesQueSeRepiten){
      palabasYVecesQueSeRepiten[palabra]++;
    }else{
      palabasYVecesQueSeRepiten[palabra] = 1;
    }
  }

  console.log(palabasYVecesQueSeRepiten);
}

contarRepeticiones(counterWords);