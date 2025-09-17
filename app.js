//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


const listaAmigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    listaAmigos.push(nome);
    atualizarListaAmigos();

    input.value = "";
    input.focus();
}

// Função para atualizar a lista na tela usando loop for clássico
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Nenhum amigo cadastrado para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const nomeSorteado = listaAmigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: <strong>${nomeSorteado}</strong>`;
}