//Como usar Metodos:
//Sempre usar document para usar "metodos"

// Altera o elemento utilizando o "Id" 

const selectCustomTitle = document.getElementById("customTitle");
console.log("Titulo selecionado", selectCustomTitle);

// altera os elementos utilizando as "Tags"
const selectButtons = document.getElementsByTagName("button");
console.log("Botões da página:", selectButtons);

// Altera o elemento utilizando a "Class"
const selectStyleButtons = document.getElementsByClassName("styledButton");
console.log("Botões estilizados", selectStyleButtons);

// Altera apenas o primeiro elemento usando os seletores css e os id, class ou tag
const boldTexts = document.querySelector(".styledButton");
console.log("bold texts: ", boldTexts);

// Altera os elementos usando os seletores css e os  o id, class ou tag
const allbutton = document.querySelectorAll("button");
console.log("Todos os botões: ", allbutton);

