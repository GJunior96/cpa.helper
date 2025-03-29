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
        modulo = document.querySelector("#modulo"),
        divEnunciado = document.createElement("p"),
        lista = document.querySelector("#alternativas");
    
    divEnunciado.textContent = enunciado;
    divEnunciado.classList.add("enunciado");
    modulo.appendChild(divEnunciado);
    
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
    let moduloIndex = aleatorio(data),
        questaoIndex = aleatorio(data[moduloIndex].modulo),
        questao = data[moduloIndex].modulo[questaoIndex].questao;
    
    criarElementoQuestao(questao);
    
    data[moduloIndex].modulo.splice(questaoIndex, 1);
};


