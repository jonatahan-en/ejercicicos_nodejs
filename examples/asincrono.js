'use strict';

function escribeTras2Segundos(texto, instruccionsParaDespues) {// instruccionesParadespues es el callbacks se le puede llamar como tu quieras 
    setTimeout( function() {
    console.log(texto);
    instruccionsParaDespues()
    }, 2000)
}
//ejercicico1 
//escribeTras2Segundos('texto1')


//ejercicio 2 REVISAR

escribeTras2Segundos('texto1', function() {
    escribeTras2Segundos('texto2',function(){
    console.log('fin')
    })
})




/** 
// funcion en bucle REVISAR
function serie(n, fn, callback){
    if(n == 0){
        callback()
        return
    }
        
    n = n -1
    fn('texto' + n, function(){
        serie(n, fn, callback)
    })
}
serie(5, escribeTras2Segundos,function(){
    console.log('fin')
})

*/
