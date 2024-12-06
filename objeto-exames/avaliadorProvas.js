export class AvaliadorProvas {
    constructor(gabarito, nota) {
        this.gabarito = gabarito;
        this.nota = nota;
        this.resultados = [];
    }

    registrarProva(aluno) {
        let pontuacao = 0;
        for (const questao in aluno.respostas) {
            if (aluno.respostas[questao] === this.gabarito[questao]) {
                pontuacao += this.nota[questao];
            }
        }
        // adicionando nota ao objeto aluno
        aluno.nota = pontuacao;
        this.resultados.push(aluno);
    }

    calcularMedia() {
        let totalNotas = 0;
        for (let i = 0; i < this.resultados.length; i++) {
            totalNotas += this.resultados[i].nota;
        }
        let media = totalNotas / this.resultados.length;
        return media.toFixed(2);
    }

    encontrarNotaMinima() {
        let menorNota = this.resultados[0].nota;
        for (let i = 0; i < this.resultados.length; i++) {
            if (this.resultados[i].nota < menorNota) {
                menorNota = this.resultados[i].nota;
            }
        }
        return menorNota;
    }

    encontrarNotaMaxima() {
        let maiorNota = this.resultados[0].nota;
        for (let i = 0; i < this.resultados.length; i++) {
            if (this.resultados[i].nota > maiorNota) {
                maiorNota = this.resultados[i].nota;
            }
        }
        return maiorNota;
    }

    NotasAcima(limite) {
        let acima = [];
        for (let i = 0; i < this.resultados.length; i++) {
            if (this.resultados[i].nota > limite) {
                acima.push(this.resultados[i]);
            }
        }
        return acima;
    }

    NotasAbaixo(limite) {
        let abaixo = [];
        for (let i = 0; i < this.resultados.length; i++) {
            if (this.resultados[i].nota < limite) {
                abaixo.push(this.resultados[i]);
            }
        }
        return abaixo;
    }
}