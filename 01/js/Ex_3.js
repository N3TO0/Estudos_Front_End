// // Condicional if else

// const idade = 16;
// const maioridade = 18;

// if(idade >=18 && idade > 0){
// console.log(`Neto pode dirigir ? Neto pode dirigir! `);
// }
// else if(idade <=18 && idade > 0){
// console.log(`Neto pode dirigir ? Neto não pode dirigir!`);
// console.log(`faltam ${0-(idade-18)} anos, para poder dirigir`);
// }
// else{
// console.log("idade precisa ser maior que 0 !!");
// }
// console.log("---------------------------")

// // Operadores ternarios

// idade >= maioridade
// ? console.log("Neto pode dirigir")
// : console.log("Neto NÃO pode dirigir")

// console.log("---------------------------")

// // switch case

// const dia_da_semana = 4;
// let nome_do_dia = undefined;

// switch (dia_da_semana) {
// case 1:
// nome_do_dia = 'domingo';
// break;
// case 2:
// nome_do_dia = 'segunda';
// break;
// case 3:
// nome_do_dia = 'terça';
// break;
// case 4:
// nome_do_dia = 'quarta';
// break;
// case 5:
// nome_do_dia = 'quinta';
// break;
// case 6:
// nome_do_dia = 'sexta';
// break;
// case 7:
// nome_do_dia = 'sabado';
// break;
// }

// console.log(nome_do_dia);

let lista = ["neto", "luis", "joão", 22, 34, true, null, undefined]

console.log(lista[1])
lista[1] = 2

console.log(lista[1])
lista = ['a', 'q', 'w', 'z', 't']

console.log(lista[4])
console.log(lista.length) // informa quantos indices tem a lista 
