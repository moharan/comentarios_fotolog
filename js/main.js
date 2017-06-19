//alert("existe");
function guardar() {
	var button = document.getElementById("guardar");
	button.addEventListener("click", pre);
	guardarDatos();
};

function borrar() {
	// borrar input
	document.getElementById("nombre").value = "";
	document.getElementById("comentario").value = "";
}
function pre() {
	var nombre = document.getElementById("nombre").value;
	var comentario = document.getElementById("comentario").value;
	// recorre los datos de el formulario
	localStorage.setItem(nombre,comentario);
	guardarDatos();
}

function guardarDatos() {
	var estructura = document.getElementById("ale");
	//?????
	estructura.innerHTML = "";
	for (var i = 0; i < localStorage.length; i++) {
		// devuelve el (numero) de tu key (Application)
		var kei = localStorage.key(i);
		var valuee = localStorage.getItem(kei);
		// = si solo escribo =, se sobreescribe USAR (+=)
		// Es el elemento que creamos. Es donde irá nuestro post
		var nuevoPost = document.createElement("div");
		// Ahora veamos donde metemos esos valores
		var contenedorNombre = document.createElement("h3");
		var contenedorPost = document.createElement("p");
		// Ahora hay que transformar el nombre a nodo de texto
		var nodoNombre = document.createTextNode(kei);
		var nodoPosteo = document.createTextNode(valuee);
		// Ahora metemos esos nodos de texto a los elementos que ya creamos
		contenedorNombre.appendChild(nodoNombre);
		contenedorPost.appendChild(nodoPosteo);
		// Ahora agregamos el nombre y el contenido del posteo al post
		nuevoPost.appendChild(contenedorNombre);
		nuevoPost.appendChild(contenedorPost);
		// Finalmente, le damos atributos a nuestro post y lo metemos en el contenedor de posteos
		nuevoPost.setAttribute("class", "ale2");
		estructura.appendChild(nuevoPost);
		//borrar();
	}

};
function limpiar() {
	var button = document.getElementById("limpiar");
	button.addEventListener("click", limpiarDatos);
	limpiarDatos();
};

function limpiarDatos() {
    // remueve de pantalla
    document.querySelectorAll(".ale2").forEach(function(e) {
    e.remove()
    });
    //If you want to remove/clean all the values from local storage than use
    localStorage.clear();
};

guardar();