const readline = require('readline');

// Configuración para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para leer la entrada del usuario
function leerEntrada(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

// Función para calcular la nota final
async function calcularNotaFinal() {
    try {
        const nombre = await leerEntrada("Ingrese el nombre del alumno: ");
        const carnet = await leerEntrada("Ingrese el carnet del alumno: ");
        const examen = parseFloat(await leerEntrada("Ingrese la nota del examen: "));
        const tareas = parseFloat(await leerEntrada("Ingrese la nota de las tareas: "));
        const asistencia = parseFloat(await leerEntrada("Ingrese la nota de la asistencia: "));
        const investigacion = parseFloat(await leerEntrada("Ingrese la nota de la investigación: "));
        
        // Porcentajes (puedes ajustar estos valores si quieres que el usuario los ingrese)
        const porcentajeExamen = 20;
        const porcentajeTareas = 40;
        const porcentajeAsistencia = 10;
        const porcentajeInvestigacion = 30;

        // Cálculo de la nota final
        const notaFinal = (examen * porcentajeExamen / 100) +
                          (tareas * porcentajeTareas / 100) +
                          (asistencia * porcentajeAsistencia / 100) +
                          (investigacion * porcentajeInvestigacion / 100);

        // Mostrar los datos del alumno
        console.log("\nDatos del Alumno:");
        console.log(`Nombre: ${nombre}`);
        console.log(`Carnet: ${carnet}`);
        console.log(`Nota Final: ${notaFinal.toFixed(2)}`);

    } catch (error) {
        console.error("Error al leer la entrada:", error);
    } finally {
        rl.close();
    }
}

// Ejecutar la función para calcular la nota final
calcularNotaFinal();
