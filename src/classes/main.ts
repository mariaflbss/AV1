import Aeronave, { TipoAeronave } from "./aeronaves";
import Peca, { TipoPeca, StatusPeca } from "./pecas";
import Funcionario, { NivelPermissao } from "./funcionario";
import Etapa, { StatusEtapa } from "./etapa";
import Teste, { TipoTeste, ResultadoTeste } from "./testes";
import Relatorio from "./relatorio";

const aeronave1 = new Aeronave("A1", "ModeloX", TipoAeronave.COMERCIAL, 200, 1000);

const p1 = new Peca("Motor", TipoPeca.NACIONAL, "Fornecedor1", StatusPeca.EM_PRODUCAO);
const p2 = new Peca("Asa", TipoPeca.IMPORTADA, "Fornecedor2", StatusPeca.EM_TRANSPORTE);

const f1 = new Funcionario("F1", "Ana", "1234", "Rua A", "anaUser", "senha123", NivelPermissao.ENGENHEIRO);
const f2 = new Funcionario("F2", "Bruno", "5678", "Rua B", "brunoUser", "senha456", NivelPermissao.OPERADOR);

const e1 = new Etapa("Montagem do Motor", "2025-10-01");
const e2 = new Etapa("Instalação das Asas", "2025-10-05");


e1.associarFuncionario(f1);
e2.associarFuncionario(f2);

e1.iniciar();
e1.finalizar();

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

aeronave1.detalhes();