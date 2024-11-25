
// Principais eventos de mouse ----------------------------------

//Declarando variavel para metodo de selecionar botão
//  variavel que esta selecioando um botão
// const botão = document.querySelector('button');

//Criando uma arrow function
// const onMouseClick = () => {
//     // altera o texto da variavel selecionada ao clicar
//     botão.innerText = 'Entrou !'
//     botão.style.backgroundColor = 'blue';
//     botão.style.height = '20px';
// }

// //Criando uma arrow function
// const onMouseEnter = () => {
//     // altera o texto da variavel selecionada a seta entrar
//     botão.innerText = 'Entrar ?'
//     botão.style.backgroundColor = 'green';
//     botão.style.height = '40px';
//     botão.style.width = '80px';

// }

// //Criando uma arrow function
// const onmouseLeave = () => {
//     // altera o texto da variavel selecionada a seta sair
//     botão.innerText = 'Botão'
//     botão.style.height = '20px';
//     botão.style.width = '80px';

// }

// Principais eventos de teclado ----------------------------------

// const novoTexto = document.createElement('h2');
// novoTexto.innerText = 'Uma tecla foi pressionada!'

// // evento de ouvir o que pode acontecer
// //                            keydown = pressionamento de alguma tecla
// document.body.addEventListener("keydown", () => {
//     document.body.appendChild(novoTexto);

// })

//-----------------------------------------------------------------

//Modo diferente de lincar uma ação de mouse:

//criar uma variavel com elemento delecionado 
const botão = document.querySelector('button');

//função com ação 
const onMouseClick = () => {
    // altera o texto da variavel selecionada ao clicar
    botão.innerText = 'Entrou !'
    botão.style.backgroundColor = 'blue';
    botão.style.height = '20px';
}

//função com ação 
const onMouseEnter = () => {
    // altera o texto da variavel selecionada a seta entrar
    botão.innerText = 'Entrar ?'
    botão.style.backgroundColor = 'green';
    botão.style.height = '40px';
    botão.style.width = '80px';

}

//função com ação 
const onmouseLeave = () => {
    // altera o texto da variavel selecionada a seta sair
    botão.innerText = 'Botão'
    botão.style.height = '20px';
    botão.style.width = '80px';

}

// (variavel selecioando o elemento), (e selecioando um evento),  (e puxando a função com a ação)
botão.addEventListener('click', onMouseClick);
botão.addEventListener('mouseleave', onmouseLeave);
botão.addEventListener('mouseenter', onMouseEnter);

// addEventListener = evento de ouvir o que pode acontecer


// -----------------------------------------------------------------------

// //                            keydown = pressionamento de alguma tecla
// document.body.addEventListener("keydown", (tecla) => {
//     const novoTexto = document.createElement('h2');
//     novoTexto.innerText = `A tecla ${tecla.key} foi pressionada!`

//     document.body.appendChild(novoTexto);

// })







//​Todos os eventos: https://developer.mozilla.org/en-US/docs/Web/Events