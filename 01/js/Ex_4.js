//Escopo

//Escopo Global
//Escopo de Bloco
//Escopo de Função

// const x = "variavel global"

//escopo de bloco
// if (x){
//     console.log("X é ", x);
// }

// const funcao = (x) => console.log("X é ", x)
// funcao(x)

// const result = (valor1,valor2) => valor1 + valor2

// console.log(result(3,3))

//-------------------------------------


//Tipos de For 

// const notasFinais= [
//     {nome: "Beatriz", nota:5},
//     {nome: "Matheus", nota:7},
//     {nome: "Ana", nota:10},
//     {nome: "Julius", nota:5}
// ]

// for(let i=0; i<notasFinais.length; i++){
//     if (notasFinais[i].nota>=6){
//         console.log(`O aluno ${notasFinais[i].nome} esta aprovado! com nota ${notasFinais[i].nota}`)
//     }else{
//         console.log(`O aluno ${notasFinais[i].nome} esta Reprovado! com nota ${notasFinais[i].nota}`)

//     }
// }

// For Of --------------------------------------------------

// for (let aluno of notasFinais){
// if (aluno.nota>=6){
//     console.log(`O aluno ${aluno.nome} esta aprovado! com nota ${aluno.nota}`)
// }else{
//     console.log(`O aluno ${aluno.nome} esta Reprovado! com nota ${aluno.nota}`)
// }
// }
//-------------------------------------

//ForEach 

// notasFinais.forEach((aluno) => {
//     if (aluno.nota>=6){
//         console.log(`O aluno ${aluno.nome} esta aprovado! com nota ${aluno.nota}`)
//     }else{
//         console.log(`O aluno ${aluno.nome} esta Reprovado! com nota ${aluno.nota}`)
//     }
// });
//-------------------------------------

//Map = altera com condição 

// const distanciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

// const distanciaEmKM = distanciaEmMetros.map(distancia => distancia / 1000);
// console.log(distanciaEmKM);
//-------------------------------------

//Filter = filtra com condição 

// const itensfiltrados = distanciaEmMetros.filter(distancia => distancia > 2000);

// const itensfiltrados = distanciaEmMetros.filter(distancia => {
//     if (distancia > 2000) return distancia;
// });

// console.log("Itens Filtrados:", itensfiltrados);
//-------------------------------------

//Reduce = Soma todos os carecteres 

// console.log(distanciaEmMetros)

// // distanciaEmMetros.reduce((iterador, distancia ) =>{
// //     return iterador + distancia
// // })
// const divição = (distaciaSomada) => distaciaSomada / 1000

// // const distaciaSomada = distanciaEmMetros.reduce((acc, distancia ) => {
// //     return acc + distancia
// // }, 0)

// const distaciaSomada = distanciaEmMetros.reduce((acc, distancia ) => acc + distancia, 0)


// console.log("Todos somadas tem :",distaciaSomada, "Metros" , "e" ,divição(distaciaSomada), "KM")


//-------------------------------------

//Desestruturação | destructuring 

//Desestruturação com lista 

// const casais = [["Mariana", "Helena"], ["Beatriz", "Neto"]]

// const [casal1,casal2] = casais

// const [nome1,nome2] = casal2
// const [nome3,nome4] = casal1

// console.log(casal1)
// console.log(casal2)
// console.log("nome1: ",nome1)
// console.log("nome2: ",nome2)
// console.log("nome3: ",nome3)
// console.log("nome4: ",nome4)

//-------------------------------------
// Desestruturação com objeto 

// const p1 = {
//     nomeCompleto: {
//         nome:"Maria",
//         sobrenome: "Elena"
//     },
//     familia: ["helena","douglas","vicinios"]
// }

// const { nomeCompleto: {nome: primeiroNome, sobrenome: segundoNome}, familia } = p1

// console.log(primeiroNome,segundoNome)

// -------------------------------------

//Spread operators em arrays 

// const listaNeto = ["luiz","junior","fabio"]

// const listaMaeNeto = [ listaNeto[0],listaNeto[1],listaNeto[2], "douglas","tadeu"]
// console.log(listaMaeNeto)

// const listaMaeNeto = [...listaNeto , "Douglas","Tadeu"]
// console.log(listaMaeNeto)
//------------------------------------- 

//Falsy Truthy

//Falsy = 0, "", undefined, null, NaN valores que são considerados falsos 

//Truthy = valores que quando convertidos para boolean sao true | valores que são verdadeiros se não são Falsy

const nomes = ['maria','baria','','taria']
console.log ("nomes: ", nomes)
//                                            | esta verificando se exeste um valor, se for verdadeiro então é retornado
//                                            V
const nomesFiltrados = nomes.filter((nome)=> nome);
console.log("nomesFiltrados: ",nomesFiltrados)

