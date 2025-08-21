
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [  ];

function agregarAmigo() {
    let input = document.getElementById("amigo").value;
    let nombre = input.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else {
        amigos.push(nombre);
        document.getElementById("amigo").value = " "; 
        document.getElementById("amigo").focus(); 
        actualizarLista();
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        let btn = document.createElement("button");
        btn.textContent = "❌";
        btn.onclick = () => eliminarAmigo(index);

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const seleccionado = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${seleccionado}</strong></li>`;

    amigos = amigos.filter(amigo => amigo !== seleccionado);
    if (amigos.length === 0) {
        alert("No quedan más amigos para sortear.");
        actualizarLista();
        document.getElementById("amigo").focus();
    }
}

