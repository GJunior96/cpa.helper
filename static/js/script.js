import fetchJson from "./questoesFetch.js";
import obterQuestao from "./questoes.js";
import { transicaoQuestao, transicaoResultado } from "./transicao.js";
import validarResposta from "./validacaoResposta.js"
console.log("teste")
const data = await fetchJson(),
      quantidadeQuestoes = data.length;
let respondidas = [];

obterQuestao(data);

document.getElementById("questao").classList.add("fade-in");
document.getElementById("questao").classList.add("visible");
document.getElementById("questao").style.opacity = "";

const numeroQuestoes = document.getElementById("numero-questoes"),
      proximaBtn = document.getElementById('proxima'),
      reiniciarBtn = document.getElementById('reiniciar');

numeroQuestoes.textContent = `${respondidas.length}/${quantidadeQuestoes}`;

document.getElementById('container').addEventListener('click', event => {
  if(event.target.tagName === "LI") {
    proxima.disabled = false;
    validarResposta(event, respondidas);
    avaliarResposta(event.target);
  }
});

proximaBtn.addEventListener('click', function() {
  proximaPergunta();
});

reiniciarBtn.addEventListener('click', function() {
  location.reload();
});

function proximaPergunta() {
  if(respondidas.length < quantidadeQuestoes) {
        transicaoQuestao(data);
      } else {
        transicaoResultado();
        apresentarResultado(respondidas);
      }
      numeroQuestoes.textContent = `${respondidas.length}/${quantidadeQuestoes}`;
      proximaBtn.disabled = true;
}

function apresentarResultado(arr) {
  const corretas = document.getElementById("corretas"),
        erradas = document.getElementById("erradas"),
        porc = document.getElementById("porc");
        
  corretas.textContent= arr.filter(corr => corr === "correta").length;
  erradas.textContent= arr.filter(err => err === "incorreta").length;
  porc.textContent= Math.floor((Number(corretas.textContent) / arr.length) * 100) + "%";
}

function avaliarResposta(target) {
  
  if(target.classList.contains("correta")) {
    target.style.border= "2px solid #28a745";
    target.style.backgroundColor= "#d4edda";
    target.style.color= "#155724";
  } else {
    target.style.border= "2px solid #dc3545";
    target.style.backgroundColor= "#f8d7da";
    target.style.color= "#721c24";
    [...target.parentElement.children].forEach(obj => {
      if(obj.classList.contains("correta"))
      {
        obj.classList.add("piscar-correta");
      }
      obj.style.pointerEvents= "none";
      obj.style.cursor= "none";
    })
  }
}