const AlunoView = {
  elementos: {},
  inicializar() {
    AlunoView.elementos.formulario =
      document.getElementById("form-aluno");
    AlunoView.elementos.ra =
      document.getElementById("ra");
    AlunoView.elementos.nome =
      document.getElementById("nome");
    AlunoView.elementos.email =
      document.getElementById("email");
    AlunoView.elementos.curso =
      document.getElementById("curso");
    AlunoView.elementos.turma =
      document.getElementById("turma");
    AlunoView.elementos.mensagem =
      document.getElementById("mensagem");
    AlunoView.elementos.corpoTabela =
      document.getElementById("corpo-tabela-alunos");
    AlunoView.elementos.totalAlunos =
      document.getElementById("total-alunos");
    AlunoView.elementos.saidaJson =
      document.getElementById("saida-json");
    AlunoView.elementos.botaoSalvar =
      document.getElementById("botao-salvar");
  },
  configurarFormulario(aoEnviar) {
    AlunoView.elementos.formulario.addEventListener(
      "submit",
      aoEnviar
    );
  },
  lerDados() {
    return {
      ra: AlunoView.elementos.ra.value,
      nome: AlunoView.elementos.nome.value,
      email: AlunoView.elementos.email.value,
      curso: AlunoView.elementos.curso.value,
      turma: AlunoView.elementos.turma.value,
    };
  },
  exibirMensagem(mensagem, tipo) {
    AlunoView.elementos.mensagem.textContent = mensagem;

    AlunoView.elementos.mensagem.className = `mensagem ${tipo}`;
  },
  criarCelula(valor) {
    const celula = document.createElement("td");

    celula.textContent = valor;

    return celula;
  },
  exibirLista(alunos) {
    
    AlunoView.elementos.corpoTabela.innerHTML = "";

    if (alunos.length === 0) {
      const linha = document.createElement("tr");
      const celula = document.createElement("td");

      celula.colSpan = 7;
      celula.textContent = "Nenhum aluno foi cadastrado.";

      linha.appendChild(celula);
      AlunoView.elementos.corpoTabela.appendChild(linha);

      return;
    }

    alunos.forEach((aluno) => {
      const linha = document.createElement("tr");

      linha.appendChild(
        AlunoView.criarCelula(aluno.id)
      );

      linha.appendChild(
        AlunoView.criarCelula(aluno.ra)
      );

      linha.appendChild(
        AlunoView.criarCelula(aluno.nome)
      );

      linha.appendChild(
        AlunoView.criarCelula(aluno.email)
      );

      linha.appendChild(
        AlunoView.criarCelula(aluno.curso)
      );

      linha.appendChild(
        AlunoView.criarCelula(aluno.turma)
      );

      linha.appendChild(
        AlunoView.criarCelula(aluno.ativo ? "Sim" : "Não")
      );

      AlunoView.elementos.corpoTabela.appendChild(
        linha
      );
    });
  },
  exibirJson(alunos) {
    AlunoView.elementos.saidaJson.textContent = JSON.stringify(alunos, null, 2);
  },
  limparFormulario() {
    AlunoView.elementos.formulario.reset();

    AlunoView.elementos.ra.focus();
  },
  alterarEstadoFormulario(processando) {
    AlunoView.elementos.botaoSalvar.disabled = processando;

    AlunoView.elementos.botaoSalvar.textContent = 
      processando ? "Salvando..." : "Cadastrar aluno";
  }
}