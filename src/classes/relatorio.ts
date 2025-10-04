import Aeronave from "./aeronaves";
import Peca from "./pecas";
import Etapa from "./etapa";
import Teste from "./testes";
import * as fs from "fs";

export default class Relatorio {
  public gerarRelatorio(
    aeronave: Aeronave,
    pecas: Peca[],
    etapas: Etapa[],
    testes: Teste[],
    cliente: string,
    dataEntrega: string
  ): string {
    let texto = `Relatório da Aeronave ${aeronave.codigo}\n`;
    texto += `Cliente: ${cliente}\n`;
    texto += `Data de Entrega: ${dataEntrega}\n\n`;

    texto += `== Dados da Aeronave ==\n`;
    texto += `Código: ${aeronave.codigo}\n`;
    texto += `Modelo: ${aeronave.modelo}\n`;
    texto += `Tipo: ${aeronave.tipo}\n`;
    texto += `Capacidade: ${aeronave.capacidade}\n`;
    texto += `Alcance: ${aeronave.alcance}\n\n`;

    texto += `== Peças Utilizadas ==\n`;
    pecas.forEach((p) => {
      texto += `- Nome: ${p.nome}, Tipo: ${p.tipo}, Fornecedor: ${p.fornecedor}, Status: ${p.status}\n`;
    });

    texto += `\n== Etapas Realizadas ==\n`;
    etapas.forEach((e) => {
      texto += `- Etapa: ${e.nome}, Prazo: ${e.prazo}, Status: ${e.status}\n`;
      texto += `  Funcionários: ${e.listarFuncionarios().map(f => f.nome).join(", ") || "Nenhum"}\n`;
    });

    texto += `\n== Resultados dos Testes ==\n`;
    testes.forEach((t) => {
      texto += `- Tipo: ${t.tipo}, Resultado: ${t.resultado}\n`;
    });

    return texto;
  }

  public salvarEmArquivo(conteudo: string, caminho: string): void {
    try {
      fs.writeFileSync(caminho, conteudo, { encoding: "utf-8" });
      console.log(`Relatório salvo com sucesso em: ${caminho}`);
    } catch (error) {
      console.error("Erro ao salvar o relatório:", error);
    }
  }
}