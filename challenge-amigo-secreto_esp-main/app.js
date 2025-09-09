let amigos = [];

function agregarAmigos() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

// Validamos el nombre para que no este vacio
if (nombre === "") {
    alert("Por favor, ingresa un nombre valido para agregar en el sorteo.");
    return;
}
// Para guardar los nombres en el array
amigos.push(nombre);

//Limpiamos el input
input.value = "";

// Para mostrar la lista actualizada
mostrarLista();
}