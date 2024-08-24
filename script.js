
function encriptar(){
     var frase = document.getElementById("textoUsuario").value.toLowerCase().
     normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
       
    if(frase ==""){
          alert("Ingresa un texto en el campo de escritura");
     }
     else {  
     // i=> toma letras mayusculas y minusculas
     // g=> tomar la linea o la oración
     // m=> tome en cuenta varias lineas
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado; 
    

    document.getElementById("botonCopiar").style.display="show";
    document.getElementById("botonCopiar").style.display="inherit";

    document.querySelector(".contenedor_imagen").style.display="none";
    document.querySelector(".cont_sub_1").style.display="none";
    document.querySelector(".cont_sub_2").style.display="none";
    
    
    mensajeEncriptado.reset();
     return false;
    
     }
         
}
    
   function desencriptar(){
    var frase1 = document.getElementById("textoUsuario").value;

    var textoEncriptado = frase1.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado; 
    
   }

   function copiar(){
        var contenido = document.querySelector("#textoDesencriptado");
        contenido.select();
        document.execCommand("copy");
   }

   

   


    
    

  