import { Carregador, Salvador } from "../interfaces"

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

  get getTipo(): TipoTeste {
    return this.tipo;
  }
  get getResultado(): ResultadoTeste {
    return this.resultado;
  }

  public salvar(): string {
    const obj = {
      tipo: this.tipo,
      resultado: this.resultado,
    };
    return JSON.stringify(obj);
  }

  public carregar(linha: string): void {
    try {
      const obj = JSON.parse(linha);
      this.tipo = obj.tipo;
      this.resultado = obj.resultado;
    } catch (err) {
      console.error("Falha ao carregar Teste:", err);
    }
  }
}
