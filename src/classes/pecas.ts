import { Carregador, Salvador } from "../interfaces";

export enum TipoPeca {
  NACIONAL = "NACIONAL",
  IMPORTADA = "IMPORTADA",
}

export enum StatusPeca {
  EM_PRODUCAO = "EM_PRODUCAO",
  EM_TRANSPORTE = "EM_TRANSPORTE",
  PRONTA = "PRONTA",
  INSTALADA = "INSTALADA",
}

export default class Peca implements Salvador, Carregador {
  public nome: string;
  public tipo: TipoPeca;
  public fornecedor: string;
  public status: StatusPeca;

  constructor(
    nome: string,
    tipo: TipoPeca,
    fornecedor: string,
    status: StatusPeca
  ) {
    this.nome = nome;
    this.tipo = tipo;
    this.fornecedor = fornecedor;
    this.status = status;
  }

  // Getters
  get getNome(): string {
    return this.nome;
  }
  get getTipo(): TipoPeca {
    return this.tipo;
  }
  get getFornecedor(): string {
    return this.fornecedor;
  }
  get getStatus(): StatusPeca {
    return this.status;
  }

  public atualizarStatus(novoStatus: StatusPeca): void {
    this.status = novoStatus;
  }

  public salvar(): string {
    const obj = {
      nome: this.nome,
      tipo: this.tipo,
      fornecedor: this.fornecedor,
      status: this.status,
    };
    return JSON.stringify(obj);
  }

  public carregar(linha: string): void {
    try {
      const obj = JSON.parse(linha);
      this.nome = obj.nome;
      this.tipo = obj.tipo;
      this.fornecedor = obj.fornecedor;
      this.status = obj.status;
    } catch (err) {
      console.error("Falha ao carregar Peça:", err);
    }
  }

  public detalhes(): void {
    console.log(`\nPeça: ${this.nome}`);
    console.log(`- Tipo: ${this.tipo}`);
    console.log(`- Fornecedor: ${this.fornecedor}`);
    console.log(`- Status: ${this.status}`);
  }
}