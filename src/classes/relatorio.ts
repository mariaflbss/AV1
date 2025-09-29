import Aeronave from "./aeronaves";
import Peca from "./pecas";
import Etapa from "./etapa";
import Teste from "./testes";

export default class Relatorio {
  public gerarRelatorio(
    aeronave: Aeronave,
    pecas: Peca[],
    etapas: Etapa[],
    testes: Teste[],
    cliente: string,
    dataEntrega: string
  ): string {
    let texto = `Relatório da Aeronave ${aeronave.getCodigo}\n`;
    texto += `Cliente: ${cliente}\n`;
    texto += `Data de Entrega: ${dataEntrega}\n\n`;

    texto += `== Dados da Aeronave ==\n`;
    texto += `Modelo: ${aeronave.getModelo}\n`;
    texto += `Tipo: ${aeronave.getTipo}\n`;
    texto += `Capacidade: ${aeronave.getCapacidade}\n`;
    texto += `Alcance: ${aeronave.getAlcance}\n\n`;

    texto += `== Peças Utilizadas ==\n`;
    for (const p of pecas) {
      texto += `- Nome: ${p.getNome}, Tipo: ${p.getTipo}, Status: ${p.getStatus}\n`;
    }
    texto += `\n== Etapas Realizadas ==\n`;
    for (const e of etapas) {
      texto += `- Etapa: ${e.getNome}, Status: ${e.getStatus}\n`;
      texto += `  Funcionários: ${e
        .listarFuncionarios()
        .map((f) => f.getNome)
        .join(", ")}\n`;
    }
    texto += `\n== Resultados dos Testes ==\n`;
    for (const t of testes) {
      texto += `- Tipo: ${t.getTipo}, Resultado: ${t.getResultado}\n`;
    }

    return texto;
  }

  public salvarEmArquivo(conteudo: string, caminho: string): void {
    console.log(`Salvar relatório em ${caminho}:\n${conteudo}`);
  }
}
