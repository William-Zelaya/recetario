const readline = require('readline');

// Crear una interfaz para leer entradas de la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para mostrar la tabla de multiplicar
function mostrarTablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Leer el número del usuario
rl.question('Ingrese un número para mostrar su tabla de multiplicar del 1 al 10: ', (input) => {
    const numero = parseInt(input);

    // Verificar si el valor ingresado es un número válido
    if (isNaN(numero)) {
        console.log('Por favor, ingrese un valor numérico válido.');
    } else {
        mostrarTablaMultiplicar(numero);
    }

    // Cerrar la interfaz
    rl.close();
});
