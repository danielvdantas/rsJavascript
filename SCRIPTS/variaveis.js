// var e let tem comportamentos semelhantes

// Declaração e atribuição da var com reatribuição de valor
var clima = 'Quente';
clima = 'Frio';
console.log(clima);

// Declaração e atribuição da let com reatribuição de valor
let tempo = 'Sol';
tempo = 'Chuva';
console.log(tempo);

/* 
    Declaração e atribuição da const com reatribuição de valor retorna erro, pois a const não pode ser alterada durante a aplicação.
*/
const estacao = 'Verão'; // Atribuição de valor só pode acontecer uma vez na aplicação.
estacao = 'Inverno'; // Não pode ser alterada durante a aplicação
console.log(estacao); // Retorna erro!