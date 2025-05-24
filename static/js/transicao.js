import obterQuestao from "./questoes.js";

export function transicaoQuestao(data) {
  const questaoRespondida = document.getElementById("questao");
  
  if (questaoRespondida.classList.contains("visible")) questaoRespondida.classList.remove("visible");
     
  questaoRespondida.classList.add("fade-out");
  
  setTimeout(() => {
    questaoRespondida.remove();
    obterQuestao(data);
    const questaoNova = document.getElementById("questao");
    questaoNova.classList.add("fade-in");
    
    setTimeout(() => {
      questaoNova.classList.add("visible");
      questaoNova.style.opacity = "";
    }, 50);
  }, 500);
}

export function transicaoResultado() {
  const questaoRespondida = document.getElementById("questao"),
        proximaBtn = document.getElementById("proxima");
  
  questaoRespondida.classList.remove("visible");
  questaoRespondida.classList.add("fade-out");
  proximaBtn.classList.add("fade-out");
  
  setTimeout(() => {
    questaoRespondida.remove();
    proximaBtn.remove();
    
    const resultado = document.getElementById("resultado"),
          reiniciarBtn = document.getElementById("reiniciar");
    
    resultado.classList.add("fade-in");
    resultado.style.position= "static";
    
    reiniciarBtn.classList.add("fade-in");
    reiniciarBtn.style.position= "static";
    
    setTimeout(() => {
  
      resultado.classList.remove("hidden");
      resultado.classList.add("visible");
      
      reiniciarBtn.classList.remove("hidden");
      reiniciarBtn.classList.add("visible");
      
    }, 50);
  }, 500);
}