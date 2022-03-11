var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var Chute = parseInt(document.getElementById("valor").value);
  console.log(Chute);

  if (Chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você Acertou!";
  } else if (Chute > 10 || Chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10!";
  } else if (Chute > numeroSecreto) {
    elementoResultado.innerHTML = "Você errou! o número secreto é menor";
  } else elementoResultado.innerHTML = "Você errou! o número secreto é maior";
}