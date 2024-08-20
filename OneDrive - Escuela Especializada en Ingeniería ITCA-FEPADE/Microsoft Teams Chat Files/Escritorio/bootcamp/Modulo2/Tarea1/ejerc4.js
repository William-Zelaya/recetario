const readline = require('readline');

// Configuración para leer la entrada del usuario desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para leer la entrada del usuario y devolverla como una promesa
const leerEntrada = (pregunta) => new Promise(resolve => rl.question(pregunta, resolve));

// Función para encontrar el mayor de dos números
const encontrarMayor = (num1, num2) => num1 > num2 ? num1 : num2;

// Función principal para solicitar los números y mostrar el mayor
const calcularMayor = async () => {
    try {
        // Leer y convertir los números del usuario
        const numero1 = parseInt(await leerEntrada("Ingrese el primer número entero: "), 10);
        const numero2 = parseInt(await leerEntrada("Ingrese el segundo número entero: "), 10);

        // Validar que los números ingresados sean enteros
        if (isNaN(numero1) || isNaN(numero2)) {
            console.log("Ambos valores deben ser números enteros.");
            return;
        }

        // Encontrar el mayor de los dos números y mostrar el resultado
        console.log(`El mayor de los dos números es: ${encontrarMayor(numero1, numero2)}`);
    } catch (error) {
        // Manejo de errores
        console.error("Error al leer la entrada:", error);
    } finally {
        // Cerrar la interfaz de lectura
        rl.close();
    }
};

// Ejecutar la función principal
calcularMayor();
