let amigos = [];

function agregarAmigo(){
    let inputElement= document.getElementById('amigo');
    let valor = inputElement.value.trim();

    if(valor ===''){
        alert('Por favor, inserte un nombre.');
        return;
    }

    agregaAmigoAlArreglo(valor);    
    actualizarListaAmigosHTML();
    inputElement.value ='';
}

function agregaAmigoAlArreglo(nombre){  
    console.log(`agregando amigo: ${nombre}`)
    amigos.push(nombre); // Guarda el nombre tal como se ingresó
    amigos = borrarNombresRepetidos(amigos);// actualizamos amigos, variable global, con el arreglo de nombres único que retorna "borrarNombresRepetidos"
    console.log(`la lista de amigos ahora es ${amigos}`);
}

function borrarNombresRepetidos(amigos){
    const nombresEnMinuscula = amigos.map(nombre => nombre.toLowerCase());
    let conjuntoUnicoMinusculas = new Set(nombresEnMinuscula);
    //console.log(conjuntoUnicoMinusculas);
    const conjuntoUnicoOriginal = new Set();
    nombresEnMinuscula.forEach(nombreMinuscula => {
        const nombreOriginal = amigos.find(amigo => amigo.toLowerCase() === nombreMinuscula);
        conjuntoUnicoOriginal.add(nombreOriginal);
    });
    return Array.from(conjuntoUnicoOriginal);
}


function actualizarListaAmigosHTML() {
    let listaAmigosElement = document.getElementById('listaAmigos');

    if (!listaAmigosElement) {
        console.error("Error: No se encontró el elemento con ID 'listaAmigos' en el HTML.");
        return;
    }

    listaAmigosElement.innerHTML = '';
    const nombresUnicos = borrarNombresRepetidos(amigos);

    nombresUnicos.forEach(nombreUnico => {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombreUnico;
        listaAmigosElement.appendChild(nuevoAmigo);
    });
}

function sortearAmigo() {
    let resultadoElemento = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultadoElemento.innerHTML = '<li>No hay amigos disponibles para sortear.</li>';
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    resultadoElemento.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
    let botonParaSorteo = document.getElementById('botonSortearAmigo');
    botonParaSorteo.disabled = true; 
}