export default function validarResposta(event, obj) {
  if(event.target.classList.contains("correta")) {
    obj.push("correta")
  } else {
    obj.push("incorreta");
  };
};