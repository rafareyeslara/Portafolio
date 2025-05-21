function leer(){
	var nom=document.forms["formulario"].elements[0].value;
	//Referencia por ID
	var user=document.getElementById("nombre").value;
    var mail=document.getElementById("email").value;
    var message=document.getElementById("mensaje").value
	var ok=document.getElementById("check").checked;
	document.getElementById("resultado").innerHTML=
	"\<br>Tu nombre: "+user+
	"\<br>Tu email: "+mail+
	"\<br>Tu mensaje: "+message;
}