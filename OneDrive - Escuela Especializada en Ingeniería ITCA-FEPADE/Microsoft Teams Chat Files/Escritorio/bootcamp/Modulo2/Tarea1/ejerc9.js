const readline = require('readline');

// Crear una interfaz para leer entradas de la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para convertir Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para clasificar la temperatura en Fahrenheit
function clasificarTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit < 32) {
        return "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        return "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

// Leer la temperatura en Celsius del usuario
rl.question('Ingrese una temperatura en Celsius: ', (input) => {
    const celsius = parseFloat(input);

    // Verificar si el valor ingresado es un número válido
    if (isNaN(celsius)) {
        console.log('Por favor, ingrese un valor numérico válido.');
    } else {
        const fahrenheit = celsiusAFahrenheit(celsius);
        console.log(`Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}`);
        
        const clasificacion = clasificarTemperatura(fahrenheit);
        console.log(clasificacion);
    }

    // Cerrar la interfaz
    rl.close();
});
