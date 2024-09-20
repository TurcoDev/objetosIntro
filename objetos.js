
const persona1 = {
    nombre: "Luis",
    edad: 22,
    esFumador: true
}

console.log("Nombre de la persona", persona1.nombre);

const persona2 = {
    nombre: "Pedro",
    edad: 88,
    esFumador: false
}

const persona3 = {
    nombre: "Bibiana",
    edad: 35,
    esFumador: true
}

persona3.esFumador = false;

// console.log(persona3);

const personas = [persona1, persona2, persona3];

for (let index = 0; index < personas.length; index++) {
    const persona = personas[index];
    persona.esFumador = false;
}


const mayores = () => {
    const result = [];
    for (let index = 0; index < personas.length; index++) {
        const persona = personas[index];
        if (persona.edad > 30) {
            result.push(persona);
        }
    }
    return result;
}

console.log(mayores());

// 
function devuelveObjeto() {
    let  per = { nombre: "fff", edad: 55}   
    return per
}