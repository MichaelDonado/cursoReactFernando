

const persona = {
    nombre: 'Michael',
    apellido: 'Donado',
    edad: 45,
    direccion: {
        ciudad: 'Barranquilla',
        pais: 'Colombia',
        barrio: 'Pinos',
    }
};

//console.table( persona );

const persona2 = {...persona};
persona2.nombre = 'Goku';
persona2.apellido = 'Sayayin';


console.log( persona );
console.log( persona2 )



