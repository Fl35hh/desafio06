console.warn("Ejercicio C")

var cantidadDeGatos = 11 ;
var cantidadDePasos = 3;

for(var contador = 1; contador <= cantidadDeGatos;  contador++){
    if (contador % 2 == 0){
        console.log("Gato #" + contador + ": 🐈 ⬛" + "🐾".repeat(cantidadDePasos))
    } 
    else {
        console.log("Gato #" + contador + ": 🐈" + "🐾".repeat(cantidadDePasos))
    }
}

