//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro. Haz varios ejemplos y compruébalos.

const mainCharacters = [
"Luke",
"Leia",
"Han Solo",
"Chewbacca",
"Rey",
"Anakin",
"Obi-Wan",
];

const paisesPorVisitar = [
    "Argentina",
    "Togo",
    "Namibia",
    "Vietnam",
    "Nueva Zelanda",
    "Honduras"
];

function findArrayIndex(array, text) {
    return array.indexOf(text);
}

function removeItem(array, text){
    const index = findArrayIndex(array, text);
    if(index !== 1){
    array.splice(index, 1)
    }else{
        console.log(`El elemento "${text}" no se encuentra en el array.`);
    }
    return array;
}

console.log(removeItem(mainCharacters, "Han Solo"));
console.log(findArrayIndex(mainCharacters, "Anakin"));
console.log(findArrayIndex(paisesPorVisitar, "Honduras"));
console.log(removeItem(paisesPorVisitar, "Nueva Zelanda"));
console.log(findArrayIndex(paisesPorVisitar, "Argelia"));