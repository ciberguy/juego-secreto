let listaGenerica=[];
let lenguajesDeProgramacion=['javaScript','C','C++'.'Kotlin','Phyton'];
lenguajesDeProgramacion.push('Java','Ruby','GoLang');
function mostrarPantalla(lenguajesDeProgramacion){
    console.log(lenguajesDeProgramacion);
    return;
}
///calculo del promedio de los valores de una lista
let valoresParaPromediar=[];
let i=1;

function calcularPromedio(){
    for (i=1; i<=10; i++ ) {
        let elementosDeValores= Math.floor(Math.random()*20)+1;
        valoresParaPromediar.push(elementosDeValores);
    }
}
