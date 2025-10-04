import { Carregador, Salvador } from "../interfaces";

export enum TipoAeronave {
  COMERCIAL = "COMERCIAL",
  MILITAR = "MILITAR",
}

interface IAeronaveData {
  codigo: string;
  modelo: string;
  tipo: TipoAeronave;
  capacidade: number;
  alcance: number;
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

  // Metódos
  public detalhes(): void {
    console.log(
      `\nDetalhes da Aeronave ${this.codigo}:
  - Código: ${this.codigo}
  - Modelo: ${this.modelo}
  - Tipo: ${this.tipo}
  - Capacidade: ${this.capacidade}
  - Alcance: ${this.alcance}`
    );
  }

  public salvar(): string {
    return JSON.stringify({
      codigo: this.codigo,
      modelo: this.modelo,
      tipo: this.tipo,
      capacidade: this.capacidade,
      alcance: this.alcance,
    });
  }

  public carregar(linha: string): void {
    try {
      const obj: IAeronaveData = JSON.parse(linha);
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