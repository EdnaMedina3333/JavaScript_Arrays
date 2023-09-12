/* Un array es un conjunto de datos que se puede almacenar en una sola variable. Es una estructura de datos que podemos definir como una colección de variables (que pueden ser diferentes pero con un mismo contexto).

 */

//Variables que están "sueltas"
let nombre = "Felipe";
let edad = 31;
let puesto = "Instructor";

//Usar un array para "juntar" nuestras variables
//Agregamos los elementos al array separados por coma ","
let personasCH31 = ["Felipe", "Jose Angel", "Marco", "Evelyn", "Alejandro"];
console.log(typeof (personasCH31));

//Podemos almacenar cualquier tipo de dato en un array
let cosasRandom = ["pelota", 31, true, undefined, null]
console.log(typeof (cosasRandom)); //object

//Al imprimir el tipo de dato de nuestro array obtenemos un object porque los arrays son objetos (después veremos que tenemos muchos tipos de objetos)

//Los arrays al ser objetos cuentan con métodos que nos permiten manipularlos


//Ya que tengo mi arreglo ¿cómo podemos acceder a esa información?
//Para mostrar la cantidad de elementos que tengo en un array utilizamos un método llamado "length"
//Método length para mostrar los elementos de un array
console.log(personasCH31.length);

//Declarar un array
[5, 4, 3, 2, 1]
//Inicializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];


//Acceder a un elemento en específico utilizando los indices
console.log(personasCH31[0]); //Felipe
console.log(personasCH31[25]); //undefined porque el elemento aún no existe

//También podemos acceder a un elemento de mi array por medio de una variable
//Declaro el indice (index) en una variable 
let index = 4;
//Paso esta variable como indice del array
console.log(personasCH31[index]); //Alejandro


///////////////////////////////////////////////////////////////////////////////

//Ejemplo de un array para un consultorio dental
let pacientes = [];

let dentistas = ["Dr. Smith", "Dra. Garcia", "Dr. House", "Dr. Simi"];

//Para hacer modificaciones usamos el index para acceder al dato, y luego lo reasignamos
//Cambiar "Simi" por "Similares" 
dentistas[3] = "Similares";

dentistas[8] = "Dr. Strange"; //undefined

////////////////////////////////////////////////////////////////////////////////


//Métodos de arrays
let listaSuper = ["Gansitos", "Coca Cola", "Arroz", "Atun", "Verduras"];

// Metodo para conocer la longitud del array
console.log("La cantidad de elementos de mi array es de " + listaSuper.length);


//Método push () para poner elementos al final de mi array
listaSuper.push("Jabon para ropa", "Jabón para trastes");
console.log(listaSuper);


//Método pop() para eliminar elementos del final del array
listaSuper.pop();
console.log(listaSuper);


//Agregar un elemento al principio del array, método unshift ()
listaSuper.unshift("Sabritones");
console.log(listaSuper);


//Eliminar el primer elemento del array shift () elimina elementos al principio del array
listaSuper.shift();
console.log(listaSuper);

//Saber la posición de "Verduras"
console.log(listaSuper.indexOf("Verduras"));


//Método spilce () para agregar, eliminar o reemplazar elementos
//nombreArray.splice (inicio, cantidadElementosAEliminar, elementoAInsertar1, elementoAInsertar2,...);
listaSuper.splice(2, 0, "Cacahuates", "Manzana"); //['Gansitos', 'Coca-colas', 'Cacahuates', 'Manzana', 'Arroz', 'Atún', 'Verduritas', 'Jabón para ropa']
console.log(listaSuper);

listaSuper.splice(5, 2, "Platano"); //['Gansitos', 'Coca Cola', 'Cacahuates', 'Manzana', 'Arroz', 'Platano', 'Jabon para ropa']
console.log(listaSuper);


//Método map()
let numeros = [1, 2, 3, 4, 5];

//Instrucción: crear otro array con los números multiplicados por 2 [2,4,6,8,10]

let numerosPor2 = numeros.map(function (numero) {  //función anónima
    return numero * 2;
});

console.log(numerosPor2); //[2, 4, 6, 8, 10]


/////////////////////////////////////////////////////////////////////////////////////////////////////
/* Imaginemos que tenemos un array de pacientes. Este array tiene datos registrados como nombre, edad. Necesitamos modificar este arraypara que revisemos la edad de cada paciente, y si la edad es mayor a 40 años, el paciente necesita una atención especial.
Aspectos a considerar:
-2 arrays (original y modificado)
-condición (if)
-función para agregar el nuevo dato a cada elemento
-método .map
*/

//Arreglo de pacientes original
let pacientesConsultorio = [
    {
        nombre: "Felipe",
        edad: 31
    },
    {
        nombre: "Fatima",
        edad: 26
    },
    {
        nombre: "Jesus",
        edad: 51
    }
]

//Función para agregar el texto "Necesita atención especial"
function agregarEstadoSalud (paciente){
    let estado = "Saludable";

    //Si el paciente tiene más de 40 años
    if (paciente.edad>40){
        estado = "Nesecita atención especial";
    } //esta llave cierra el if
    
    return {
        ...paciente, //copia del paciente
        estadoSalud: estado, //para agregar un nuevo campo o variable (como la edad o el nombre)
    }; //esta llave cierra el return
} //esta llave cierra la function

//Vamos a aplicar la función en cada elemento del array con map
let pacientesConsultorioConEstado = pacientesConsultorio.map (agregarEstadoSalud);

console.log (pacientesConsultorio);
console.log (pacientesConsultorioConEstado);

/////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////
/*Carrera con los siguientes corredores:
- Primer lugar: Roberto
- Segundo lugar: Andrea
- Tercer lugar: Jorge
- Cuarto lugar: Ramiro
- Quinto lugar: Sofia

Después de 3 vueltas, Jorge adelanta a Roberto, Ramiro adelanta a Jorge y Roberto se lesiona y sale de la carrera. Además Andrea baja una posición, Ramiro mantiene su lugar y el quinto lugar es reemplazado por Jose.

Lo que tendría que pasar es:
-Como está primero [Roberto,Andrea,Jorge,Ramiro,Sofia]
-Jorge adelanta a Roberto [Jorge,Roberto,Andrea,Ramiro,Sofia]
-Ramiro adelanta a Jorge [Ramiro,Jorge,Roberto,Andrea,Sofia]
-Roberto se sale [Ramiro,Jorge,Andrea,Sofia]
-Andrea baja una posición [Ramiro,Jorge,Sofia,Andrea]
-El quinto lugar queda Jose [Ramiro,Jorge,Sofia,Andrea,Jose]

¿Cómo quedan las posiciones después de esas 3 vueltas?
[Ramiro,Jorge,Sofia,Andrea,Jose]
*/

//Declarar array con corredores
let corredores = ["Roberto", "Andrea","Jorge","Ramiro","Sofia"];

//Método spilce () //nombreArray.splice (inicio, cantidadElementosAEliminar, elementoAInsertar1, elementoAInsertar2,...);
corredores.splice(0,0,"Jorge");
corredores.splice(3,1);
//[Jorge,Roberto,Andrea,Ramiro,Sofia]

corredores.splice(0,0,"Ramiro");
corredores.splice(4,1);
//[Ramiro,Jorge,Roberto,Andrea,Sofia]

corredores.splice(2,1);
//[Ramiro,Jorge,Andrea,Sofia]

corredores.splice(4,0,"Andrea");
corredores.splice(2,1);
//[Ramiro,Jorge,Sofia,Andrea]

corredores.splice(4,0,"Jose");
//[Ramiro,Jorge,Sofia,Andrea,Jose]

console.log(corredores);

/////////////////////////////////////