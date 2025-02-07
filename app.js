// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//

let amigos =[];
//let arregloAmigosSinRepetidos = borrarNombresRepetidos(amigos);
//console.log(arregloAmigosSinRepetidos);


function agregarAmigo(){
    let inputElement= document.getElementById('amigo');
    let valor = inputElement.value.trim(); // Elimina espacios en blanco al inicio y al final 
    

    if(valor ===''){
        alert('Por favor, inserte un nombre.');
        return; // sale de la función si el valor está vacío
    }

    agregaAmigoAlArreglo(valor);
    agregarNombreALaListaHTML(valor);
    inputElement.value ='';
    
}

function agregaAmigoAlArreglo(nombre){  //se agregan los nombre al arreglo (Array) o ([])
    console.log(`agregando amigo: ${nombre}`)
    amigos.push(nombre.toUpperCase());
    console.log(`la lista de amigos ahora es ${amigos}`);

    borrarNombresRepetidos(amigos);
    
}

function borrarNombresRepetidos(amigos){  //borra los nombres repetidos del arreglo
    let conjuntoUnico = new Set (amigos);
    console.log(conjuntoUnico);
    MostrarArregloSinRepetidos(conjuntoUnico);
}

function MostrarArregloSinRepetidos (conjuntoUnico){  // Muestra el arreglo de amigos sin repetidos
    console.log("El array sin repetidos es", conjuntoUnico)
}


function agregarNombreALaListaHTML(nombre){ // Se agregan los nombres a la lista de HTML
    let listaAmigos = document.getElementById('listaAmigos');
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent=nombre;
    listaAmigos.appendChild(nuevoAmigo);
    // listaAmigos.innerHTML ='';
    // listaAmigos.appendChild(document.createTextNode(`se agrego ` + nombre));
}




/*
function eliminarRepetidos(amigos) {
    let conjuntoUnico = new set (amigos);
    console.log(conjuntoUnico); 
    return[...conjuntoUnico];
   
}



/*

let frutas = ["Manzana", "Banana"];

console.log(frutas.length);
// 2

let primero = frutas[0];
let ultimo = frutas[frutas.length -1]

console.log(primero)
// manzana

console.log(ultimo)

//Banana

//RECORRER UN ARRAY

frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice, array);
  });

/* 
Manzana 0 
            (2) ['Manzana', 'Banana']
            0 : "Manzana"
            1 : "Banana"
            length : 2
            [[Prototype]]: Array(0)       
Banana 1
            (2) ['Manzana', 'Banana']
            0 : "Manzana"
            1 : "Banana"
            length : 2
            [[Prototype]]: Array(0)
*/
