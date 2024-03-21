var arreglo=[];
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

//JSON (JavaScript Object Notation)
//{atributo1:valor,atributo2:valor}