fetch("historia.txt")
  .then(resposta => resposta.text())
  .then(texto => {
    document.getElementById("textoHistoria").innerText = texto;
  });