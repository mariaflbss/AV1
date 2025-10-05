import { pergunta } from "../entrada";
import Aeronave from "../classes/aeronaves";
import Teste from "../classes/testes";

export async function associarTesteAeronave(aeronaves: Aeronave[], testes: Teste[]) {
  if (aeronaves.length === 0 || testes.length === 0) {
    console.log("Aeronaves ou testes não disponíveis.");
    return;
  }

  console.log("\n=== Associar Teste à Aeronave ===");
  aeronaves.forEach((a, i) => {
    console.log(`${i + 1}. ${a.modelo}`);
  });
  const idxAeronave = parseInt(await pergunta("Escolha o número da aeronave: ")) - 1;
  const aeronave = aeronaves[idxAeronave];

  testes.forEach((t, i) => {
    console.log(`${i + 1}. Teste #${i + 1}`);
  });
  const idxTeste = parseInt(await pergunta("Escolha o número do teste: ")) - 1;
  const teste = testes[idxTeste];

  if (!aeronave.testes) aeronave.testes = [];
  aeronave.testes.push(teste);

  console.log(`Teste associado à aeronave '${aeronave.modelo}'.`);
}