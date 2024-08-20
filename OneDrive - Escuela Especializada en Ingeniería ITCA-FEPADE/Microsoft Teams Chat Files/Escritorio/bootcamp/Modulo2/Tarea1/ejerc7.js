const readline = require('readline');

// Crear una interfaz para leer entradas de la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variables para almacenar los conteos y el acumulador
let cantidadNegativos = 0;
let cantidadPositivos = 0;
let cantidadMultiplos15 = 0;
let valorAcumuladoPares = 0;
let contador = 0;

// Función para leer el siguiente valor
function leerValor() {
    if (contador < 10) {
        rl.question('Ingrese un valor entero: ', (input) => {
            const valor = parseInt(input);

            if (isNaN(valor)) {
                console.log('Por favor, ingrese un valor numérico válido.');
                leerValor(); // Repetir la lectura si el valor no es numérico
                return;
            }

            // Contar valores negativos
            if (valor < 0) {
                cantidadNegativos++;
            }
            
            // Contar valores positivos
            if (valor > 0) {
                cantidadPositivos++;
            }

            // Contar múltiplos de 15
            if (valor % 15 === 0) {
                cantidadMultiplos15++;
            }

            // Acumulador de valores pares
            if (valor % 2 === 0) {
                valorAcumuladoPares += valor;
            }

            contador++;
            leerValor(); // Leer el siguiente valor
        });
    } else {
        // Cerrar la interfaz y mostrar los resultados
        rl.close();
        console.log('Cantidad de valores negativos:', cantidadNegativos);
        console.log('Cantidad de valores positivos:', cantidadPositivos);
        console.log('Cantidad de múltiplos de 15:', cantidadMultiplos15);
        console.log('Valor acumulado de números pares:', valorAcumuladoPares);
    }
}

// Iniciar la lectura de valores
leerValor();
