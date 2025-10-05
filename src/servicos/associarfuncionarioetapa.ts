import { pergunta } from "../entrada";
import Funcionario from "../classes/funcionario";
import Etapa from "../classes/etapa";

export async function associarFuncionarioEtapa(funcionarios: Funcionario[], etapas: Etapa[]) {
  if (funcionarios.length === 0 || etapas.length === 0) {
    console.log("Funcionários ou etapas não disponíveis.");
    return;
  }

  console.log("\n=== Associar Funcionário à Etapa ===");
  funcionarios.forEach((f, i) => {
    console.log(`${i + 1}. ${f.nome}`);
  });
  const idxFunc = parseInt(await pergunta("Escolha o número do funcionário: ")) - 1;
  const funcionario = funcionarios[idxFunc];

  etapas.forEach((e, i) => {
    console.log(`${i + 1}. ${e.nome}`);
  });
  const idxEtapa = parseInt(await pergunta("Escolha o número da etapa: ")) - 1;
  const etapa = etapas[idxEtapa];

  if (!etapa.funcionarios) etapa.funcionarios = [];
  etapa.funcionarios.push(funcionario);

  console.log(`Funcionário '${funcionario.nome}' associado à etapa '${etapa.nome}'.`);
}