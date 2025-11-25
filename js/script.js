// Mensagem de boas-vindas conforme o horário
function atualizarMensagemHorario() {
  const elemento = document.getElementById("mensagemHorario");
  if (!elemento) return; // só existe na index

  const agora = new Date();
  const hora = agora.getHours();
  let saudacao = "Bem-vinda(o) à PetFlu!";

  if (hora >= 5 && hora < 12) {
    saudacao = "Bom dia! Que bom ter você aqui na PetFlu!";
  } else if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde! Que bom ter você aqui na PetFlu!";
  } else {
    saudacao = "Boa noite! Que bom ter você aqui na PetFlu!";
  }

  elemento.textContent = saudacao;
}

// Data e hora no footer
function atualizarDataHoraFooter() {
  const elemento = document.getElementById("dataHora");
  if (!elemento) return;

  const agora = new Date();
  const opcoes = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };
  elemento.textContent = agora.toLocaleString("pt-BR", opcoes);
}

// Validação simples do formulário de agendamento
function configurarFormularioAgendamento() {
  const form = document.getElementById("formAgendamento");
  if (!form) return; // só existe em cadastro.html

  form.addEventListener("submit", function (event) {
    const nomeCliente = document.getElementById("nomeCliente").value.trim();
    const nomePet = document.getElementById("nomePet").value.trim();

    if (!nomeCliente || !nomePet) {
      alert("Por favor, preencha pelo menos o nome do cliente e do pet.");
      event.preventDefault();
      return;
    }

    alert("Cadastro e agendamento enviados com sucesso! 🐾");
    // Se quiser impedir o envio real (só para teste), descomente:
    // event.preventDefault();
  });
}

// Executa tudo quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
  atualizarMensagemHorario();
  atualizarDataHoraFooter();
  configurarFormularioAgendamento();
});
