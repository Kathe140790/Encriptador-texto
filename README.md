<h5> ENCRIPTADOR DE TEXTO 
  
<p>
Se elabora un encriptador y desencriptador de texto que oculta o muestra un mensaje secreto asignando paralabras adicionales a las vocales
<p>

<h5>
Como funciona:
<p>
Se debe ingresar en el cruadro de texto, que se encuentra al lado izquierdo de la pagina, el mensaje o palabra a encriptar; luego se selecciona el boton "Encriptar" y mostrará en el cuadro de texto del lado derecho la oración encriptada.
Con el boton copiar, se podra copiar el texto que ha sido encriptado, al pegarlo nuevamente en el cuadro de texto inicial y oprimir el boton desencriptar, se podra ver nuevamente el texto inicial ingresado.
</p>

<h5>Para tener en cuenta:
<li>La letra e = "enter"
<li>La letra i = "imes"
<li>La letra a = "ai"
<li>La letra o = "ober"
<li>La letra u = "ufat"
<li> La pagina cuenta con campos para inserción de texto que podra ser encriptado y desencriptado.
<li> Se tiene un boton de copiar texto en el cuadro de resultado.</li>

<h5> Funciones a destacar del codigo Java Script:
<li>El encriptador funciona con letras minusculas, sin embargo cuenta con una función en el archivo javaScript, para cambiar de mayusculas a minusculas (**toLowerCase()**).
<li> La funcion **img** permite cambiar las vocales por las palabras asignadas: ejemplo, replace(/a/img, "ai"); teniendo en cuenta que tome letras mayusculas y minusculas, que tome toda la oración y que tome varias lineas de texto.
