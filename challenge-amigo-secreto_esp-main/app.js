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


function sortearAmigos() {
// Para verificar que haya al menos un nombre en el array
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, agrega al menos un amigo.");
    return;
  }

// Para seleccionar un amigo al azar
let amigoAleatorio = Math.floor(Math.random() * amigos.length);
let amigoSorteado = amigos[amigoAleatorio];

// Mostrar el resultado

let resultado = document.getElementById("resultado");
resultado.innerHTML = ""; // Limpiamos resultados anteriores
let li = document.createElement("li");
li.textContent = `Tu amigo secreto es: ${amigoSorteado}`;
resultado.appendChild(li);
}