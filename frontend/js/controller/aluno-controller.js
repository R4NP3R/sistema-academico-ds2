const AlunoController = {

  async iniciar() {

    AlunoView.inicializar();

    AlunoView.configurarFormulario(
      AlunoController.cadastrar
    );

    AlunoView.exibirMensagem(
      "Carregando alunos...", "informacao"
    );

    try {
      await AlunoController.atualizarVisualizacao();

      AlunoView.exibirMensagem("Dados carregados com sucesso.",
        "sucesso"
      );
    } catch (err) {
      AlunoView.exibirMensagem(err.message, "erro");
    }
  },
  async cadastrar(e) {
    e.preventDefault();

    const dadosInformados = AlunoView.lerDados();

    const validacao = AlunoModel.validar(
      dadosInformados
    );

    if (!validacao.sucesso) {
      AlunoView.exibirMensagem(validacao.mensagem, "erro");
      return;
    }

    AlunoView.alterarEstadoFormulario(true);

    AlunoView.exibirMensagem(
      "Enviando dados para o servidor...",
      "informacao"
    );

    try {
      const resultado = await AlunoService.cadastrar(
        validacao.dados
      );

      await AlunoController.atualizarVisualizacao();

      AlunoView.limparFormulario();

      AlunoView.exibirMensagem(
        resultado.mensagem,
        "sucesso"
      )
    } catch (err) {

      AlunoView.exibirMensagem(
        err.message,
        "erro"
      )
    } finally {
      AlunoView.alterarEstadoFormulario(false)
    }
  },
  async atualizarVisualizacao() {
    const alunos = await AlunoService.listar();

    AlunoView.exibirLista(alunos);

    AlunoView.exibirJson(alunos);
  }
};

AlunoController.iniciar();