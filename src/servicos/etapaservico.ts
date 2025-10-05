import { pergunta } from "../entrada";

interface Etapa {
  nome: string;
  prazo: string;
}

export default class EtapaService {
  private etapas: Etapa[];

  constructor(etapas: Etapa[]) {
    this.etapas = etapas;
  }

  cadastrarEtapa(nome: string, prazo: string): void {
    this.etapas.push({ nome, prazo });
  }
}