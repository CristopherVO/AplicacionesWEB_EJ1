

// declaramos los arreglos
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const commonFunction=(cursos1,cursos2)=>{
    let comunes=cursos1.filter(function(course){
        return cursos2.includes(course);
    })
    if (comunes.length>0){
        console.log("cursos en comun son: "+ comunes.join(' '));
    }else{
        console.log("No hay cursos en comun");
    }

}


commonFunction(student1Courses,student2Courses);