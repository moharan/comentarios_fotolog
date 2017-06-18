/*aquí va tu código*/
var nombre = document.getElementById("nombre").value;
var comentario = document.getElementById("comentario").value;

function agregarComentario(){

	if((localStorage.nombre != undefined) && (localStorage.comentario != undefined)) {
		console.log(localStorage.nombre);
		console.log(localStorage.comentario);
		document.getElementById("ale").innerHTML= "Nombre: " + localStorage.nombre + "<br/> Comentario: " + localStorage.comentario + "<br>";
	}	
	else {
		document.getElementById("aviso").innerHTML= "working";
	}
}
agregarComentario();