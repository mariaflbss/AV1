"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aeronaves_1 = __importStar(require("./aeronaves"));
var pecas_1 = __importStar(require("./pecas"));
var funcionario_1 = __importStar(require("./funcionario"));
var etapa_1 = __importDefault(require("./etapa"));
var testes_1 = __importStar(require("./testes"));
var relatorio_1 = __importDefault(require("./relatorio"));
var aeronave1 = new aeronaves_1.default("A1", "ModeloX", aeronaves_1.TipoAeronave.COMERCIAL, 200, 1000);
var p1 = new pecas_1.default("Motor", pecas_1.TipoPeca.NACIONAL, "Fornecedor1", pecas_1.StatusPeca.EM_PRODUCAO);
var p2 = new pecas_1.default("Asa", pecas_1.TipoPeca.IMPORTADA, "Fornecedor2", pecas_1.StatusPeca.EM_TRANSPORTE);
var f1 = new funcionario_1.default("F1", "Ana", "1234", "Rua A", "anaUser", "senha123", funcionario_1.NivelPermissao.ENGENHEIRO);
var f2 = new funcionario_1.default("F2", "Bruno", "5678", "Rua B", "brunoUser", "senha456", funcionario_1.NivelPermissao.OPERADOR);
var e1 = new etapa_1.default("Montagem do Motor", "2025-10-01");
var e2 = new etapa_1.default("Instalação das Asas", "2025-10-05");
e1.associarFuncionario(f1);
e2.associarFuncionario(f2);
e1.iniciar();
e1.finalizar();
var t1 = new testes_1.default(testes_1.TipoTeste.ELETRICO, testes_1.ResultadoTeste.APROVADO);
var t2 = new testes_1.default(testes_1.TipoTeste.HIDRAULICO, testes_1.ResultadoTeste.REPROVADO);
var rel = new relatorio_1.default();
var textoRel = rel.gerarRelatorio(aeronave1, [p1, p2], [e1, e2], [t1, t2], "ClienteXYZ", "2025-12-01");
rel.salvarEmArquivo(textoRel, "./relatorio_A1.txt");
aeronave1.detalhes();
