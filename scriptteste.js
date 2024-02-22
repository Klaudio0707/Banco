

buttonSubmit = document.querySelector("#buttonDeposito");

const buttonSaque = document.querySelector("#buttonSaque");
const buttonSaldo = document.querySelector("#buttonSaldo");
let saldo = 0;



buttonSubmit.addEventListener("click", function(event) {
event.preventDefault();
let nome = (document.getElementById("nomeInput").value);
let sobreNome = (document.getElementById("sobrenomeInput").value);
let deposito = (document.getElementById("depositoInput").value);

//console.log(nome,sobreNome,deposito);

document.querySelector(".Nome").innerHTML = `${nome}`;
document.querySelector(".sobreInput").innerHTML = `${sobreNome}`;
document.querySelector(".depositoBancario").innerHTML = `${deposito}`;
document.querySelector(".saldo").innerHTML = `${deposito}`;

document.getElementById("saldo").insertAdjacentElement("afterend", );


console.log(deposito,resultDeposito);



});
