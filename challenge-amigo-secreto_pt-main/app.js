//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function adicionarAmigo(){
    let nomeInput =  document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if(nome === ""){
        alert("Por favor, insira um nome válido");
        return;
    }
    nomes.push(nome);
    atualizarLista();
    nomeInput.value = "";
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML= "";
    nomes.forEach(nome => {
    let ul = document.createElement("ul");
    ul.textContent = nome;
    lista.appendChild(ul);
    });
}

function sortearAmigo(){
    if (nomes.length === 0){
        alert("A lista está vazia!!!");
        return;
    }
    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById("resultado").textContent = `O amigo secreto é: ${sorteado}`;
}