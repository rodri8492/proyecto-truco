// asignando valores y jerarquias
let cartas = ({
"0" : ["1Espada"], 
"1" : ["1Basto"],
"2" : ["7Espada"],
"3" : ["7Oro"],
"4" : ["3Oro", "3Copa", "3Espada", "3Basto"],
"5" : ["2Oro", "2Copa", "2Espada", "2Basto"],
"6" : ["1Oro", "1Copa"],
"7" : ["12Oro", "12Copa", "12Espada", "12Basto"],
"8" : ["11Oro", "11Copa", "11Espada", "11Basto"],
"9" : ["10Oro", "10Copa", "10Espada", "10Basto"],
"10" : ["7Copa", "7Basto"],
"11" : ["6Oro", "6Copa", "6Espada", "6Basto"],
"12" : ["5Oro", "5Copa", "5Espada", "5Basto"],
"13" : ["4Oro", "4Copa", "4Espada", "4Basto"]
});

// declarando palos
let palos = ["Oro", "Copa", "Espada", "Basto"];

// declarando las manos
let primeraMano = [];
let segundaMano = [];
let terceraMano = [];

// declarando las cartas en mano
let cartasJugador1 = [];
let cartasJugador2 = [];
let cartasARepartir = [];


function repartirCartas(){
    for (let i = 0; i<6; i++){
        let x = Math.round(Math.random() *13); // para elegir una de las 14 cartas
        let y = Math.round(Math.random() * 3); // en caso de que la carta sea un array de 4 elementos elige una entre ellos
        let z = Math.round(Math.random()); // en caso de que la carta esté dentro de un array de 2 elementos elige uno entre ellos

        if (cartas[x].length == 2){
            // console.log("el array tiene 2 elementos")
            let cartaZ = cartas[x][z]; // agregando la carta a un nuevo array para ahi mezclarlos y darselas a los jugadores
            cartasARepartir.push(cartaZ);
            console.log(cartaZ + " 2")
        } else if (cartas[x].length == 4){
            // console.log("se eligió un array, eligiendo una carta dentro del array...")
            let cartaY = cartas[x][y];
            cartasARepartir.push(cartaY);
            console.log(cartaY + " 4");
        } else{
            let cartaX = cartas[x][0];
            cartasARepartir.push(cartaX);
            console.log(cartaX + " 0");
        }
    }
};
repartirCartas();
console.log(cartasARepartir);

// verificando si alguna carta se repite
function verificarCartasRepetidas() {
    let contadorCartas = {}; // Objeto para llevar un registro de las cartas y sus recuentos

    // Recorre el array cartasARepartir
    for (let i = 0; i < cartasARepartir.length; i++) {
        let carta = cartasARepartir[i];

        if (contadorCartas[carta]) {
            contadorCartas[carta]++; // Incrementa el recuento si la carta ya existe en el objeto
        } else {
            contadorCartas[carta] = 1; // Inicializa el recuento si la carta es vista por primera vez
        }
    }

    // Verifica si alguna carta se repite
    let cartasRepetidas = [];

    for (let carta in contadorCartas) {
        if (contadorCartas[carta] > 1) {
            cartasRepetidas.push(carta);
        }
    }

    if (cartasRepetidas.length > 0) {
        console.log("Cartas repetidas encontradas:");
        console.log(cartasRepetidas);

        // Reemplaza las cartas repetidas por nuevas cartas
        for (let i = 0; i < cartasRepetidas.length; i++) {
            let cartaRepetida = cartasRepetidas[i];
            let indiceRepetido = cartasARepartir.indexOf(cartaRepetida);

            // Encuentra una nueva carta aleatoria que no esté en cartasARepartir
            let nuevaCarta;
            do {
                let x = Math.round(Math.random() * 13);
                let y = Math.round(Math.random() * 3);
                let z = Math.round(Math.random());
                if (cartas[x].length == 2) {
                    nuevaCarta = cartas[x][z];
                } else if (cartas[x].length == 4) {
                    nuevaCarta = cartas[x][y];
                } else {
                    nuevaCarta = cartas[x][0];
                }
            } while (cartasARepartir.includes(nuevaCarta));

            // Reemplaza la carta repetida por la nueva carta
            cartasARepartir[indiceRepetido] = nuevaCarta;
        }

        console.log("Nuevo array con cartas reemplazadas:");
        console.log(cartasARepartir);
    } else {
        console.log("No se encontraron cartas repetidas.");
    }
};
verificarCartasRepetidas();

function repartirCartasAJugadores(){
    cartasJugador1.push(cartasARepartir[0], cartasARepartir[2], cartasARepartir[4]);
    cartasJugador2.push(cartasARepartir[1],cartasARepartir[3],cartasARepartir[5]);
    console.log("cartas jugador 1: " + cartasJugador1);
    console.log("cartas jugador 2: " + cartasJugador2);
}; 
repartirCartasAJugadores();

