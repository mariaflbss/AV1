import Etapa from "../classes/etapa";

export default class EtapaService {
  private etapas: Etapa[];

  constructor(etapas: Etapa[]) {
    this.etapas = etapas;
  }

  cadastrarEtapa(nome: string, prazo: string): void {
    const etapa = new Etapa(nome, prazo);  
    this.etapas.push(etapa);
  }
}