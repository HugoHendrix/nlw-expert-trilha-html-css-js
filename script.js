// Array de objetos contendo perguntas, respostas e respostas corretas

const perguntas = [
  {
    pergunta: "Qual é a sintaxe correta para comentar uma linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "/* Este é um comentário */",
      "<!-- Este é um comentário -->",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    respostas: ["variável", "vare", "var"],
    correta: 2,
  },
  {
    pergunta: "Como você declara uma função em JavaScript?",
    respostas: [
      "function myFunction()",
      "func myFunction()",
      "def myFunction()",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o operador de atribuição em JavaScript?",
    respostas: ["=", "==", ":="],
    correta: 0,
  },
  {
    pergunta: "Qual método JavaScript é usado para imprimir algo no console?",
    respostas: ["print()", "console.print()", "console.log()"],
    correta: 2,
  },
  {
    pergunta: "Como você escreve um comentário de várias linhas em JavaScript?",
    respostas: [
      "// Este é um comentário de várias linhas //",
      "/* Este é um comentário de várias linhas */",
      "<!-- Este é um comentário de várias linhas -->",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual é o método JavaScript para mudar o conteúdo HTML de um elemento?",
    respostas: ["innerHTML", "changeHTML", "setHTML"],
    correta: 0,
  },
  {
    pergunta: "Qual é a forma correta de escrever um array em JavaScript?",
    respostas: [
      "{item1, item2, item3}",
      "[item1, item2, item3]",
      "(item1, item2, item3)",
    ],
    correta: 1,
  },
  {
    pergunta: "Como você chama uma função chamada 'myFunction'?",
    respostas: ["call myFunction()", "myFunction()", "run myFunction()"],
    correta: 1,
  },
  {
    pergunta: "Qual é a função de `typeof` em JavaScript?",
    respostas: [
      "Retorna o tipo de dados de uma expressão",
      "Declara uma nova variável",
      "Concatena duas strings",
    ],
    correta: 0,
  },
];
// FIM DO ARRAY

// Conjunto para armazenar perguntas corretas
const corretas = new Set();

// Total de perguntas
const totalDePerguntas = perguntas.length;

// Elemento HTML para mostrar o número de respostas corretas
const mostralTotal = document.querySelector("#acertos span");
mostralTotal.textContent = corretas.size + " de " + totalDePerguntas;

// Seleciona o elemento com o id "quiz" no HTML
const quiz = document.querySelector("#quiz");

// Seleciona o template HTML que será clonado para cada pergunta
const template = document.querySelector("template");

// Loop que percorre cada pergunta no array "perguntas" e cria o conteúdo do quiz
for (const item of perguntas) {
  // Clona o conteúdo do template para criar uma nova pergunta
  const quizItem = template.content.cloneNode(true);

  // Define o texto da pergunta no elemento h3 dentro do quizItem
  quizItem.querySelector("h3").textContent = item.pergunta;

  // Loop que percorre cada resposta da pergunta atual e cria opções de resposta
  for (let resposta of item.respostas) {
    // Clona o elemento dt do template para criar uma nova opção de resposta
    const dt = quizItem.querySelector("dl dt").cloneNode(true);

    // Define o texto da resposta no span dentro do dt
    dt.querySelector("span").textContent = resposta;

    // Define o atributo "name" e o valor do input para identificar a pergunta
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );

    // Define o valor do input com o índice da resposta atual
    dt.querySelector("input").value = item.respostas.indexOf(resposta);

    // Define o evento onchange para verificar se a resposta está correta
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      // Remove a pergunta do conjunto se estiver incorreta
      corretas.delete(item);
      // Adiciona a pergunta ao conjunto se estiver correta
      if (estaCorreta) {
        corretas.add(item);
      }
      // Atualiza o número de respostas corretas exibido no HTML
      mostralTotal.textContent = corretas.size + " de " + totalDePerguntas;
    };

    // Adiciona a nova opção de resposta ao elemento dl dentro do quizItem
    quizItem.querySelector("dl").appendChild(dt);
  }

  // Remove o primeiro elemento dt (placeholder) da lista de respostas
  quizItem.querySelector("dl dt").remove();

  // Adiciona o quizItem (pergunta com opções de resposta) ao elemento quiz
  quiz.appendChild(quizItem);
}
