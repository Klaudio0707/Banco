const btnDepositar = document.querySelector("#btnDeposita");
const inDeposito = Number(document.querySelector("#inDeposito").value);

const artigoInicio = document.querySelector(".inicio");
const artigoDeposito = document.querySelector(".Deposito");
const artigoTransferencia = document.querySelector(".Transferencia");
const artigoFormulario = document.querySelector(".Cadastro");

const frmDeposito = document.querySelector("#frmDeposito");
const frmTransferencia = document.querySelector("#frmTransferencia");
const frmCadastro = document.querySelector("#frmCadastro");

const saldo = document.querySelector(".Saldo");
const inSaldo = document.querySelector("#inSaldo");
/*
const buttonSaque = document.querySelector("#buttonSaque");
const buttonSaldo = document.querySelector("#buttonSaldo");
*/

let value = 0;



function voltar(){
  
artigoInicio.className="exibir"
ocult();
};

ocult();

function cadastro(){
    artigoFormulario.className="exibir";   
    artigoInicio.className="ocultar"; 
 frmCadastro.reset();

};



artigoFormulario.addEventListener("submit", (e) => {
e.preventDefault();

artigoFormulario.className="ocultar";
artigoDeposito.className="exibir";
saldo.className="exibir";

});
btnDepositar.addEventListener("click", () => {

const deposito = parseFloat(frmDeposito.inDeposito.value);

value += deposito;

frmDeposito.reset();
frmDeposito.inDeposito.focus();
inSaldo.innerText = value.toFixed(2);


});
function ocult(){
    artigoDeposito.className="ocultar";
    artigoTransferencia.className="ocultar";
    artigoFormulario.className="ocultar";
    saldo.className="ocultar";
};
