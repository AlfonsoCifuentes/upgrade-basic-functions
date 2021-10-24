//Iteración #2: Buscar la palabra más larga

const avengers = ["Hulk","Thor","IronMan","Captain A.","Spiderman","Captain M.",];

function findLongestWord(param) {
  var longWordCount = 0;
  var wordLength = 0;

  for (y = 0; y < avengers.length; y++) {
    var wordLength = avengers[y].length;
    var longWordCount = Math.max(wordLength);
  }

  var longWordArray = [];

  for (y = 0; y < avengers.length; y++) {
    if (avengers[y].length == longWordCount) {
      longWordArray.push(avengers[y]);
    }
  }
  return longWordArray[0];
}

//console.log(findLongestWord(avengers));





//Solución interesante que ví por internet, y que me gustaría preguntar al mentor para que me la explique en detalle:

/* let maximo = avengers[0].length;
  avengers.map((i) => (maximo = Math.max(maximo, i.length)));
  let resultado = avengers.filter((i) => i.length == maximo); 

  return resultado[0];   */
