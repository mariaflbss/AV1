export interface Carregador {
  carregar(linha: string): void
}

export interface Salvador {
  salvar(): void
}

export interface Inicializador {
  iniciar(): void
}

export interface Finalizador {
  finalizar(): void
}

export interface Sistema extends Salvador, Carregador, Inicializador, Finalizador {}
