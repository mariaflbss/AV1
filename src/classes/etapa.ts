import Funcionario from "./funcionario";

export enum StatusEtapa {
  PENDENTE = "PENDENTE",
  ANDAMENTO = "ANDAMENTO",
  CONCLUIDA = "CONCLUIDA",
}

export default class Etapa {
  public nome: string;
  public prazo: string;
  public status: StatusEtapa;
  public funcionarios: Funcionario[];
  public dataInicio: string | null;
  public dataFim: string | null;

  constructor(
    nome: string,
    prazo: string,
    status: StatusEtapa = StatusEtapa.PENDENTE,
    funcionarios: Funcionario[] = [],
    dataInicio: string | null = null,
    dataFim: string | null = null
  ) {
    this.nome = nome;
    this.prazo = prazo;
    this.status = status;
    this.funcionarios = funcionarios;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
  }

  iniciar(): void {
    if (this.status === StatusEtapa.PENDENTE) {
      this.status = StatusEtapa.ANDAMENTO;
      this.dataInicio = new Date().toISOString().split("T")[0];
    } else {
      console.warn("Não pode iniciar etapa que não está em PENDENTE.");
    }
  }

  iniciarComVerificacao(etapasAnteriores: Etapa[]): boolean {
    for (const etapa of etapasAnteriores) {
      if (etapa.status !== StatusEtapa.CONCLUIDA) {
        console.warn(`Não pode iniciar esta etapa antes de concluir ${etapa.nome}`);
        return false;
      }
    }
    if (this.status === StatusEtapa.PENDENTE) {
      this.status = StatusEtapa.ANDAMENTO;
      this.dataInicio = new Date().toISOString().split("T")[0];
      return true;
    }
    console.warn("Não pode iniciar etapa que não está em PENDENTE.");
    return false;
  }

  finalizar(): void {
    if (this.status === StatusEtapa.ANDAMENTO) {
      this.status = StatusEtapa.CONCLUIDA;
      this.dataFim = new Date().toISOString().split("T")[0];
    } else {
      console.warn("Não pode finalizar etapa que não está em ANDAMENTO.");
    }
  }

  associarFuncionario(funcionario: Funcionario): void {
    if (!this.funcionarios.some(f => f.id === funcionario.id)) {
      this.funcionarios.push(funcionario);
    } else {
      console.warn(`Funcionário ${funcionario.id} já está associado.`);
    }
  }

  listarFuncionarios(): Funcionario[] {
    return this.funcionarios;
  }

  detalhes(): void {
    console.log(`\nEtapa: ${this.nome}`);
    console.log(`- Prazo: ${this.prazo}`);
    console.log(`- Status: ${this.status}`);
    console.log(`- Início: ${this.dataInicio ?? "Não iniciado"}`);
    console.log(`- Fim: ${this.dataFim ?? "Não finalizado"}`);
    console.log(`- Funcionários envolvidos:`);

    if (this.funcionarios.length === 0) {
      console.log("  (Nenhum associado)");
    } else {
      for (const f of this.funcionarios) {
        console.log(`  - ${f.nome} (ID: ${f.id})`);
      }
    }
  }

  salvar(): string {
    const obj = {
      nome: this.nome,
      prazo: this.prazo,
      status: this.status,
      dataInicio: this.dataInicio,
      dataFim: this.dataFim,
      funcionarios: this.funcionarios.map(f => f.id)
    };
    return JSON.stringify(obj);
  }

  carregar(linha: string, todosFuncionarios: Funcionario[]): void {
    try {
      const obj = JSON.parse(linha);
      this.nome = obj.nome;
      this.prazo = obj.prazo;
      this.status = obj.status;
      this.dataInicio = obj.dataInicio;
      this.dataFim = obj.dataFim;
      this.funcionarios = obj.funcionarios
        .map((id: string) => todosFuncionarios.find(f => f.id === id))
        .filter(Boolean) as Funcionario[];
    } catch (err) {
      console.error("Erro ao carregar Etapa:", err);
    }
  }
}