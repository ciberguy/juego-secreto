let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let ganancia=10;//por ahora luego lo cambio para que el usuario lo cambie

//console.log(numeroSecreto);
function asigarTextoDeElemento(elemento,texto){
    // captura el "elemento de HTML "
    //y devuelve el valor en "texto"
    let elementoHtml= document.querySelector(elemento);
    elementoHtml.innerHTML= texto;
    return
}
 
function verificarIntento () {
    let numeroDeUsuario= parseInt(document.getElementById('ValorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto) {
        asigarTextoDeElemento('p',  `Felicidades! acertaste el número en ${intentos} ${(intentos===1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');// el botón nuevo juego cambia
    } else{
        if (numeroDeUsuario > numeroSecreto) {
            asigarTextoDeElemento('p', 'El Número secreto es menor');
        } else{
            asigarTextoDeElemento('p', 'El Número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}
// limpiar la caja de intentos
function limpiarCaja(){
    document.querySelector('#ValorUsuario').value= '';
    
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*ganancia)+1;
   // console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    //este bloque es para resolver la recursividad de la funcion generarNumeroSecretpo
    if(listaNumerosSorteados.length == ganancia) {
        asigarTextoDeElemento('p','Ya se sortearon todas las posibilidades');
    } else {
        //que pasa si ya sortiamos todos los números?
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

}

function codicionesIniciales(){
    asigarTextoDeElemento('h1','Juego del número secreto');
    asigarTextoDeElemento('p',`Escoge un número del 1 al ${ganancia}`); 
    numeroSecreto=generarNumeroSecreto();
    intentos=1;   
}    
function reiniciarJuego(){
    //limpiar a caja
    limpiarCaja();
    //indicar mensaje de inicio
    codicionesIniciales();
    //generar el numero secreto
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');//se ajjusta el atributo al boton 
    /*inicializar el numero de intentos*/
}    
codicionesIniciales();