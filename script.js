const buttonSubmit = document.querySelector("#buttonDeposito");
/*
const buttonSaque = document.querySelector("#buttonSaque");
const buttonSaldo = document.querySelector("#buttonSaldo");
*/

buttonSubmit.addEventListener("click", function(event) {
event.preventDefault();
let nome = document.getElementById("nomeInput");
let sobreNome = document.getElementById("sobrenomeInput");
let deposito = (document.getElementById("depositoInput").value);

document.querySelector("nome").innerHTML = `Nome: ${nome}`;
document.querySelector(".sobreNomeInput").innerHTML = `SobreNome ${sobreNome}`;
document.querySelector(".depositoBancario").innerHTML = `Valor Depositado R$ ${deposito}`;
console.log(nome,sobreNome,deposito);


});
