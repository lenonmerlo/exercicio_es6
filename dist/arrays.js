"use strict";

// Array de objetos com nome e nota dos alunos
var alunos = [{
  nome: 'João',
  nota: 8
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 7
}, {
  nome: 'Ana',
  nota: 6
}, {
  nome: 'Lucas',
  nota: 4
}];

// Função que retorna os alunos com nota maior ou igual a 6
var filtraAprovados = function filtraAprovados(listaAlunos) {
  return listaAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};

// Testando a função
var alunosAprovados = filtraAprovados(alunos);
console.log(alunosAprovados);