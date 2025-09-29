import { Carregador, Salvador} from "../interfaces"

export enum TipoAeronave {
  COMERCIAL = "COMERCIAL",
  MILITAR = "MILITAR",
}

export default class Aeronave implements Salvador, Carregador {
  public codigo: string;
  public modelo: string;
  public tipo: TipoAeronave;
  public capacidade: number;
  public alcance: number;

  constructor(
    codigo: string,
    modelo: string,
    tipo: TipoAeronave,
    capacidade: number,
    alcance: number
  ) {
    this.codigo = codigo;
    this.modelo = modelo;
    this.tipo = tipo;
    this.capacidade = capacidade;
    this.alcance = alcance;
  }

  // Getters
  get getCodigo(): string {
    return this.codigo;
  }
  get getModelo(): string {
    return this.modelo;
  }
  get getTipo(): TipoAeronave {
    return this.tipo;
  }
  get getCapacidade(): number {
    return this.capacidade;
  }
  get getAlcance(): number {
    return this.alcance;
  }

  // Setters
  set setModelo(novoModelo: string) {
    this.modelo = novoModelo;
  }
  set setCapacidade(novaCapacidade: number) {
    this.capacidade = novaCapacidade;
  }
  set setAlcance(novoAlcance: number) {
    this.alcance = novoAlcance;
  }

  // Métodos

  public detalhes(): void {
    console.log(
      `\nDetalhes da Aeronave ${this.getCodigo}:
  - Código: ${this.getCodigo}
  - Modelo: ${this.getModelo}
  - Tipo: ${this.getTipo}
  - Capacidade: ${this.getCapacidade}
  - Alcance: ${this.getAlcance}`
    );
  }

  public salvar(): string {
    // retorna uma string serializada para salvar em arquivo
    const obj = {
      codigo: this.codigo,
      modelo: this.modelo,
      tipo: this.tipo,
      capacidade: this.capacidade,
      alcance: this.alcance,
    };
    return JSON.stringify(obj);
  }

  public carregar(linha: string): void {
    try {
      const obj = JSON.parse(linha);
      this.codigo = obj.codigo;
      this.modelo = obj.modelo;
      this.tipo = obj.tipo;
      this.capacidade = obj.capacidade;
      this.alcance = obj.alcance;
    } catch (err) {
      console.error("Falha ao carregar Aeronave:", err);
    }
  }
}
