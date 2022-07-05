// 1. Declare uma variável de nome weight
// let weight;

// 2. Que tipo de dado é a variável acima?
// console.log(typeof weight)

/*
   3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer) 
        * stars: Number (float)
        * isSubscribed: Boolean
*/
/*let name, age, stars, isSubscribed;
name = "Daniel"
age = 46
weight = 88.1
isSubscribed = true*/

/*
    4. A variável sudent abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/

/*let student = {
    name: "Daniel", 
    age: 33, 
    weight: 88.1
};*/

//console.log(typeof student)
//console.log(`${student.name} de idade ${student.age}, pesa ${student.weight} kg.`);

/*
    5. Declare uma variável tipo Array de nome students e atribua a ela nenhum valor, ou seja, um Array vazio.
*/
//let students = [];
/*
    6. Reatribua um valor a variável acima, colocando dentro dela o objeto student da questçao 4. (nâo copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array.)
*/
/*students = [
    student
]*/
//console.log(students)

/*
    7. Coloque no console o valor da posição 0 do Array acima:
*/
//console.log(students[0])

/*
    7. Crie um novo student e coloque ele na posição 1 do Array students:
*/
/*
const john = {
    name: "John",
    age: 23,
    weight: 74.2,
    isSubscribed: true
}

students = [
    student,
    john
]
console.log(students)*/


//9. Sem rodar o código, qual a resposta do código abaixo e porque? Após sua resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1;

//Resposta: A resposta será 'undefined', pois o valor da variável a foi atribuída após a função, porém a variável foi declarada atraves do hoisting.

console.log(a);
var a = 1;