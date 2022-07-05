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

/*
    CONTINUAÇÃO DA AULA 8 - Variáveis

    O JS é uma linguagem fracamente tipada e dinâmica.
    - Variáveis não precisam ter um tipo previamente definido;
    - Podemos mudar o conteúdo da variável;
*/

// A variável não precisa ser tipada na declaração. Isso é feito pelo JS ao atribuirmos um valor.
//var clima; // undifined
let vento = 'forte'; // Variável é dinâmica e pode ter seu valor e tipos alterados durante a aplicação. Isso não se aplica a todos so tipos de dados.
vento = true; // Tipo String -- typeOf clima
console.log(typeof vento)

// const - Não pode ser alterada
const chuva = 'forte'; // Tipo String -- Não pode ser alterada
console.log(typeof chuva)

/*
    Aplicação de scope e block statement
    * O bloco cria um novo escopo dentro do código: chamado de `block-scoped`
*/

// Exemplo com var -- var é global e também local
console.log('imprime x antes de declarar e atribuir', x)
// no caso acima o JS executa o hoisting que instacia a variável na execução do código sem atribuir valor. Isso retorna um valor undefined
{
    var x = 0; // mesmo dentro do escopo o var é global e por isso o JS faz o hoisting
}
// Neste segundo caso imprime o valor atribuido localmente no escopo. 
console.log('Imprime x após o após a declaração e atribuição', x)

/*
    const e let são locais e só funcionam no escopo onde foram criadas
*/
console.log('Imprime erro, pois não existe a variável fora do escopo', y)

{
    let y = 0; // a const está dentro do bloco e não acontece o hoisting
}

console.log('Imprime novamente o erro, pois o y não tem referência com o escopo local')

/*
    Agrupamento de declarações
*/

var nome, age, isHuman // podemos instanciar varias variáveis agrupadas
nome = 'daniel'
age = 46
isHuman = true

// Interpolação de valores com template literals o utemplate string

console.log(`O ${nome} tem ${age} anos.`)