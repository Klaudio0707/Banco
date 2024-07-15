const buttonSubmit = document.querySelector("#buttonDeposito");
const artigoDeposito = document.querySelector(".Deposito");
const artigoTransferencia = document.querySelector(".Transferencia");
const artigoFormulario = document.querySelector(".Formulario");
/*
const buttonSaque = document.querySelector("#buttonSaque");
const buttonSaldo = document.querySelector("#buttonSaldo");
*/
function ocult(){
artigoDeposito.className="ocultar";
artigoTransferencia.className="ocultar";
// artigoFormulario.className="ocultar";

}
ocult();
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
