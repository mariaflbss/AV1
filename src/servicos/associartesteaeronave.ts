import { pergunta } from "../entrada";
import Teste from "../classes/testes"; 

export async function associarTesteAeronave(aeronaves: any[], testes: Teste[]): Promise<void> {
  if (aeronaves.length === 0) {
    console.log("Nenhuma aeronave cadastrada.");
    return;
  }
  if (testes.length === 0) {
    console.log("Nenhum teste cadastrado.");
    return;
  }

  console.log("\nLista de Aeronaves:");
  aeronaves.forEach((aeronave, idx) => {
    console.log(`${idx + 1} - ${aeronave.modelo} (Código: ${aeronave.codigo})`);
  });
  const opcaoAeronave = await pergunta("Escolha o número da aeronave: ");
  const aeronaveSelecionada = aeronaves[parseInt(opcaoAeronave) - 1];
  if (!aeronaveSelecionada) {
    console.log("Aeronave inválida.");
    return;
  }

  console.log("\nLista de Testes:");
  testes.forEach((teste, idx) => {
    console.log(`${idx + 1} - Tipo: ${teste.tipo} - Resultado: ${teste.resultado}`);
  });
  const opcaoTeste = await pergunta("Escolha o número do teste: ");
  const testeSelecionado = testes[parseInt(opcaoTeste) - 1];
  if (!testeSelecionado) {
    console.log("Teste inválido.");
    return;
  }

  if (!aeronaveSelecionada.testes) {
    aeronaveSelecionada.testes = [];
  }

  aeronaveSelecionada.testes.push(testeSelecionado);
  console.log(`Teste associado à aeronave ${aeronaveSelecionada.modelo} com sucesso.`);
}