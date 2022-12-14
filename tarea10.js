const txtCodigo = document.getElementById("txtCodigo");
const txtNombre = document.getElementById("txtNombre");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const nota4 = document.getElementById("nota4");

const resultado = document.getElementById("resultado");

const btnCalcular = document.getElementById("btnCalcular");

class Alumno{
    codigo = "";
    nombre = "";
    nota1 = 0;
    nota2 = 0;
    nota3 = 0;
    nota4 = 0;
    promedio = 0;
    condicion = "";   

    constructor(codigo = 'Sin codigo', nombre = 'Sin nombre', nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0, promedio = 0, condicion = 'Sin condicion' ){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.promedio = promedio;
        this.condicion = condicion;
    }


    calcularPromedioNotas(){ 
          const promedio = this.nota1*0.15  + this.nota2*0.2 + this.nota3*0.25 + this.nota4*0.4;
          this.promedio = promedio.toFixed(2);
          return this.promedio;
    }

    condicionAlumno(){
        if (this.calcularPromedioNotas() >=12) {
            this.condicion = 'APROBADO';
        } else {
            this.condicion = 'DESAPROBADO';
        }
    }

    obsequio(){
        if (this.condicion == 'APROBADO') {
            window.alert(`Estas ${this.condicion} , Por tu esfuerzo en clase eso te has ganado una mochila`)           
        } else {
            window.alert(`Estado: ${this.condicion} Volveremos a vernos en el siguiente curso...pipipi`)
        }

    }
}


function calcularPromedio () {
    let alumno = new Alumno('','',0,0,0,0);
    alumno.codigo = txtCodigo.value;
    alumno.nombre = txtNombre.value;
    alumno.nota1 = nota1.value;
    alumno.nota2 = nota2.value;
    alumno.nota3 = nota3.value;
    alumno.nota4 = nota4.value;

    alumno.calcularPromedioNotas();
    alumno.condicionAlumno();
    alumno.obsequio();

    console.log(alumno.calcularPromedioNotas)

}