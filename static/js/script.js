function fetchJson() {
  fetch('questoes.json')
    .then(response => {
      if (!response.ok)
      {
        throw new Error('Ops! Somenthing is wrong.' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      popularQuestoes(data)
    })
    .catch(error => {
      console.error('Houve um erro com o fecth do json:', error);
    });
}

function popularQuestoes(jsonObject) {
  const modulos = jsonObject.modulos;
  modulos.forEach((obj, index) => {
    obj.modulo.forEach((objQuestao, index) => {
      console.log(objQuestao.questao.enunciado)
    });
  });
};

fetchJson();