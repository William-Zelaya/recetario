const readline = require('readline');

// Configuración para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Normaliza el nombre de la ciudad para facilitar la comparación.
 * @param {string} ciudad - Nombre de la ciudad ingresado por el usuario.
 * @returns {string} Nombre normalizado de la ciudad.
 */
function normalizarCiudad(ciudad) {
    return ciudad.trim().toLowerCase()
                .replace('la ciudad de ', ''); // Eliminar prefijo si es necesario
}

/**
 * Calcula el descuento basado en la ciudad de origen y destino.
 * @param {string} origen - Ciudad de origen.
 * @param {string} destino - Ciudad de destino.
 * @returns {string} Mensaje con el descuento aplicable.
 */
function calcularDescuento(origen, destino) {
    // Normalizar las entradas
    origen = normalizarCiudad(origen);
    destino = normalizarCiudad(destino);

    // Definir los descuentos basados en el destino
    if (origen === 'palma') {
        if (destino === 'la costa del sol') {
            return 'Descuento aplicable: 5%';
        }
    }

    switch (destino) {
        case 'La costa del sol':
            return 'Descuento aplicable: 5%';
        case 'panchimalco':
            return 'Descuento aplicable: 10%';
        case 'puerto el triunfo':
            return 'Descuento aplicable: 15%';
        default:
            return 'No se aplica descuento para esta combinación de origen y destino.';
    }
}

// Función para leer la entrada del usuario y calcular el descuento
function solicitarDatos() {
    rl.question('Ingrese la ciudad de origen: ', (origen) => {
        rl.question('Ingrese la ciudad de destino: ', (destino) => {
            const resultado = calcularDescuento(origen, destino);
            console.log(resultado);
            rl.close();
        });
    });
}

// Ejecutar la función para solicitar datos y calcular el descuento
solicitarDatos();
