// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//

let amigos =[];

function agregarAmigo(){
    let inputElement= document.getElementById('amigo');
    let valor = inputElement.value.trim(); // Elimina espacios en blanco al inicio y al final 
    

    if(valor ===''){
        alert('Por favor, inserte un nombre.');
        return; // sale de la función si el valor está vacío
    }

    agregaAmigoALaLista(valor);
    inputElement.value ='';
}

function agregaAmigoALaLista(nombre){
    console.log(`agregando amigo: ${nombre}`)
    amigos.push(nombre);
    console.log(`la lista de amigos ahora es ${amigos}`);
}


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
