//Como alterar o conteudo

//div
const buttonContainer = document.querySelector(".container");

// Acrescenta Novo Botão
// buttonContainer.innerHTML += '<button>Novo Botão</button>';

// Altera o Selecionado
// buttonContainer.innerHTML = '<button>Novo botão</button>';

// Selecionando e Definindo Variavel
// const firstTitle = document.querySelector('h1');
// Usando variavel definida e alterando valor
// firstTitle.innerText = 'novo titulo'

// ALTERANDO ESTILO DA DIV
buttonContainer.style.backgroundColor = 'blue';

//-------------------------------------------------------


// ALTERANDO ATRIBUTO DAS TAGS

// Definindo variavel e elemento
const lestTitle = document.getElementById('title4');

// Setando um novo valor do title4 por um valor já existente
title4.setAttribute('id', 'customTitle')

//                                          defina qual h2 ser alterado
const tercerioTitulo = document.querySelector('h2:nth-of-type(3)');

//Setando um novo valor do title4 por um valor já existente
tercerioTitulo.setAttribute('id', 'orangeTitle');

// removendo elemento ID
lestTitle.removeAttribute('id');

//-------------------------------------------------------


// ADICIONANDO E REMOVENDO ELEMENTO NA TELA

//variavel com metodo de criar elemento ( h3 criado)
const newLastTitle = document.createElement('h3');

//colocando valor no elemento criado
newLastTitle.innerText = 'Olá Mundo';

//Colocando elemento no body
document.body.appendChild(newLastTitle);

//-------------------------------------------------------

// definindo variavel com metodo de criar  um (butão)
const newButton = document.createElement('button');

// definindo texto dento do butão
newButton.innerText = 'novo botão'

// colocando texto dentro da div
buttonContainer.appendChild(newButton);



