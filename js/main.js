//alert("existe");
function guardar() {
	var button = document.getElementById("guardar");
	button.addEventListener("click", guardarDatos);
	guardarDatos();
};

function guardarDatos() {
	var nombre = document.getElementById("nombre").value;
	var comentario = document.getElementById("comentario").value;
	// recorre los datos de el formulario
	sessionStorage.setItem(nombre, comentario);

	var contenedor = document.getElementById("ale");
	contenedor.innerHTML = " ";
	for (var i = 0; i < sessionStorage.length; i++) {
		// devuelve el (numero) de tu key (Application)
		var kei = sessionStorage.key(i);
		var valuee = sessionStorage.getItem(kei);
		// = si solo escribo =, se sobreescribe USAR (+=)
		contenedor.innerHTML += "<p>" + kei + " " + valuee + "</p>";
	}
};

function limpiar() {
	var button = document.getElementById("limpiar");
	button.addEventListener("click", limpiarDatos);
	limpiarDatos();
};

function limpiarDatos() {
	alert("En algun momento borrara los datos");
}

guardar();
limpiar();