export default async function fetchJson() {
  const response = await fetch('questoes.json')
    .then(response => {
      if (!response.ok)
      {
        throw new Error('Ops! Somenthing is wrong.' + response.statusText);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Houve um erro com o fecth do json:', error);
    });
  return response.questoes
};