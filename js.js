const perguntas = [
  {
      pergunta: "Quem detém o recorde de maior número de campeonatos mundiais de Fórmula 1?",
      respostas: [
          "Ayrton Senna",
          "Michael Schumacher",
          "Lewis Hamilton",
      ],
      correta: 2
  },
  {
      pergunta: "Qual equipe detém o recorde de mais títulos de construtores na Fórmula 1?",
      respostas: [
          "Ferrari",
          "Mercedes",
          "McLaren",
      ],
      correta: 0
  },
  {
      pergunta: "Qual piloto foi o mais jovem campeão mundial de Fórmula 1?",
      respostas: [
          "Sebastian Vettel",
          "Fernando Alonso",
          "Lewis Hamilton",
      ],
      correta: 2
  },
  {
      pergunta: "Qual é o circuito mais longo do calendário da Fórmula 1 atualmente?",
      respostas: [
          "Spa-Francorchamps",
          "Suzuka",
          "Circuito da Catalunha",
      ],
      correta: 0
  },
  {
      pergunta: "Quantos títulos mundiais Juan Manuel Fangio conquistou na Fórmula 1?",
      respostas: [
          "3",
          "5",
          "7",
      ],
      correta: 2
  },
  {
      pergunta: "Qual piloto é conhecido como 'O Professor' na Fórmula 1?",
      respostas: [
          "Alain Prost",
          "Niki Lauda",
          "Jackie Stewart",
      ],
      correta: 0
  },
  {
      pergunta: "Qual é a equipe mais antiga da Fórmula 1 ainda em atividade?",
      respostas: [
          "Ferrari",
          "Mercedes",
          "Williams",
      ],
      correta: 2
  },
  {
      pergunta: "Qual piloto é conhecido como 'The Flying Finn'?",
      respostas: [
          "Kimi Räikkönen",
          "Valtteri Bottas",
          "Mika Häkkinen",
      ],
      correta: 0
  },
  {
      pergunta: "Quem é o piloto brasileiro com mais vitórias na Fórmula 1?",
      respostas: [
          "Ayrton Senna",
          "Felipe Massa",
          "Emerson Fittipaldi",
      ],
      correta: 1
  },
  {
      pergunta: "Qual é a equipe de Fórmula 1 com mais pole positions na história?",
      respostas: [
          "Ferrari",
          "McLaren",
          "Williams",
      ],
      correta: 1
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
  