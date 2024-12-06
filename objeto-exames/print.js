import { AvaliadorProvas } from "./avaliadorProvas.js";

const alunos = [
    {
        nome: "Clara",
        respostas: {
            q1: "a",
            q2: "b",
            q3: "c",
            q4: "d",
            q5: "e",
        },
    },
    {
        nome: "Mari",
        respostas: {
            q1: "b",
            q2: "a",
            q3: "d",
            q4: "c",
            q5: "e",
        },
    },
    {
        nome: "Arthur",
        respostas: {
            q1: "c",
            q2: "d",
            q3: "a",
            q4: "e",
            q5: "b",
        },
    },
];

const gabarito = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "d",
    q5: "e",
};

const pesos = {
    q1: 1,
    q2: 1,
    q3: 2,
    q4: 1,
    q5: 4,
};

const avaliadorProvas = new AvaliadorProvas(gabarito, pesos);

for (const aluno of alunos) {
    avaliadorProvas.registrarProva(aluno);
}

console.log("Média: ");
console.log(avaliadorProvas.calcularMedia());
console.log("Nota mínima: ");
console.log(avaliadorProvas.encontrarNotaMinima());
console.log("Nota máxima: ");
console.log(avaliadorProvas.encontrarNotaMaxima());
console.log("Notas acima de 5: ");
console.log(avaliadorProvas.listarNotasAcima(5));
console.log("Notas abaixo de 5: ");
console.log(avaliadorProvas.listarNotasAbaixo(5));
