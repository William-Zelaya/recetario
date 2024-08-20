const readline = require('readline');

// Configuración para leer la entrada del usuario desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para leer la entrada del usuario y devolverla como una promesa
function leerEntrada(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

// Función para calcular el aumento salarial basado en la categoría
function calcularAumento(salario, categoria) {
    // Definición de los porcentajes de aumento según la categoría
    const aumentos = {
        a: 0.15, // 15% de aumento para categoría 'a'
        b: 0.30, // 30% de aumento para categoría 'b'
        c: 0.10, // 10% de aumento para categoría 'c'
        d: 0.20  // 20% de aumento para categoría 'd'
    };
    
    // Obtener el porcentaje de aumento para la categoría dada, o 0 si la categoría es inválida
    const porcentajeAumento = aumentos[categoria] || 0;
    
    // Calcular el aumento y el salario final
    const aumento = salario * porcentajeAumento;
    const salarioFinal = salario + aumento;
    
    // Retornar el aumento y el salario final como un objeto
    return { aumento, salarioFinal };
}

// Función principal para calcular el aumento salarial
async function calcularAumentoSalarial() {
    try {
        // Leer datos del usuario
        const nombre = await leerEntrada("Ingrese el nombre del trabajador: ");
        const salario = parseFloat(await leerEntrada("Ingrese el salario del trabajador: "));
        const categoria = (await leerEntrada("Ingrese la categoría de aumento (a, b, c, d): ")).toLowerCase();
        
        // Validar que el salario es un número válido
        if (isNaN(salario) || salario <= 0) {
            console.log("El salario debe ser un número positivo.");
            return;
        }

        // Validar que la categoría sea una de las permitidas
        const categoriasValidas = ['a', 'b', 'c', 'd'];
        if (!categoriasValidas.includes(categoria)) {
            console.log("Categoría inválida. Debe ser una de las siguientes: a, b, c, d.");
            return;
        }
        
        // Calcular el aumento y el salario final usando la función `calcularAumento`
        const { aumento, salarioFinal } = calcularAumento(salario, categoria);

        // Mostrar los datos del trabajador y el resultado del cálculo
        console.log("\nDatos del Trabajador:");
        console.log(`Nombre: ${nombre}`);
        console.log(`Salario Inicial: $${salario.toFixed(2)}`);
        console.log(`Categoría: ${categoria}`);
        console.log(`Aumento: $${aumento.toFixed(2)} (${(aumento / salario * 100).toFixed(2)}%)`);
        console.log(`Salario Final: $${salarioFinal.toFixed(2)}`);

    } catch (error) {
        // Manejo de errores si ocurre algún problema al leer la entrada
        console.error("Error al leer la entrada:", error);
    } finally {
        // Cerrar la interfaz de lectura al finalizar
        rl.close();
    }
}

// Ejecutar la función principal para calcular el aumento salarial
calcularAumentoSalarial();
