
const suma= (arreglo)=>{
    let sumatoria=arreglo.reduce(function(total,numero){
        return total+numero;
    },0);
    console.log("El resultado de la suma del arreglo ["+arreglo+" ] es : "+sumatoria);
}

const producto= (arreglo)=>{
    let result=arreglo.reduce(function(total,numero){
        return total*numero;
    },1);
    console.log("El resultado del producto del arreglo ["+arreglo+" ] es : "+result);

}

suma([1,2,3,4]);
producto([1,2,3,4]);
