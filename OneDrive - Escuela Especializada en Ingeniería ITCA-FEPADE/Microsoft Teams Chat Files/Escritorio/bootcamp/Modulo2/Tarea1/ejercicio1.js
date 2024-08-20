const readline = require('readline');

// Crear una interfaz de lectura de línea
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para verificar la edad
function verificarEdad(edad) {
    // Usamos el operador ternario para determinar el mensaje
    const mensaje = (edad >= 18) ? "Eres mayor de edad." : "No eres mayor de edad.";
    return mensaje;
}

// Solicitar la entrada del usuario
rl.question('Introduce tu edad: ', (respuesta) => {
    // Convertir la entrada a número
    const edadUsuario = Number(respuesta);
    
    // Mostrar el resultado en la consola
    console.log(verificarEdad(edadUsuario));
    
    // Cerrar la interfaz de lectura
    rl.close();
});
