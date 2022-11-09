/* Resolucion de problemas sobre Javascript con HTML
Nombre: Jhoan Josue Ramon Ortiz
Fecha: 11/6/2022
-----------
Ejercicio 1
*/

function convertirgradosCentigradosAGradosFarenheit() {
    var cel = document.getElementById('gCelsius').value;
    var far = 32 + ( 9 * cel / 5);
    document.getElementById('gFarenheit').innerHTML = far;

    if (far >= 212){
        document.getElementById('conv')

        conv.innerHTML = "Punto de ebullición del agua" 

    }else if (far >= 98.6 && far < 212){

        conv.innerHTML = "Temperatura del cuerpo humano"

    }else if (far >= 77 && far <= 98.6){

        conv.innerHTML = "Temperatura ambiente"

    }else if (far >= 32 && far <= 77){

        conv.innerHTML = "Punto de congelación del agua"

    }else if (far >= -459.58 && far < 32){

        conv.innerHTML = "Cero absoluto"

    }



}

//Ejercicio 2

function calcularPorcentajes(){
    var numE = document.getElementById('numEntrada').value;
    var mid = 0
    

    if(numE < 500){
        mid = numE * 1.5;
    }else{
        mid = numE * 0.93;
    }
    document.getElementById("mid").innerHTML = "<li> Cálculo: " + mid + "</li>";
}

//Ejercicio 3

function generarTablaHTML(){
    var filas = document.getElementById('fil').value;
    var columnas = document.getElementById('col').value;
    var nums = document.getElementById('nums');
    var tabla = "<table border = 1px solid black>";
    var desc = filas * columnas
    var i, j

    for(i = 0; i < filas ; i = i + 1){
        tabla += "<tr>";

    for(j = 0; j < columnas ; j = j + 1){
        tabla += "<td>" + desc-- + "</td>";
    }
        tabla += "</tr>";
    }   
        tabla += "</table border>";

    nums.innerHTML = tabla;
}