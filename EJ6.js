let input=[3,6,12,5,100,1];
let output;
let estado;

const burbuja=(arreglo)=>{
    do{
        estado=false;
    
        for (let index = 0; index < arreglo.length-1; index++) {
            if(arreglo[index]>arreglo[index+1]){
                let prueba=arreglo[index];
                arreglo[index]=arreglo[index+1];
                arreglo[index+1]=prueba;
                estado=true;
            }
            
        }
    }while(estado);
    return arreglo;
    

}

console.log(" El arreglo original es ["+input+ "] el arreglo en burbuja ordenado es: {"+burbuja(input)+"] ");