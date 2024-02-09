const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: ["let myVar = 10;", "variable myVar = 10;", "const myVar = 10;"],
      correta: 2,
    },
    {
      pergunta:
        "Qual método é utilizado para imprimir algo no console em JavaScript?",
      respostas: [
        "log.console('Hello World');",
        "print('Hello World');",
        "console.log('Hello World');",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que representa um único valor.",
        "Um objeto que armazena apenas números.",
        "Uma estrutura de dados que armazena uma coleção ordenada de valores.",
      ],
      correta: 2,
    },
    {
      pergunta: "Como se realiza uma iteração (loop) em JavaScript?",
      respostas: [
        "foreach (let i in array) { }",
        "for (let i = 0; i < array.length; i++) { }",
        "loop(array, function(i) { })",
      ],
      correta: 1,
    },
    {
      pergunta:
        "Qual palavra-chave é utilizada para criar uma função em JavaScript?",
      respostas: [
        "function myFunction() { }",
        "create function myFunction() { }",
        "def myFunction() { }",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar strings.",
        "Um modelo de objetos para representar a estrutura de uma página HTML.",
        "Uma biblioteca popular de JavaScript.",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Ambos comparam valores e tipos de dados, mas '===' também verifica a igualdade estrita.",
        "'===' compara apenas os valores, enquanto '==' compara valores e tipos de dados.",
        "'==' compara apenas os valores, enquanto '===' compara valores e tipos de dados.",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma biblioteca para manipulação de objetos.",
        "Um formato de dados que representa objetos como strings.",
        "Um tipo de dado para armazenar números inteiros.",
      ],
      correta: 1,
    },
    {
      pergunta: "Como se faz uma requisição HTTP assíncrona em JavaScript?",
      respostas: [
        "http.request('GET', 'url', callback);",
        "fetch('url').then(response => response.json());",
        "asyncRequest('url', 'GET', callback);",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a finalidade do operador 'typeof' em JavaScript?",
      respostas: [
        "Comparar o tipo de dois valores.",
        "Verificar se uma variável foi definida.",
        "Retornar uma string indicando o tipo de um operando.",
      ],
      correta: 2,
    },
  ];
  
  const quiz = document.querySelector("#quiz");
  const template = document.querySelector("template");
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector("#acertos span");
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
  
  //loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector("h3").textContent = item.pergunta;
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true);
      dt.querySelector("span").textContent = resposta;
      dt.querySelector("input").setAttribute(
        "name",
        "pergunta-" + perguntas.indexOf(item)
      );
      dt.querySelector("input").value = item.respostas.indexOf(resposta);
      dt.querySelector("input").onchange = (Event) => {
        const estaCorreta = Event.target.value == item.correta;
  
        corretas.delete(item);
        if (estaCorreta) {
          corretas.add(item);
        }
  
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
      };
  
      quizItem.querySelector("dl").appendChild(dt);
    }
  
    quizItem.querySelector("dl dt").remove();
  
    quiz.appendChild(quizItem);
  }
  