const perguntas = [
    {
      pergunta: "Qual é a principal causa da calvície masculina?",
      respostas: [
        "Estresse",
        "Genética",
        "Má higiene capilar"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome científico da calvície?",
      respostas: [
        "Alopecia areata",
        "Alopecia totalis",
        "Alopecia androgenética"
      ],
      correta: 2
    },
    {
      pergunta: "A calvície afeta apenas os homens?",
      respostas: [
        "Sim",
        "Não",
        "Apenas em casos raros"
      ],
      correta: 1
    },
    {
      pergunta: "Quais são os principais tratamentos para a calvície?",
      respostas: [
        "Transplante capilar e uso de perucas",
        "Medicamentos tópicos e cirurgias",
        "Uso de chapéus e bonés"
      ],
      correta: 1
    },
    {
      pergunta: "A calvície pode ser prevenida?",
      respostas: [
        "Não, é uma condição inevitável",
        "Sim, através de uma dieta específica",
        "Depende da predisposição genética de cada pessoa"
      ],
      correta: 2
    },
    {
      pergunta: "A calvície é mais comum em qual faixa etária?",
      respostas: [
        "20-30 anos",
        "40-50 anos",
        "60-70 anos"
      ],
      correta: 2
    },
    {
      pergunta: "Quais são os fatores de risco para desenvolver calvície?",
      respostas: [
        "Exposição ao sol e uso excessivo de produtos capilares",
        "Prática regular de exercícios físicos e alimentação saudável",
        "Histórico familiar e idade"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é a influência da testosterona na calvície masculina?",
      respostas: [
        "A testosterona promove o crescimento capilar",
        "A testosterona não tem relação com a calvície",
        "A testosterona pode acelerar o processo de queda capilar em pessoas predispostas"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é o nome do hormônio relacionado à calvície?",
      respostas: [
        "Cortisol",
        "Testosterona",
        "Dihidrotestosterona"
      ],
      correta: 3
    },
    {
      pergunta: "A calvície pode ser reversível?",
      respostas: [
        "Sim, através de tratamentos médicos eficazes",
        "Não, uma vez que ocorre, é permanente",
        "Apenas em casos extremamente raros"
      ],
      correta: 1
    }
  ];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totaldeperguntas = perguntas.length
  const mostrartotal = document.querySelector('#acertos span')
  mostrartotal.textContent = corretas.size + 'de' + totaldeperguntas
  

  //Loop ou laço de repetição
  for(const item of perguntas ) {
    const quizitem = template.content.cloneNode(true)
    quizitem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
    const dt = quizitem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta 
     
      corretas.delete(item)
      if(estaCorreta) { 
       corretas.add(item)   
      }
   
   
   mostrartotal.textContent = corretas.size + 'de' + totaldeperguntas
  

    }
    
  quizitem.querySelector('dl').appendChild(dt)
}
    
    
    quizitem.querySelector('dl dt').remove()

      //coloca coisa na tela
      quiz.appendChild(quizitem)

  }
