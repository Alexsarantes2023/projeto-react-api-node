"use strict";
console.log("Rodando Javascript no backEnd");
const nota = 10;
console.log("O valor da nota é", nota);
const aluno = {
    nome: "Jose",
    idade: 17,
    aprovado: true,
    nota: 10,
};
const aluno2 = {
    nome: "Maria",
    idade: 17,
    aprovado: true,
    nota: 10,
};
const alunos = [aluno, aluno2];
function cadastrarAluno(aluno, nota) {
    console.log(aluno, " Sua nota é: ", nota);
}
;
cadastrarAluno(aluno, 9);
