import Funcionario from "./funcionario";

export default class Etapa {
  public nome: string;
  public prazo: string;
  public status: string;
  private funcionarios: Funcionario[] = [];

  constructor(nome: string, prazo: string, status = "PENDENTE") {
    this.nome = nome;
    this.prazo = prazo;
    this.status = status;
  }

  public adicionarFuncionario(func: Funcionario): void {
    this.funcionarios.push(func);
  }

  public listarFuncionarios(): Funcionario[] {
    return this.funcionarios;
  }
}