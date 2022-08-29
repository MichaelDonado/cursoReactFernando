
//console.log("hello word");

//Desestructuración 
//Asignación Desestructurante


const persona = {
    nombre: 'Michael',
    edad: 45,
    clave: 'Batman'
}

// const { edad, clave, nombre } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ({ nombre, edad,clave, rango = 'Capitan' }) => {

    //   console.log(nombre, edad, rango);

    return { 
        nombreClave: clave, 
        anios: edad
    }

 }


const avenger = useContext( persona );

console.log(avenger);


