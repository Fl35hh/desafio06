console.warn("Ejercicio A")
var emoji = "";

for (var cantidadDeGatos = 1;  cantidadDeGatos <= 10;   cantidadDeGatos++){
        
        if (cantidadDeGatos == 1 || cantidadDeGatos == 4 || cantidadDeGatos == 7 || cantidadDeGatos == 10){
            emoji = "😺";
        }
        else if(cantidadDeGatos == 2 || cantidadDeGatos == 5 || cantidadDeGatos == 8){
            emoji = "😸"
        }
        else if(cantidadDeGatos == 3 || cantidadDeGatos == 6 || cantidadDeGatos == 9){
            emoji = "😹"
        }

        console.log("Gato #" + cantidadDeGatos + ": " + emoji)
    
}