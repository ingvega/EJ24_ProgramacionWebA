//Asegurar que la página se haya cargado antes de añadir eventos


//Asegura que toda la página y recursos ya se hayan 
//cargado (elementos html, imágenes, videos, archivos, ...)
//window.onload=function(){};
//window.addEventListener("load",function(){});

//Añadir los eventos cuando el DOM ya está listo
document.addEventListener("DOMContentLoaded",function(){
    var btn=document.getElementById("btnCalcular");
    btn.addEventListener("click",function(){
        let n1=parseFloat(document.getElementById("num1").value);
        let n2=parseFloat(document.getElementById("num2").value);
        let combo=document.getElementById("cboOperacion");
        let operacion=parseInt(combo.value);
        let resultado;
        let strOperacion;        
        let ope;
        let fila;
        debugger;
        switch (operacion) {
            case 1:
                strOperacion=`${n1}+${n2}`;
                break;
            case 2:
                strOperacion=`${n1}-${n2}`;
                break;
            case 3:
                strOperacion=`${n1}*${n2}`;
                break;
            case 4:
                strOperacion=`${n1}/${n2}`;
                break;
            default:
                break;
        }
        resultado=eval(strOperacion);
        fila=document.createElement("tr");
        let celda=document.createElement("td");
        let contenido=document.createTextNode(combo.selectedOptions[0].innerText);
        celda.appendChild(contenido);
        fila.appendChild(celda);

        celda=document.createElement("td");
        contenido=document.createTextNode(strOperacion);
        celda.appendChild(contenido);
        fila.appendChild(celda);

        celda=document.createElement("td");
        contenido=document.createTextNode(resultado);
        celda.appendChild(contenido);
        fila.appendChild(celda);
        
        let tbody=document.querySelector("#tblResultados tbody");
        tbody.appendChild(fila);
        /*fila=`<tr><td>${combo.selectedOptions[0].innerText}</td><td>${strOperacion}</td><td>${resultado}</td></tr>`;
        tbody.innerHTML+=fila;        */
    });
});
