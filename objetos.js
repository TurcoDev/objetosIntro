
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


const persona4 = {
    nombre: "Ludmila",
    edad: 18,
    esFumador: false
}

const persona5 = {
    nombre: "Roberto",
    edad: 45,
    esFumador: true
}

personas.push(persona4);
personas.push(persona5);
console.log(personas);


// Realiza una funcion que devuelva las personas mayores a 30 años

// Opcion 1 con funcion normal
function mayoresDe30_1(edadesIn) {
    return edadesIn.filter(revisarMax30);

    function revisarMax30(edad) {
        return edad > 30;
    }
}

// Opcion 2 con funcion anonima
function mayoresDe30_2(edadesIn) {
    return edadesIn.filter(
        function (edad) {
            return edad > 30;
        }
    );
}

// Opcion 3 con funcion flecha
function mayoresDe30_3(edadesIn) {
    return edadesIn.filter(edad => edad > 30);
}

const edades = [20, 35, 80, 44, 15];
// console.log(mayoresDe30_1(edades));
// console.log(mayoresDe30_2(edades));
// console.log(mayoresDe30_3(edades));

// mayores de 30 utilizando objetos
function mayoresDe30_Obj(personasIn) {
    return personasIn.filter(persona => persona.edad > 30);
}

console.log(mayoresDe30_Obj(personas));


// personas[2].edad = 66;
// console.log(personas);

// Cambiar edad
function cambiarEdad(personasIn, nombre) {
    personasIn.forEach(persona => {
        if (persona.nombre === nombre) {
            persona.edad = 66;
        }
    })
}

cambiarEdad(personas, 'Ludmila')
console.log(personas);
