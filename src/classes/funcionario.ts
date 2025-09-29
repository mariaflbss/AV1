export enum NivelPermissao {
  ADMINISTRADOR = "ADMINISTRADOR",
  ENGENHEIRO = "ENGENHEIRO",
  OPERADOR = "OPERADOR",
}

export default class Funcionario {
  public id: string;
  public nome: string;
  public telefone: string;
  public endereco: string;
  public usuario: string;
  private senha: string; 
  public nivelPermissao: NivelPermissao;

  constructor(
    id: string,
    nome: string,
    telefone: string,
    endereco: string,
    usuario: string,
    senha: string,
    nivelPermissao: NivelPermissao
  ) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
    this.usuario = usuario;
    this.senha = senha;
    this.nivelPermissao = nivelPermissao;
  }

  // Getters
  get getId(): string {
    return this.id;
  }
  get getNome(): string {
    return this.nome;
  }
  get getTelefone(): string {
    return this.telefone;
  }
  get getEndereco(): string {
    return this.endereco;
  }
  get getUsuario(): string {
    return this.usuario;
  }
  get getNivelPermissao(): NivelPermissao {
    return this.nivelPermissao;
  }

  // Autenticação 
  public autenticar(usuario: string, senha: string): boolean {
    return this.usuario === usuario && this.senha === senha;
  }

  public salvar(): string {
    const obj = {
      id: this.id,
      nome: this.nome,
      telefone: this.telefone,
      endereco: this.endereco,
      usuario: this.usuario,
      senha: this.senha,
      nivelPermissao: this.nivelPermissao,
    };
    return JSON.stringify(obj);
  }

  public carregar(linha: string): void {
    try {
      const obj = JSON.parse(linha);
      this.id = obj.id;
      this.nome = obj.nome;
      this.telefone = obj.telefone;
      this.endereco = obj.endereco;
      this.usuario = obj.usuario;
      this.senha = obj.senha;
      this.nivelPermissao = obj.nivelPermissao;
    } catch (err) {
      console.error("Falha ao carregar Funcionário:", err);
    }
  }
}
