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
ListaAmigos();
}

function ListaAmigos() {
  let lista = document.getElementById("listaAmigos");

  // Limpiamos la lista antes de volver a escribirla
  lista.innerHTML = "";

  // Recorremos el array y agregamos cada nombre como <li>
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
