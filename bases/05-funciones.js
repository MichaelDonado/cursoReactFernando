
//console.log("hello word");

//Funciones en JS

const nombre = "Goku";
const nombre2 = "Vegueta";

const saludar = function ( nombre ){
    return `Hola soy ${nombre}`;

}

const saludar2 = ( nombre ) => {
    return `Kakarotooo, I´m  ${nombre}`;

}

console.log(saludar(nombre));
console.log(saludar2(nombre2));

//Función flecha con return tradicional

// const getUser = () => {
//     return {
//         uid:'ABC123',
//         username:'TuPapiRico123'
//     }
// }


//Funcion flecha más resumida 

const getUser = () => ({
        uid:'ABC123',
        username:'TuPapiRico123'
});


const user = getUser();
console.log(user);

//Tarea 
//Transformar a una funcion de flecha
//Tiene que retornar un objeto implicito
// pruebas


// function getUsuatioActivo( nombre ) {
//     return {
//         uid:'ABC123',
//         username:'TuPapiRico123'
//     }
// };

const getUsuatioActivo = (nombre) => ({
        uid:'ABC123',
        username:'TuPapiRico123'
    });
    
const usuatioActivo = getUsuatioActivo(nombre);
console.log(usuatioActivo); 






