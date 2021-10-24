//Iteración#5: Calcular promedio de strings

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    let suma = 0

    for (y=0; y<mixedElements.length; y++){

      let Type = typeof mixedElements[y];
      
      if (Type == "string"){
        suma += mixedElements[y].length;
      }else{
        suma += mixedElements[y];
      }
    }
    
    return suma / mixedElements.length;
    

}


//console.log (averageWord(mixedElements));