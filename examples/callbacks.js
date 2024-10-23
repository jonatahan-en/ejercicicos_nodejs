function suma(a, b, callback){
    const resulta = a + b 
    callback(resulta)
}

suma(3, 4, function(resultado) {console.log('Sumado! son ',resultado)})// no hace falta ponerlo en un console.log


// Los callbacks son fundamentales en programación asíncrona, ya que permiten que el programa continúe ejecutándose sin tener que esperar a que finalicen ciertas tareas (como la lectura de archivos o solicitudes).

function saludar(nombre, callback) {
    console.log('Hola, ' + nombre);
    callback();
}

function despedirse() {
    console.log('Adiós!');
}
console.log('------------------------')
// Los callbacks son fundamentales en programación asíncrona, ya que permiten que el programa continúe ejecutándose sin tener que esperar a que finalicen ciertas tareas (como la lectura de archivos o solicitudes).

//ejemplo 2
function saludar(nombre, callback) {
    console.log('Hola, ' + nombre);
    callback();
}

function despedirse() {
    console.log('Adiós!');
}

// Llamada a la función con callback
saludar('Jonathan', despedirse);

console.log('--------------------------')

//ejercicio 3
function hacerTarea(callback) {
    console.log('Empezando tarea...');
    setTimeout(() => {
        console.log('Tarea completada');
        callback();
    }, 2000); // Simulamos una tarea que toma 2 segundos
}

function finalizar() {
    console.log('Todas las tareas han finalizado');
}

// Llamada a la función con callback
hacerTarea(finalizar);
