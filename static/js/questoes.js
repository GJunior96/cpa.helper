function aleatorio(array) {
    return Math.floor(Math.random() * array.length);
};

export default function obterQuestao(data) {
  
  console.log(data[aleatorio(data)].modulo[0].questao.enunciado)
};


