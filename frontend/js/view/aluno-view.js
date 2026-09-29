const AlunoView = {
  lerDados() {
    return {
      ra: prompt("Digite o RA do aluno: "),
      nome: prompt("Digite o nome do aluno: "),
      email: prompt("Digite o email do aluno: "),
      curso: prompt("Digite o curso do aluno: "),
      turma: prompt("Digite a turma do aluno: ")
    }
  },
  exibirAluno(aluno) {
    console.log("Aluno cadastrado com sucesso.")

    console.table(aluno)
  },
  exibirErro(mensagem) {
    console.error("Erro:", mensagem)
  },
  perguntarNovoCadastro() {
    return confirm("Deseja cadastrar outro aluno")
  },
  exibirLista(alunos) {
    console.log(
      "Quantidade de alunos cadastrados: ", alunos.length
    );
    if (alunos.length === 0) {
      console.log("Nenhum aluno foi cadastrado.");
    }

    console.table(alunos);
  },
  exibirJson(textoJson) {
    console.log("Alunos em formato JSOn:");

    console.log(textoJson)
  },
  exibirDadosRecuperdos(dados) {
    console.log("Dados reconstruídos com JSON.parse(): ");

    console.table(dados);
  } 
}