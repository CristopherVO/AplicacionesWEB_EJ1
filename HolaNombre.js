


document.getElementById("botonNombre").addEventListener("click",function cambiaNombre(nombre){
    var nombreIngresado= prompt("Ingrese su nombre porfavor ");

    if(nombreIngresado===null){
        nombreIngresado= prompt("Ingrese un nombre valido ");
    }
    document.getElementById("Saludo").innerText= "Hola "+nombreIngresado;
}
);