function aleatorio(array) {
    return Math.floor(Math.random() * array.length);
};

function embaralharArray(array) {
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
};

function criarElementoQuestao(obj) {
    let alternativas = embaralharArray([...obj.erradas, obj.resposta]),
        enunciado = obj.enunciado,
        resposta = obj.resposta,
        container = document.querySelector("#container"),
        questao = document.createElement("div"),
        divEnunciado = document.createElement("p"),
        lista = document.createElement("ul");
    
    questao.id = "questao";
    questao.classList.add("card-questao");
    
    questao.style.opacity = "0";
    
    container.appendChild(questao);
    
    lista.id = "alternativas";
    questao.appendChild(lista);
    
    divEnunciado.textContent = enunciado;
    divEnunciado.classList.add("enunciado");
    questao.appendChild(divEnunciado);
    
    alternativas.forEach((texto) => {
        let itemLista = document.createElement("li");
        itemLista.textContent = texto
        itemLista.classList.add("alternativa");
        if (itemLista.textContent === resposta) {
            itemLista.classList.add("correta");
        };
        lista.appendChild(itemLista);
    });
};

export default function obterQuestao(data) {
    let questaoIndex = aleatorio(data),
        questao = data[questaoIndex];
  
    criarElementoQuestao(questao);
    
    data.splice(questaoIndex, 1);
};


