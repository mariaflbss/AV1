import { Inicializador, Finalizador } from "../interfaces"
import Funcionario from "./funcionario";

export enum StatusEtapa {
  PENDENTE = "PENDENTE",
  ANDAMENTO = "ANDAMENTO",
  CONCLUIDA = "CONCLUIDA",
}

export default class Etapa implements Inicializador, Finalizador {
  public nome: string;
  public prazo: string;
  public status: StatusEtapa;
  public funcionarios: Funcionario[];

  constructor(
    nome: string,
    prazo: string,
    status: StatusEtapa = StatusEtapa.PENDENTE,
    funcionarios: Funcionario[] = []
  ) {
    this.nome = nome;
    this.prazo = prazo;
    this.status = status;
    this.funcionarios = funcionarios;
  }

  // Getters
  get getNome(): string {
    return this.nome;
  }
  get getPrazo(): string {
    return this.prazo;
  }
  get getStatus(): StatusEtapa {
    return this.status;
  }
  get getFuncionarios(): Funcionario[] {
    return this.funcionarios;
  }

  // Métodos

  public iniciar(): void {
    if (this.status === StatusEtapa.PENDENTE) {
      this.status = StatusEtapa.ANDAMENTO;
    } else {
      console.warn("Não pode iniciar etapa que não está em PENDENTE.");
    }
  }

  public finalizar(): void {
    if (this.status === StatusEtapa.ANDAMENTO) {
      this.status = StatusEtapa.CONCLUIDA;
    } else {
      console.warn("Não pode finalizar etapa que não está em ANDAMENTO.");
    }
  }

  public associarFuncionario(f: Funcionario): void {
    // para evitar duplicatas
    const jáExiste = this.funcionarios.some((func) => func.getId === f.getId);
    if (!jáExiste) {
      this.funcionarios.push(f);
    } else {
      console.warn(
        `Funcionário ${f.getId} já está associado à etapa ${this.nome}.`
      );
    }
  }

  public listarFuncionarios(): Funcionario[] {
    return this.funcionarios;
  }
}
