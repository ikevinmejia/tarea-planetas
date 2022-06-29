let nombrePlanetas = Array('Tierra', 'Marte', 'Jupiter');
let distancia = [5,3, '67'];
const tamaño = [10, 20, 30];

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)

let i = 0;

while ( i <= nombrePlanetas.length -1) {
    console.log(i);
    console.log(nombrePlanetas[i]);
    i = i + 1;
}

for (let i = 0; i < nombrePlanetas.length; i++) {
    console.log(nombrePlanetas[i]);

}

// for (const key in object) {
//     if(Object.hasOwnProperty.call(object, key)){
//         const element = object[key]
//     }
// }

// for in

for(const key in nombrePlanetas) {
    console.warn(nombrePlanetas[key]);
}

// for of

for (const planeta of nombrePlanetas) {
    console.error(planeta);
}

for (const key in distancia) {
    if (distancia[key] === '5') {
        console.warn('Se encontró la distancia');
    } else {
        console.warn('No se encontró la distancia');
    }
}


// for each

nombrePlanetas.forEach((value, index, array) => {
    console.log('planeta', index, value);
})

// map

const resultadoMap = nombrePlanetas.map((planetas, index) => {
    return(`El planeta ${planetas} tiene tamaño de: ${tamaño[index]}`)
})

console.warn(resultadoMap);
