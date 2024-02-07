const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para comentar uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "<!-- Este é um comentário -->"
        ],
        correta: 0
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "variável",
            "vare",
            "var"
        ],
        correta: 2
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        respostas: [
            "function myFunction()",
            "func myFunction()",
            "def myFunction()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de atribuição em JavaScript?",
        respostas: [
            "=",
            "==",
            ":="
        ],
        correta: 0
    },
    {
        pergunta: "Qual método JavaScript é usado para imprimir algo no console?",
        respostas: [
            "print()",
            "console.print()",
            "console.log()"
        ],
        correta: 2
    },
    {
        pergunta: "Como você escreve um comentário de várias linhas em JavaScript?",
        respostas: [
            "// Este é um comentário de várias linhas //",
            "/* Este é um comentário de várias linhas */",
            "<!-- Este é um comentário de várias linhas -->"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método JavaScript para mudar o conteúdo HTML de um elemento?",
        respostas: [
            "innerHTML",
            "changeHTML",
            "setHTML"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de escrever um array em JavaScript?",
        respostas: [
            "{item1, item2, item3}",
            "[item1, item2, item3]",
            "(item1, item2, item3)"
        ],
        correta: 1
    },
    {
        pergunta: "Como você chama uma função chamada 'myFunction'?",
        respostas: [
            "call myFunction()",
            "myFunction()",
            "run myFunction()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função de `typeof` em JavaScript?",
        respostas: [
            "Retorna o tipo de dados de uma expressão",
            "Declara uma nova variável",
            "Concatena duas strings"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem);
}