import { Salvador, Carregador } from "../interfaces";

export enum TipoTeste {
  ELETRICO = "ELETRICO",
  HIDRAULICO = "HIDRAULICO",
  AERODINAMICO = "AERODINAMICO",
}

export enum ResultadoTeste {
  APROVADO = "APROVADO",
  REPROVADO = "REPROVADO",
}

export default class Teste implements Salvador, Carregador {
  public tipo: TipoTeste;
  public resultado: ResultadoTeste;

  constructor(tipo: TipoTeste, resultado: ResultadoTeste) {
    this.tipo = tipo;
    this.resultado = resultado;
  }

  detalhes(): void {
    console.log(`\nTeste: ${this.tipo}`);
    console.log(`- Resultado: ${this.resultado === ResultadoTeste.APROVADO ? "Aprovado" : "Reprovado"}`);
  }

  salvar(): string {
    return JSON.stringify({
      tipo: this.tipo,
      resultado: this.resultado,
    });
  }

  carregar(linha: string): void {
    try {
      const obj = JSON.parse(linha);
      this.tipo = obj.tipo;
      this.resultado = obj.resultado;
    } catch (err) {
      console.error("Erro ao carregar Teste:", err);
    }
  }
}
