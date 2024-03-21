//Asegurar que la página se haya cargado antes de añadir eventos


//Asegura que toda la página y recursos ya se hayan 
//cargado (elementos html, imágenes, videos, archivos, ...)
//window.onload=function(){};
//window.addEventListener("load",function(){});

//Añadir los eventos cuando el DOM ya está listo
document.addEventListener("DOMContentLoaded",function(){
    var btn=document.getElementById("btnCalcular");
    btn.addEventListener("click",function(args){
        //Colocar la clase validado en el form
        //document.getElementsByTagName("form")[0]
        //asigna el atributo class, de modo que si ya tenía más clases, las reemplaza
        //document.querySelector("form").className="validado";

        //asigna el atributo class, de modo que si ya tenía más clases, las reemplaza
        document.querySelector("form").classList.add("validado");

        let txtN1=document.getElementById("num1");
        let txtN2=document.getElementById("num2");
        let combo=document.getElementById("cboOperacion");
        txtN2.setCustomValidity("");
        combo.setCustomValidity("");
        debugger;
        if(combo.value==0){
            combo.setCustomValidity("Selecciona una operación");
            //alert("Indica la operación");
            return;
        }
        let n1=parseFloat(txtN1.value);
        let n2=parseFloat(txtN2.value);
        let operacion=parseInt(combo.value);
        let resultado;
        let strOperacion;        
        let fila;
        
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
                if(txtN2.value!=0)
                    strOperacion=`${n1}/${n2}`;
                else{
                    txtN2.setCustomValidity("Valor no válido para la división");
                    return;
                }
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
        args.preventDefault();
    });
});
