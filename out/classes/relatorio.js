"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Relatorio = /** @class */ (function () {
    function Relatorio() {
    }
    Relatorio.prototype.gerarRelatorio = function (aeronave, pecas, etapas, testes, cliente, dataEntrega) {
        var texto = "Relat\u00F3rio da Aeronave ".concat(aeronave.getCodigo, "\n");
        texto += "Cliente: ".concat(cliente, "\n");
        texto += "Data de Entrega: ".concat(dataEntrega, "\n\n");
        texto += "== Dados da Aeronave ==\n";
        texto += "Modelo: ".concat(aeronave.getModelo, "\n");
        texto += "Tipo: ".concat(aeronave.getTipo, "\n");
        texto += "Capacidade: ".concat(aeronave.getCapacidade, "\n");
        texto += "Alcance: ".concat(aeronave.getAlcance, "\n\n");
        texto += "== Pe\u00E7as Utilizadas ==\n";
        for (var _i = 0, pecas_1 = pecas; _i < pecas_1.length; _i++) {
            var p = pecas_1[_i];
            texto += "- Nome: ".concat(p.getNome, ", Tipo: ").concat(p.getTipo, ", Status: ").concat(p.getStatus, "\n");
        }
        texto += "\n== Etapas Realizadas ==\n";
        for (var _a = 0, etapas_1 = etapas; _a < etapas_1.length; _a++) {
            var e = etapas_1[_a];
            texto += "- Etapa: ".concat(e.getNome, ", Status: ").concat(e.getStatus, "\n");
            texto += "  Funcion\u00E1rios: ".concat(e
                .listarFuncionarios()
                .map(function (f) { return f.getNome; })
                .join(", "), "\n");
        }
        texto += "\n== Resultados dos Testes ==\n";
        for (var _b = 0, testes_1 = testes; _b < testes_1.length; _b++) {
            var t = testes_1[_b];
            texto += "- Tipo: ".concat(t.getTipo, ", Resultado: ").concat(t.getResultado, "\n");
        }
        return texto;
    };
    Relatorio.prototype.salvarEmArquivo = function (conteudo, caminho) {
        console.log("Salvar relat\u00F3rio em ".concat(caminho, ":\n").concat(conteudo));
    };
    return Relatorio;
}());
exports.default = Relatorio;
