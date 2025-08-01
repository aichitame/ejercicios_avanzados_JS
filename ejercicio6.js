//Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array. Retorna el array resultante.

//Este ejercicio no me queda nada claro

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

function swap(array, index1, index2){
    if (index1 < 0 || index1 >= array.length || index2 < 0|| index2 >= array.length){
        console.log("Los índices están fuera de los límites del array")
        return array;
    }

    const newArray = [...array];

    let variableTemporal = newArray[index1];
    newArray[index1] = newArray[index2];
    newArray[index2] = variableTemporal;

    return newArray;

}

console.log(swap(fantasticFour, 1, 2));

const acentosEspanol = [
    "Dominicano",
    "Venezolano",
    "Andaluz",
    "Gallego",
    "Boricua",
    "Salvadoreño",
    "Boliviano",
    "Argentino",
    "Uruguayo",
    "Canario"
];

console.log(swap(acentosEspanol, 2, 7));

//no entiendo en qué momento se ha hecho swap ni con qué, si sale todo impreso 
//como yo lo he mandado 