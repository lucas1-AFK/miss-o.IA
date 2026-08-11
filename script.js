const perguntas = [
  {
    pergunta: 'Qual valor deve guiar o desenvolvimento da IA?',
    alternativas: [
      { texto: 'Velocidade e eficiência', valor: 1 },
      { texto: 'Transparência e segurança', valor: 2 },
      { texto: 'Inovação sem limites', valor: 3 }
    ]
  },
  {
    pergunta: 'Como a IA deve aprender?',
    alternativas: [
      { texto: 'Com dados rápidos e em grande volume', valor: 1 },
      { texto: 'Com dados diversos e bem avaliados', valor: 2 },
      { texto: 'Com criatividade para explorar novas ideias', valor: 3 }
    ]
  },
  {
    pergunta: 'O que importa mais em uma ferramenta de IA?',
    alternativas: [
      { texto: 'Resolver problemas de forma imediata', valor: 1 },
      { texto: 'Ser confiável e responsável', valor: 2 },
      { texto: 'Surpreender com possibilidades novas', valor: 3 }
    ]
  },
  {
    pergunta: 'Qual cenário você gostaria de ver no futuro?',
    alternativas: [
      { texto: 'Automação intensa em tudo', valor: 1 },
      { texto: 'IA ao lado das pessoas, com controle humano', valor: 2 },
      { texto: 'IA transformando o mundo com novas fronteiras', valor: 3 }
    ]
  },
  {
    pergunta: 'Como você acredita que a IA deveria tratar dados pessoais?',
    alternativas: [
      { texto: 'Com foco em performance e escala', valor: 1 },
      { texto: 'Com proteção rigorosa e consentimento', valor: 2 },
      { texto: 'Com liberdade para explorar novas aplicações', valor: 3 }
    ]
  },
  {
    pergunta: 'Em uma escola ou empresa, a IA deveria ser?',
    alternativas: [
      { texto: 'Uma ferramenta para ganhar tempo', valor: 1 },
      { texto: 'Uma parceira que apoia decisões humanas', valor: 2 },
      { texto: 'Uma força que redefine tudo o que existe', valor: 3 }
    ]
  }
];

let indiceAtual = 0;
let pontuacao = 0;

const elementoPerguntas = document.getElementById('perguntas');
const elementoAlternativas = document.getElementById('alternativas');
const elementoResultado = document.getElementById('resultado');
const textoResultado = document.getElementById('texto-resultado');

function renderizarPergunta() {
  elementoResultado.style.display = 'none';
  elementoAlternativas.innerHTML = '';

  const perguntaAtual = perguntas[indiceAtual];
  elementoPerguntas.textContent = perguntaAtual.pergunta;

  perguntaAtual.alternativas.forEach((alternativa) => {
    const botao = document.createElement('button');
    botao.className = 'opcao';
    botao.textContent = alternativa.texto;
    botao.addEventListener('click', () => responder(alternativa.valor));
    elementoAlternativas.appendChild(botao);
  });
}

function responder(valor) {
  pontuacao += valor;
  indiceAtual += 1;

  if (indiceAtual < perguntas.length) {
    renderizarPergunta();
    return;
  }

  mostrarResultado();
}

function mostrarResultado() {
  elementoPerguntas.textContent = 'Seu resultado';
  elementoAlternativas.innerHTML = '';
  elementoResultado.style.display = 'block';

  let mensagem = '';

  if (pontuacao <= 6) {
    mensagem = 'Você prefere uma IA prática e objetiva, focada em resolver problemas com rapidez.';
  } else if (pontuacao <= 9) {
    mensagem = 'Você acredita em uma IA equilibrada, útil e responsável para a vida cotidiana.';
  } else {
    mensagem = 'Você vê a IA como uma força transformadora, com grande potencial para criar novas possibilidades.';
  }

  textoResultado.textContent = mensagem;

  const reiniciar = document.createElement('button');
  reiniciar.className = 'opcao reiniciar';
  reiniciar.textContent = 'Refazer quiz';
  reiniciar.addEventListener('click', () => {
    indiceAtual = 0;
    pontuacao = 0;
    renderizarPergunta();
  });

  elementoAlternativas.appendChild(reiniciar);
}

renderizarPergunta();