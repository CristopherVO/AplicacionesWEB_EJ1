let arr= ["This", "is", "a", "sentence."];

 function printOutString(arr){
    let palabra="";
    for(let index=0;index<arr.length;index++){
        palabra+=" "+arr[index];
    }
    console.log(palabra);


 }
 printOutString(arr); //This is a sentence

 console.log(arr.join(" "));