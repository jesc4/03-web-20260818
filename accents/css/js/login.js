const email = "admin@gmail.com";
const senha = "1234";

function verificarCredenciais() {
  const emailInformado = document.getElementById("email").value;
  const senhaInformada = document.getElementById("senha").value;

  if (emailInformado === email){
 alert("email informado corretamente!");
  if (senhaInformada === senha){
    alert("senha informada corretamente.");
    window.location = "home.html";
  }else
    alert("senha informada incorretamente.");
  }else
    alert("email informado incorretamente.");
}