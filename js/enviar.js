/* Função de validação do form */

document.getElementById("botao").addEventListener("click", validaContato);

function validaContato() {
  let form_name = document.getElementById("form_name").value;
  let form_lastname = document.getElementById("form_lastname").value;
  let form_phone = document.getElementById("form_phone").value;
  let form_need = document.getElementById("form_need").value;
  let form_street = document.getElementById("form_street").value;
  let form_nh = document.getElementById("form_nh").value;
  let form_hnumber = document.getElementById("form_hnumber").value;
  let form_city = document.getElementById("form_city").value;
  let form_message = document.getElementById("form_message").value;

  let form_email = document.getElementById("form_email").value;

  if (form_name == "") {
    alert("Favor preencher o nome");
    document.getElementById("form_name").focus();
    return;
  }

  if (form_lastname == "") {
    alert("Favor preencher o sobrenome");
    document.getElementById("form_lastname").focus();
    return;
  }

  if (form_phone == "") {
    alert("Favor preencher o telefone");
    document.getElementById("form_phone").focus();
    return;
  }

  if (form_need == "") {
    alert("Favor selecionar o motivo do contato");
    document.getElementById("form_need").focus();
    return;
  }

  if (form_street == "") {
    alert("Favor preencher o logradouro");
    document.getElementById("form_street").focus();
    return;
  }

  if (form_nh == "") {
    alert("Favor preencher o bairro");
    document.getElementById("form_nh").focus();
    return;
  }

  if (form_hnumber == "") {
    alert("Favor preencher o número da casa");
    document.getElementById("form_hnumber").focus();
    return;
  }

  if (form_city == "") {
    alert("Favor preencher a cidade");
    document.getElementById("form_city").focus();
    return;
  }

  if (form_email == "") {
    alert("Favor preencher o email");
    document.getElementById("form_email").focus();
    return;
  }

  if (form_message == "") {
    alert("Preencha a mensagem");
    document.getElementById("form_message").focus();
    return;
  } else {
    alert("Mensagem enviada!");
  }
}
