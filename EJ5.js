

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
const imprimirLista=(arreglo)=>{
    for (let index = 0; index < arreglo.length; index++) {
        console.log("El elemento"+index+" del arreglo es: "+arreglo[index]);
        
    }
}

const remove=(arreglo, nombre)=>{
    arreglo.splice(arreglo.indexOf(nombre),1);
    console.log(arreglo);
}

const ponerDelante=(arreglo,nombre)=>{
    remove(arreglo,nombre);
    arreglo.push(nombre);
    console.log(arreglo);
}

const myName=(arreglo,nombre)=>{
    arreglo.push(nombre);

}

const buscarNombre=(arreglo,nombre)=>{
   let posicion=arreglo.indexOf(nombre);
   console.log("La posicion donde esta "+nombre+" es "+posicion);
}



imprimirLista(people);
remove(people,"Dani");
remove(people,"Juan");
ponerDelante(people,"Luis");
myName(people,"Cristopher");
buscarNombre(people,"Maria");
console.log(people);


