
let estudiantes =[
    {semestre: 1, nombre:"Ana", nota: 15},
    {semestre: 2, nombre:"fabiana", nota: 18},
    {semestre: 3, nombre:"Carlos", nota: 10},
    {semestre: 2, nombre:"Diego", nota: 9},
    {semestre: 5, nombre:"Maria", nota: 15},
    
    ]
    ;

function nombreAprobados(personas){
    let aprobados = personas.filter(persona => persona.nota >= 10);
    return aprobados.map(persona => persona.nombre);
};
let  estudiante1 = nombreAprobados(estudiantes);
let salida = document.getElementById("salida");
estudiante1.forEach(estudiantes => salida.innerHTML += `<br> Estudiante aprobados en cada semestre: ${estudiantes}`);
;