class NoArvoreSufixo {
  constructor() {
    this.filhos = {};
    this.indices = [];
  }
}

class ArvoreSufixo {
  constructor() {
    this.raiz = new NoArvoreSufixo();
  }

  inserirSufixos(texto) {
    for (let i = 0; i < texto.length; i++) {
      this.inserirSufixo(texto.substring(i), i);
    }
  }

  // Banana -- Banana
  // Banana -- anana
  // Banana -- nana
  // Banana -- ana
  // Banana -- na
  // Banana -- a

  inserirSufixo(sufixo, indice) {
    let no = this.raiz;
    for (let i = 0; i < sufixo.length; i++) {
      const caractere = sufixo[i];
      if (!no.filhos[caractere]) {
        no.filhos[caractere] = new NoArvoreSufixo();
      }
      no = no.filhos[caractere];
      no.indices.push(indice);
    }
  }

  //Banana -- an -> Padrão para ocorrencias

  encontrarOcorrenciasDoPadrao(padrao) {
    let no = this.raiz;
    for (let i = 0; i < padrao.length; i++) {
      const caractere = padrao[i];
      if (!no.filhos[caractere]) {
        return []; // Padrão não encontrado
      }
      no = no.filhos[caractere];
    }
    return no.indices;
  }
}

// Exemplo de Uso
const arvore = new ArvoreSufixo();
const texto = "ana banana cangola";
arvore.inserirSufixos(texto);

const padrao = "an";
const ocorrencias = arvore.encontrarOcorrenciasDoPadrao(padrao);
console.log(`Ocorrências de '${padrao}' em '${texto}':`, ocorrencias);
