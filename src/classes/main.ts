import { cadastrarAeronave } from "../servicos/aeronavesservicos";
import { cadastrarPeca, atualizarStatusPeca } from "../servicos/pecassevicos";
import EtapaService from "../servicos/etapaservico";
import { TesteService } from "../servicos/testesservicos";
import { FuncionarioService, menuLogin } from "../servicos/funcionarioservicos";
import { pergunta, rl } from "../entrada"; 
import { associarEtapaAeronave } from "../servicos/associaretapaaeronave";
import { associarFuncionarioEtapa } from "../servicos/associarfuncionarioetapa";
import { associarTesteAeronave } from "../servicos/associartesteaeronave";

const funcionarios: any[] = [];
const funcionarioService = new FuncionarioService(funcionarios);
const aeronaves: any[] = [];
const pecas: any[] = [];
const etapas: any[] = [];
const testes: any[] = [];

const aeronaveService = { cadastrarAeronave };
const pecaService = { cadastrarPeca, atualizarStatusPeca };
const etapaService = new EtapaService(etapas);
const testeService = new TesteService();

async function menuPrincipal(): Promise<void> {
  while (true) {
    console.log("\n=== Menu Principal ===");
    console.log("1 - Login");
    console.log("2 - Criar novo funcionário");
    console.log("3 - Cadastro de aeronaves");
    console.log("4 - Cadastro de peças");
    console.log("5 - Atualizar status das peças");
    console.log("6 - Cadastro de etapas de produção");
    console.log("7 - Associação de etapas a aeronaves");
    console.log("8 - Associação de funcionários às etapas");
    console.log("9 - Execução de testes");
    console.log("10 - Associação de testes às aeronaves");
    console.log("11 - Sair");

    const opcao = await pergunta("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        await menuLogin(funcionarios);
        break;
      case "2":
        await funcionarioService.criarFuncionario();
        break;
      case "3":
        await aeronaveService.cadastrarAeronave(aeronaves);
        break;
      case "4":
        await pecaService.cadastrarPeca(pecas);
        break;
      case "5":
        await pecaService.atualizarStatusPeca(pecas);
        break;
      case "6":
        const nome = await pergunta("Nome da etapa: ");
        const prazo = await pergunta("Prazo da etapa: ");
        etapaService.cadastrarEtapa(nome, prazo);
        console.log("Etapa cadastrada com sucesso!");
        break;
      case "7":
      await associarEtapaAeronave(aeronaves, etapas);
        break;
      case "8":
        await associarFuncionarioEtapa(funcionarios, etapas);
       break;
      case "10":
        await associarTesteAeronave(aeronaves, testes);
      break;
      case "11":
        console.log("Saindo...");
        rl.close();
        process.exit(0);
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}

menuPrincipal();