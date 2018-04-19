function validateForm(){
	nombre();
	apellido();
	correo();
	contrasena();
	seleccion();
}


//validación nombre
function nombre(){
		var nameValue = document.getElementById("name").value;
		if (!(/^[A-Z][a-z]{3,19}$/).test(nameValue)){
		var spancito = document.createElement("span");
		var texto = document.createTextNode("Nombre inválido. Debe incluir letras de la A-Z.");
		var clasePadre = document.getElementsByClassName("name-container input-box")[0];
		spancito.appendChild(texto);
		clasePadre.appendChild(spancito);
		}
}

//validacion apellido
function apellido(){
		var apellidoValue = document.getElementById("lastname").value;
		if (!(/^[A-Z][a-z]{3,19}$/).test(apellidoValue)){
		var spancito = document.createElement("span");
		var texto = document.createTextNode("Apellido inválido. Debe incluir letras de la A-Z.");
		var clasePadre = document.getElementsByClassName("lastname-container input-box")[0];
		spancito.appendChild(texto);
		clasePadre.appendChild(spancito);
		}
}

//validacion correo 
function correo(){
		var emailValue = document.getElementById("input-email").value;
		if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(emailValue)){
		var spancito = document.createElement("span");
		var texto = document.createTextNode("Correo inválido. Debe tener formato valido.");
		var clasePadre = document.getElementsByClassName("email-container input-box")[0];
		spancito.appendChild(texto);
		clasePadre.appendChild(spancito);
		}
}

//validacion contraseña, debe ser mayor de 6 caracteres, y no incluir 123456, 098765 ó password
function contrasena(){
		var passValue = document.getElementById("input-password").value;
		if (passValue=="123456" || passValue=="098765" || passValue=="password" || !(/^(?=.*\d).{6,}$/).test(passValue)){
			var spancito = document.createElement("span");
			var texto = document.createTextNode("Contraseña inválida. Debe tener un mínimo de 6 caracteres.");
			var clasePadre = document.getElementsByClassName("form-group input-box")[0];
			spancito.appendChild(texto);
			clasePadre.appendChild(spancito);
		}
}

//validacion seleccion, debe escoger una opción, tagName me da un arreglo el cual deboo recorrer
function seleccion(){
		var selectValue = document.getElementsByTagName("select");
		for (var i=0 ; i<selectValue.length ; i++){
			if (selectValue[0].value == 0){
				var spancito = document.createElement("span");
				var texto = document.createTextNode("Debe seleccionar una opción.");
				var clasePadre = document.getElementsByClassName("form-group input-box")[1];
				spancito.appendChild(texto);
				clasePadre.appendChild(spancito);
			}
		}	
}