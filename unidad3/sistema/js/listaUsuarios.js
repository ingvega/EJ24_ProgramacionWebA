/*var arreglo=[];
arreglo[0]=3;
arreglo[5]="Hola";
arreglo.push("Mundo");
var usuario={nombre:"Uriel Perez",
            correo:"uriel@gmail.com",
            telefono:'1234567890'};
usuario.password="123";
var usuario2={};
usuario2.nombre="Karina";
arreglo.push(usuario);
arreglo.push(usuario2);
console.log(arreglo);
*/
//JSON (JavaScript Object Notation)
//{atributo1:valor,atributo2:valor}
/*sessionStorage (tiempo de vida limitado al cierre del navegador)
localStorage (tiempo de vida dependiente de que el usuario borre)*/

document.addEventListener("DOMContentLoaded", () => {
    inicializarDatos();
    cargarTabla();
});

function cargarTabla(){
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    let tbody=document.querySelector("#tblUsuarios tbody");
    for (var i=0; i<usuarios.length;i++) {
        usuario=usuarios[i];
        let fila=document.createElement("tr");
        let celda=document.createElement("td");
        celda.innerText=usuario.nombre;
        fila.appendChild(celda);
        
        celda=document.createElement("td");
        celda.innerText=usuario.correo;
        fila.appendChild(celda);
        
        celda=document.createElement("td");
        celda.innerText=usuario.telefono;
        fila.appendChild(celda);

        celda=document.createElement("td");
        celda.innerHTML='<button type="button" onclick="editar(' + i +')">Editar</button>';
        fila.appendChild(celda);
        tbody.appendChild(fila);
    }

}

function editar(correo){

}

function inicializarDatos() {
    let usuarios = localStorage.getItem('usuarios');
    if (!usuarios) {
        usuarios = [
            {
                nombre: 'Uriel Perez Gomez',
                correo: 'uriel@gmail.com',
                password: '123456',
                telefono: ''
            },
            {
                nombre: 'Lorena Garcia Hernandez',
                correo: 'lorena@gmail.com',
                password: '567890',
                telefono: '4454577468'
            }
        ];

        //let usuarios=[];
        usuarios.push(
            {
                nombre: 'Uriel Perez Gomez',
                correo: 'uriel1@gmail.com',
                password: '123456',
                telefono: ''
            });
        usuarios.push(
            {
                nombre: 'Lorena Garcia Hernandez',
                correo: 'lorena1@gmail.com',
                password: '567890',
                telefono: '4454577468'
            });

        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
}
