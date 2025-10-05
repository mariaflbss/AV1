import Peca, { TipoPeca, StatusPeca } from "../classes/pecas";
import { pergunta } from "../entrada";  

export async function cadastrarPeca(pecas: Peca[]): Promise<void> {
  console.log("\n=== Cadastro de Peça ===");
  const nome = await pergunta("Nome da peça: ");

  console.log("Tipo da peça:");
  console.log("1 - NACIONAL");
  console.log("2 - IMPORTADA");
  const tipoInput = await pergunta("Escolha: ");
  let tipo: TipoPeca;
  switch (tipoInput) {
    case "1":
      tipo = TipoPeca.NACIONAL;
      break;
    case "2":
      tipo = TipoPeca.IMPORTADA;
      break;
    default:
      console.log("Tipo inválido, usando NACIONAL como padrão.");
      tipo = TipoPeca.NACIONAL;
  }

  const fornecedor = await pergunta("Fornecedor: ");

  console.log("Status da peça:");
  console.log("1 - EM_PRODUCAO");
  console.log("2 - EM_TRANSPORTE");
  console.log("3 - INSTALADA");
  const statusInput = await pergunta("Escolha: ");
  let status: StatusPeca;
  switch (statusInput) {
    case "1":
      status = StatusPeca.EM_PRODUCAO;
      break;
    case "2":
      status = StatusPeca.EM_TRANSPORTE;
      break;
    case "3":
      status = StatusPeca.INSTALADA;
      break;
    default:
      console.log("Status inválido, usando EM_PRODUCAO como padrão.");
      status = StatusPeca.EM_PRODUCAO;
  }

  const novaPeca = new Peca(nome, tipo, fornecedor, status);
  pecas.push(novaPeca);
  console.log("Peça cadastrada com sucesso!\n");
}

export async function atualizarStatusPeca(pecas: Peca[]): Promise<void> {
  console.log("\n=== Atualizar Status da Peça ===");
  if (pecas.length === 0) {
    console.log("Nenhuma peça cadastrada.");
    return;
  }

  pecas.forEach((p, i) => {
    console.log(`${i + 1} - ${p.nome} (Status: ${p.status})`);
  });

  const escolhaInput = await pergunta("Escolha o número da peça para atualizar: ");
  const escolha = parseInt(escolhaInput);

  if (isNaN(escolha) || escolha < 1 || escolha > pecas.length) {
    console.log("Escolha inválida.");
    return;
  }

  const pecaSelecionada = pecas[escolha - 1];

  console.log("Novo status:");
  console.log("1 - EM_PRODUCAO");
  console.log("2 - EM_TRANSPORTE");
  console.log("3 - INSTALADA");
  const statusInput = await pergunta("Escolha: ");

  let novoStatus: StatusPeca;
  switch (statusInput) {
    case "1":
      novoStatus = StatusPeca.EM_PRODUCAO;
      break;
    case "2":
      novoStatus = StatusPeca.EM_TRANSPORTE;
      break;
    case "3":
      novoStatus = StatusPeca.INSTALADA;
      break;
    default:
      console.log("Status inválido. Operação cancelada.");
      return;
  }

  pecaSelecionada.status = novoStatus;
  console.log(`Status da peça '${pecaSelecionada.nome}' atualizado para ${novoStatus}.`);
}