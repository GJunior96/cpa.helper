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
  var modulos = jsonObject.modulos;
  modulos.foreach((modulo, index) => {
    console.log(modulo, index)
  })
}

fetchJson();