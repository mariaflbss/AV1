import Funcionario, { NivelPermissao } from "../classes/funcionario";
import { pergunta } from "../entrada";  

export class FuncionarioService {
  private funcionarios: Funcionario[];

  constructor(funcionarios: Funcionario[]) {
    this.funcionarios = funcionarios;
  }

  autenticarUsuario(usuario: string, senha: string): Funcionario | null {
    for (const funcionario of this.funcionarios) {
      if (funcionario.autenticar(usuario, senha)) {
        return funcionario;
      }
    }
    return null;
  }

  async criarFuncionario(): Promise<void> {
    const id = `F${this.funcionarios.length + 1}`; 
    const nome = await pergunta("Nome: ");
    const telefone = await pergunta("Telefone: ");
    const endereco = await pergunta("Endereço: ");
    const usuario = await pergunta("Usuário: ");
    const senha = await pergunta("Senha: ");

    console.log("Níveis de permissão:");
    console.log("1 - ADMINISTRADOR");
    console.log("2 - ENGENHEIRO");
    console.log("3 - OPERADOR");
    const nivelInput = await pergunta("Escolha o nível (1-3): ");

    let nivelPermissao: NivelPermissao;
    switch (nivelInput) {
      case "1":
        nivelPermissao = NivelPermissao.ADMINISTRADOR;
        break;
      case "2":
        nivelPermissao = NivelPermissao.ENGENHEIRO;
        break;
      case "3":
        nivelPermissao = NivelPermissao.OPERADOR;
        break;
      default:
        console.log("Nível inválido, usando OPERADOR como padrão.");
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

    this.funcionarios.push(novoFuncionario);
    console.log("Funcionário cadastrado com sucesso!");
  }
}

export async function menuLogin(funcionarios: Funcionario[]): Promise<void> {
  console.log("\n=== Login ===");
  const usuario = await pergunta("Usuário: ");
  const senha = await pergunta("Senha: ");

  const service = new FuncionarioService(funcionarios);
  const funcionario = service.autenticarUsuario(usuario, senha);

  if (funcionario) {
    console.log(`Bem-vindo(a), ${funcionario.nome}!`);
  } else {
    console.log("Usuário ou senha inválidos.");
  }
}