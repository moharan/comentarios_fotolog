//alert("existe");
function guardar() {
	var button = document.getElementById("guardar");
	button.addEventListener("click", guardarDatos);
	//guardarDatos();
};

function guardarDatos() {
	//datos ingresados
	localStorage.nombre = document.getElementById("nombre").value;
	localStorage.comentario = document.getElementById("comentario").value;
	// validar
	if((localStorage.nombre !== undefined ) && (localStorage.comentario !== undefined)) {
	 //contenedor del html, y los datos a imprimir
		var containerPosteos = document.getElementById("ale");
		// Es el elemento que creamos. Es donde irá nuestro post
		var nuevoPost = document.createElement("div");
		// Ahora veamos donde metemos esos valores
		var contenedorNombre = document.createElement("h3");
		var contenedorPost = document.createElement("p");
		// Ahora hay que transformar el nombre a nodo de texto
		var nodoNombre = document.createTextNode(localStorage.nombre);
		var nodoPosteo = document.createTextNode(localStorage.comentario);
		// Ahora metemos esos nodos de texto a los elementos que ya creamos
		contenedorNombre.appendChild(nodoNombre);
		contenedorPost.appendChild(nodoPosteo);
		// Ahora agregamos el nombre y el contenido del posteo al post
		nuevoPost.appendChild(contenedorNombre);
		nuevoPost.appendChild(contenedorPost);
		// Finalmente, le damos atributos a nuestro post y lo metemos en el contenedor de posteos
		nuevoPost.setAttribute("class", "ale2");
		containerPosteos.appendChild(nuevoPost);
	// limpia value para seguir completando el formulario
	document.getElementById("nombre").value = "";
	document.getElementById("comentario").value = "";	
	}
	else {
		document.getElementById("aviso").innerHTML += "No has introducido tu nombre y tu comentario";
	}	
};

function limpiar() {
	var button = document.getElementById("limpiar");
	button.addEventListener("click", limpiarDatos);
	limpiarDatos();
};

function limpiarDatos() {
    // remueve todo
    document.querySelectorAll(".ale2").forEach(function(e) {
        e.remove()
    });
};