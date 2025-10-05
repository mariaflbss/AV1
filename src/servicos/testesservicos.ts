import { pergunta } from "../entrada";

export class TesteService {
  async executarTeste(): Promise<void> {
    const resultado = await pergunta("Digite o resultado do teste: ");
    console.log(`Resultado do teste: ${resultado}`);
  }
}