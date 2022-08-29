
// template String no es más que una simple concatenación 

const nombre = 'Maic';

const ape = 'Donado';

console.log(`Hello my name is ${ nombre } ${ ape }`);

function getSaludo(nombre) {
    return `hola este es un saludo para ${ nombre }`
}


console.log(getSaludo(nombre));
