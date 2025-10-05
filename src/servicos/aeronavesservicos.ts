import Aeronave, { TipoAeronave } from "../classes/aeronaves";
import { pergunta } from "../entrada";  

export async function cadastrarAeronave(aeronaves: Aeronave[]): Promise<void> {
  const codigo = await pergunta("Código da aeronave: ");
  const modelo = await pergunta("Modelo: ");
  const tipoStr = await pergunta("Tipo (COMERCIAL / MILITAR): ");
  const capacidade = parseInt(await pergunta("Capacidade: "));
  const alcance = parseInt(await pergunta("Alcance: "));

  const tipo = tipoStr.toUpperCase() === "MILITAR" ? TipoAeronave.MILITAR : TipoAeronave.COMERCIAL;

  const novaAeronave = new Aeronave(codigo, modelo, tipo, capacidade, alcance);
  aeronaves.push(novaAeronave);

  console.log("Aeronave cadastrada com sucesso!");
}