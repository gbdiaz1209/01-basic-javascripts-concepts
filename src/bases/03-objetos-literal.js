// literal objects

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 12345678,
        lat: 13.456789,
        log: 14.546555
    }
    //pueden añadir funciones, metodos, propiedades
};

//con spread operator puedes clonar un objeto sin alterar el otro por referencia.
const persona3 = { ... persona }

//pasando la referencia en memoria, pasas el objeto , si cambias algúna propiedad lo cambiara para los dos objetos;
const persona2 = persona;
persona2.nombre = 'peter';

console.log({
    // persona: persona EM6 redujo está manera de asignar el valor con el miusmo nombre
    persona
});
console.log(persona2);
console.log(persona3);







