const botoesDiscipulos = document.querySelectorAll(".discipulo");
const nomeDiscipulo = document.getElementById("nome-discipulo");
const mensagens = document.getElementById("mensagens");
const formChat = document.getElementById("form-chat");
const campoPergunta = document.getElementById("pergunta");

let discipuloAtual = "pedro";

botoesDiscipulos.forEach((botao) => {
    botao.addEventListener("click", () => {
        botoesDiscipulos.forEach((item) => item.classList.remove("ativo"));
        botao.classList.add("ativo");

        discipuloAtual = botao.dataset.discipulo;
        nomeDiscipulo.innerText = botao.innerText;

        adicionarMensagem(`Agora você está conversando com ${botao.innerText}.`, "ia");
    });
});

formChat.addEventListener("submit", async (event) => {
    event.preventDefault();

    const pergunta = campoPergunta.value.trim();

    if(!pergunta){
        return;
    }

    adicionarMensagem(pergunta, "usuario");
    campoPergunta.value = "";
    campoPergunta.disabled = true;
    formChat.querySelector("button").disabled = true;

    const carregando = adicionarMensagem("Pensando...", "ia");

    try{
        const resposta = await fetch("/.netlify/functions/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                discipulo: discipuloAtual,
                pergunta
            })
        });

        const data = await resposta.json();

        carregando.innerText = data.resposta || data.error || "A IA respondeu, mas o site não conseguiu ler o texto. Tente novamente.";
    }catch(error){
        carregando.innerText = "Não foi possível conectar com a IA agora. Verifique se o site está publicado na Netlify e se a chave foi configurada.";
    }

    campoPergunta.disabled = false;
    formChat.querySelector("button").disabled = false;
    campoPergunta.focus();
});

function adicionarMensagem(texto, tipo){
    const mensagem = document.createElement("div");
    mensagem.className = `mensagem ${tipo}`;
    mensagem.innerText = texto;

    mensagens.appendChild(mensagem);
    mensagens.scrollTop = mensagens.scrollHeight;

    return mensagem;
}
