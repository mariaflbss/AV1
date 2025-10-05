import * as fs from "fs/promises";
import Etapa from "../classes/etapa"; // 
import Teste from "../classes/testes"; 
import Aeronave from "../classes/aeronaves";

export class RelatorioService {
  static async gerarRelatorio(
    aeronave: Aeronave,
    cliente: string,
    dataEntrega: Date,
    etapas: Etapa[],
    testes: Teste[]
  ) {
    let texto = `
Relatório da Aeronave
----------------------
Código: ${aeronave.codigo}
Modelo: ${aeronave.modelo}
Tipo: ${aeronave.tipo}
Capacidade: ${aeronave.capacidade}
Alcance: ${aeronave.alcance}

Cliente: ${cliente}
Data de Entrega: ${dataEntrega.toLocaleDateString()}

== Etapas Realizadas ==
`;

    if (etapas.length === 0) {
      texto += "Nenhuma etapa realizada.\n";
    } else {
      etapas.forEach((e) => {
        texto += `- Etapa: ${e.nome}, Prazo: ${e.prazo}, Status: ${e.status}\n`;
        const funcionarios = e.listarFuncionarios().map((f) => f.nome).join(", ") || "Nenhum";
        texto += `  Funcionários: ${funcionarios}\n`;
      });
    }

    texto += `\n== Resultados dos Testes ==\n`;
    if (testes.length === 0) {
      texto += "Nenhum teste executado.\n";
    } else {
      testes.forEach((t) => {
        texto += `- Tipo: ${t.tipo}, Resultado: ${t.resultado}\n`;
      });
    }

    try {
      const caminho = `relatorio_${aeronave.codigo}.txt`;
      await fs.writeFile(caminho, texto);
      console.log(`Relatório gerado com sucesso: ${caminho}`);
    } catch (error) {
      console.log("Erro ao gerar relatório:", error);
    }
  }
}