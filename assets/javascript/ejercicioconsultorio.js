/* 
Sistema para registrar pacientes y citas de estos pacientes, utilizando métodos de arrays
-Utilizar array de pacientes
-Utilizar un array para citas
-Prompt para registrar los datos
-Datos a registrar: nombre, apellido, fecha, edad, hora, especialista
-Función registrar pacientes
-Función registrar cita
-Métodos para modificar los arreglos (push, forEach, splice)
*/

//Array de pacientes
let pacientes = [];

//Función para registrar un nuevo paciente
//Paso 1: ejecución de mi función. Pido dos datos
function registrarPaciente (nombre,edad){
    //Crear un array dentro de otro array
    //Paso 2: Guardo cada par de datos (nombre y edad en una variable llamada "paciente")
    let paciente = {
        nombre,
        edad,
        citas : []
    };

    //Agregar paciente al array
    //Paso 3: Ya que tengo el par de datos le hago un push a mi array para guardar al paciente
    pacientes.push (paciente);
    return paciente;
}

//Función para registrar citas de un paciente
//Cuando ejecuto mi función necesito un paciente, fecha y horapara registrar la cita 
function registrarCita (paciente, fecha, hora){
    //Cuando tenga estos datos, buscaré dentro del paciente el apartado citas para hacerle un push ahí
paciente.citas.push (
    {
        fecha,
        hora
    }
);
}

//Función para mostrar la información del paciente con su cita
function mostrarInfoPaciente (paciente){
console.log ("Nombre del paciente" + paciente.nombre);
console.log ("Edad del paciente" + paciente.edad);
console.log ("Citas registradas");

//for each para imprimir citas
paciente.citas.forEach((cita, indice) =>{
    console.log("Indice: " + indice + "Fecha: " + cita.fecha + "Hora: " + cita.hora)
});
}

/*Funcionamiento del forEach anterior
Paso 1. Definir una variable temporal llamada cita y una llamada indice
Paso 2. Cada que se ejecute el forEach, busca y encuentra una cita, asigna esa información a las variables
 temporales e imprime la información
Paso 3. Vuelve a buscar y encontrar otra cita y reasigna esa información a las variables temporales*/


//Registrar un paciente desde la invoacación de la función
let paciente1 = registrarPaciente ("Felipe",31);
let paciente2 = registrarPaciente ("Andrea", 20);
let paciente3 = registrarPaciente ("Roberto", 15);

//Registrar la cita de un paciente desde la invoación de la función registrarCita
registrarCita (paciente1, "2023-09-12", "1:00 pm");
registrarCita (paciente2, "2023-10-10", "3:00 pm");

//Función mostrarInformacionPaciente
mostrarInfoPaciente (paciente1);
mostrarInfoPaciente (paciente2);
mostrarInfoPaciente (paciente3);





////////////////////////////////////////////////////////////////////////////////////////////
/*forEach
Es un método de arrays que tiene como objetivo iterar o recorrer cada elemento del array con la finalidad de aplicarle una función establecida. 

Generalmente se utiliza para imprimir la información del array.

Sintáxis:
array,forEach (function(elemento, indice, arreglo))

-elemento: elemento actual del arreglo que se está procesando
-indice: posición del elemento actual en el array
-arreglo: el array que se está recorriendo

Ejemplo:
-elemento: producto que compre y que está en el carrito del super
-indice: la posición de ese producto
-arreglo: carrito del super

*/
let carritoSuper = ["manzanas", "papitas", "huevo", "jabon de trastes", "pan"];
carritoSuper.forEach (function(producto, indice){
    console.log ("Producto " + producto + " con la posición" + indice);
});
////////////////////////////////////////////////////////////////////////////////////////////