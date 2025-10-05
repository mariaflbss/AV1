import { pergunta } from "../entrada";
import Teste, { TipoTeste, ResultadoTeste } from "../classes/testes";

export class TesteService {
  async executarTeste(testes: Teste[]): Promise<void> {
    console.log("\nTipos de Teste:");
    console.log("1 - ELETRICO");
    console.log("2 - HIDRAULICO");
    console.log("3 - AERODINAMICO");

    const tipoOpcao = await pergunta("Escolha o tipo do teste (1-3): ");
    let tipo: TipoTeste;
    switch (tipoOpcao) {
      case "1":
        tipo = TipoTeste.ELETRICO;
        break;
      case "2":
        tipo = TipoTeste.HIDRAULICO;
        break;
      case "3":
        tipo = TipoTeste.AERODINAMICO;
        break;
      default:
        console.log("Tipo inválido. Cancelando execução do teste.");
        return;
    }

    console.log("\nResultado do Teste:");
    console.log("1 - APROVADO");
    console.log("2 - REPROVADO");

    const resultadoOpcao = await pergunta("Escolha o resultado do teste (1-2): ");
    let resultado: ResultadoTeste;
    switch (resultadoOpcao) {
      case "1":
        resultado = ResultadoTeste.APROVADO;
        break;
      case "2":
        resultado = ResultadoTeste.REPROVADO;
        break;
      default:
        console.log("Resultado inválido. Cancelando execução do teste.");
        return;
    }

    const novoTeste = new Teste(tipo, resultado);
    testes.push(novoTeste);

    console.log(`Teste do tipo ${tipo} com resultado ${resultado} salvo com sucesso.`);
  }
}