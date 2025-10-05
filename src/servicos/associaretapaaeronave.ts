import { pergunta } from "../entrada";
import Aeronave from "../classes/aeronaves";
import Etapa from "../classes/etapa";

export async function associarEtapaAeronave(aeronaves: Aeronave[], etapas: Etapa[]) {
  if (aeronaves.length === 0 || etapas.length === 0) {
    console.log("Aeronaves ou etapas não disponíveis.");
    return;
  }

  console.log("\n=== Associar Etapa à Aeronave ===");
  aeronaves.forEach((a, i) => {
    console.log(`${i + 1}. ${a.modelo} (${a.codigo})`);
  });
  const escolhaAeronave = parseInt(await pergunta("Escolha o número da aeronave: ")) - 1;
  const aeronave = aeronaves[escolhaAeronave];

  etapas.forEach((e, i) => {
    console.log(`${i + 1}. ${e.nome} (Prazo: ${e.prazo})`);
  });
  const escolhaEtapa = parseInt(await pergunta("Escolha o número da etapa: ")) - 1;
  const etapa = etapas[escolhaEtapa];

  if (!aeronave.etapas) aeronave.etapas = [];
  aeronave.etapas.push(etapa);

  console.log(`Etapa '${etapa.nome}' associada à aeronave '${aeronave.modelo}'.`);
}