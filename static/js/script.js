import fetchJson from "./questoesFetch.js";
import obterQuestao from "./questoes.js"

const data = await fetchJson();
let respondidas = [];

obterQuestao(data)


