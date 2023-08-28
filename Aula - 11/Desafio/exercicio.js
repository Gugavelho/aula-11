/*
*joao arthur 
*
*/

// 1.b =10; a =10 b=5

//2. a=10; b=10; c=10

//3.nome melhor para p é= horas trabalhadas; nome melhor para t é=diaria ganha 


//exercicio de escrita de codigo 

/* let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);
// nao atribui o valor
mome = prompt("qual é o seu nome");
idade = prompt("qual é a sua idade");
console.log(typeof nome);
console.log(typeof idade);
console.log("Olá", nome,"voce tem", idade, "anos");

//2
nome = prompt("você esta usando uma roupa azul hoje ?");
idade = prompt("você esta usando uma roupa amarela hoje ?");

let a = 10
let b = 25
// Aqui faremos uma lógica para trocar os valores
c=a;
a=b;
b=c;

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)  */


let nome = prompt("qual seu nome");
let anoNascimento = prompt ("qual o ano do seu nascimento");
let anoAtual = prompt("ano atual");

console.log("nome:". nome);
console.log("idade:", (anoAtual -anoNascimento));
console.log("É maior de idade?", ((anoAtual -anoNascimento)>=18));
console.log("idade em 2050:", ((2050-anoNascimento)));
