import Aeronave, { TipoAeronave } from "./aeronaves";
import Peca, { TipoPeca, StatusPeca } from "./pecas";
import Funcionario, { NivelPermissao } from "./funcionario";
import Etapa, { StatusEtapa } from "./etapa";
import Teste, { TipoTeste, ResultadoTeste } from "./testes";
import Relatorio from "./relatorio";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pergunta(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

const funcionarios: Funcionario[] = [
  new Funcionario(
    "F1",
    "Maria",
    "1234",
    "Rua A",
    "MariaUser",
    "senha123",
    NivelPermissao.ENGENHEIRO
  ),
  new Funcionario(
    "F2",
    "João",
    "5678",
    "Rua B",
    "JoãoUser",
    "senha456",
    NivelPermissao.OPERADOR
  ),
  new Funcionario(
    "F3",
    "Admin",
    "9999",
    "Rua Admin",
    "admin",
    "admin123",
    NivelPermissao.ADMINISTRADOR
  ),
];

async function criarFuncionario(): Promise<void> {
  console.log("\n=== Criar Novo Funcionário ===");

  const id = `F${funcionarios.length + 1}`;
  const nome = await pergunta("Nome do funcionário: ");
  const telefone = await pergunta("Telefone: ");
  const endereco = await pergunta("Endereço: ");
  const usuario = await pergunta("Usuário: ");
  const senha = await pergunta("Senha: ");

  console.log("Escolha o nível de permissão:");
  console.log("1 - ADMINISTRADOR");
  console.log("2 - ENGENHEIRO");
  console.log("3 - OPERADOR");
  const nivelInput = await pergunta("Nível: ");
  const nivelEscolha = parseInt(nivelInput);

  let nivelPermissao: NivelPermissao;
  switch (nivelEscolha) {
    case 1:
      nivelPermissao = NivelPermissao.ADMINISTRADOR;
      break;
    case 2:
      nivelPermissao = NivelPermissao.ENGENHEIRO;
      break;
    case 3:
      nivelPermissao = NivelPermissao.OPERADOR;
      break;
    default:
      console.log("Nível inválido. Usando OPERADOR como padrão.");
      nivelPermissao = NivelPermissao.OPERADOR;
  }

  const novoFuncionario = new Funcionario(
    id,
    nome,
    telefone,
    endereco,
    usuario,
    senha,
    nivelPermissao
  );
  funcionarios.push(novoFuncionario);
  console.log("Funcionário criado com sucesso!\n");
}

function gerarRelatorioExemplo(): void {
  const aeronave1 = new Aeronave(
    "A1",
    "ModeloX",
    TipoAeronave.COMERCIAL,
    200,
    1000
  );
  const p1 = new Peca("Motor", TipoPeca.NACIONAL, "Fornecedor1", StatusPeca.EM_PRODUCAO);
  const p2 = new Peca("Asa", TipoPeca.IMPORTADA, "Fornecedor2", StatusPeca.EM_TRANSPORTE);

  const e1 = new Etapa("Montagem do Motor", "2025-10-01");
  const e2 = new Etapa("Instalação das Asas", "2025-10-05");

  e1.associarFuncionario(funcionarios[0]);
  e2.associarFuncionario(funcionarios[1]);

  e1.iniciar();
  e1.finalizar();
  e2.iniciar();

  const t1 = new Teste(TipoTeste.ELETRICO, ResultadoTeste.APROVADO);
  const t2 = new Teste(TipoTeste.HIDRAULICO, ResultadoTeste.REPROVADO);

  const rel = new Relatorio();
  const textoRel = rel.gerarRelatorio(
    aeronave1,
    [p1, p2],
    [e1, e2],
    [t1, t2],
    "ClienteXYZ",
    "2025-12-01"
  );

  rel.salvarEmArquivo(textoRel, "./relatorio_A1.txt");
  console.log("Relatório gerado e salvo em './relatorio_A1.txt'");
  aeronave1.detalhes();
}

async function menuLogin(): Promise<void> {
  const usuario = await pergunta("Usuário: ");
  const senha = await pergunta("Senha: ");

  const funcionario = Funcionario.autenticar(usuario, senha, funcionarios);
  if (funcionario) {
    console.log(`Bem-vindo, ${funcionario.nome}!`);
    await menuUsuario(funcionario);
  } else {
    console.log("Usuário ou senha incorretos. Tente novamente.");
  }
}

async function menuUsuario(logado: Funcionario): Promise<void> {
  while (true) {
    console.log("\n=== Menu Usuário ===");
    console.log("1 - Criar novo funcionário");
    console.log("2 - Gerar relatório de aeronave (exemplo)");
    console.log("3 - Sair");

    const opcao = await pergunta("Escolha uma opção: ");

    if (opcao === "1") {
      if (logado.nivelPermissao === NivelPermissao.ADMINISTRADOR) {
        await criarFuncionario();
      } else {
        console.log("Acesso negado. Apenas ADMINISTRADOR pode criar funcionários.");
      }
    } else if (opcao === "2") {
      gerarRelatorioExemplo();
    } else if (opcao === "3") {
      console.log("Deslogando...");
      break;
    } else {
      console.log("Opção inválida.");
    }
  }
}

async function menuPrincipal(): Promise<void> {
  while (true) {
    console.log("\n=== Menu Principal ===");
    console.log("1 - Login");
    console.log("2 - Criar novo funcionário");
    console.log("3 - Sair");

    const opcao = await pergunta("Escolha uma opção: ");

    if (opcao === "1") {
      await menuLogin();
    } else if (opcao === "2") {
      await criarFuncionario();
    } else if (opcao === "3") {
      console.log("Saindo do programa...");
      rl.close();
      process.exit(0);
    } else {
      console.log("Opção inválida.");
    }
  }
}

async function menu(): Promise<void> {
  await menuPrincipal();
}

(async () => {
  await menu();
})();