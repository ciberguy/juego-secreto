//// funcion que dice hola mundo
function holaMundo() {
console.log('Hola, Mundo');
return;
}

///una fucion que reciba un nombre como parametro
let nombreDeUsuario= imprimirNombre();

///function imprimirNombre() {
function imprimirNombre(nombreDeUsuario){
console.log(`Hola, ${nombreDeUsuario}`);
return
}


///calcular el doble
let numeroAJugar= doblarNumero();
function doblarNumero(){
    let numeroDoblado
    return numeroDoblado=numeroAJugar*2;
}
/* otra forma
*/
function doblarNumero(numeroAJugar){
    returnnumeroDoblado=numeroAJugar*2;
}


////cálculo del promedio
let valorAPromediar;
let valorBPromediar;
let valorCPromediar
let valorPromedio=generarPromedio();
/*function generarPromedio(){
    return (valorAPromediar+valorBPromediar+valorCPromediar)/3;
}
*/
   function generarPromedio(valorAPromediar,valorBPromediar,valorCPromediar){
    return (valorAPromediar+valorBPromediar+valorCPromediar)/3;
   }    
 ///valor máximo de dos números
 let ValorA;
 let valorB;
 let MaximoNumero=maximoValor();
 function maximoValor(ValorA,valorB){
        return Math.max(ValorA,valorB);
 }
 ///cuadrado de un múmero
 let numeroCuadrado= CuadradoDeNumero(); //ojo con sobre parámetros de la función
 function CuadradoDeNumero(numeroAJugar){
        return numeroAjugar*numeroAJugar;
 }
////para calcula el IMC de una persona
let pesoDePersona=80;
let estaturaDePersona=1.76;
function indiceMasaCorporal(pesoDePersona, estaturaDePersona){
    return (pesoDePersona/Math.pow(estaturaDePersona, 2));
}
console.log (indiceMasaCorporal(pesoDePersona,estaturaDePersona));
///factorial
let numero=5;
let i=1;
//let FactorDeNumero=1;
function factorial (numero) {
   while(i<=numero){
    numero=numero*i;
    i++;
   }
    
    return FactorDeNumero;
  }
  factorial(numero);
   
   // tasa de cambio
   let fondoEnDolares= 30;
   let tasaDeCambio=4.8;
   function convertidor(fondoEnDolares){
    return (fondoEnDolares*tasaDeCambio);
   }
   console.log(convertidor(fondoEnDolares))
   ///calculo de área y perimetro
   let ancho=2;
   let largo=4;
   let area;
   let perimetroDelaSala;
   function areaDeSala(ancho,largo){
        return (largo*ancho);
    }
   function perimetroDeSala(ancho,largo){
        return (largo+ancho);
    }
   area=areaDeSala(ancho,largo);
   perimetroDelaSala=perimetroDeSala(ancho,largo);
alert(`el área es de ${area} metros cuadrados y el perímetro es de ${perimetroDelaSala} metros`);
///cálculo del área y perímetro de circulo
let radio=2;
let areaCirculo;
let permitroDeCirculo;
function areaCircula(radio){
return (3.14*Math.pow(radio,2));
}
function perimetrocircular(radio){
    return(3.14*radio);
}
areaCirculo=areaCircula(radio);
permitroDeCirculo= perimetrocircular(radio);
alert(`el área del circulo es ${areaCirculo} metros y el perímetro es de ${permitroDeCirculo} metros`);
///
let multiplicador=prompt('deme el número a multiplicar');
let resultado;
function tablaDeMultiplcar(multiplicador){
    let i=1;
    for (let i = 1; i <=10; i++) {
        alert(`${multiplicador}X${i} es igual a ${multiplicador*i}`);
        }
    return;
}
tablaDeMultiplcar(multiplicador);
