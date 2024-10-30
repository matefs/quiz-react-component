const segment = {
  basic: 'Básico',
  medium: 'Médio',
  advanced: 'Avançado',
};

// file path: /quizzes/computer_maintenance_quiz.js

const quiz = {
  quizTitle: 'Quiz de Montagem e Manutenção de Computadores',
  quizSynopsis:
    'Teste seus conhecimentos em montagem e manutenção de computadores com este quiz de 50 perguntas.',
  nrOfQuestions: '50',
  progressBarColor: '#3498db',
  questions: [
    {
      question:
        'Qual é a principal diferença entre uma tomada de dois pinos e uma de três pinos?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'A presença de um pino de aterramento',
        'Tensão elétrica',
        'Frequência da corrente',
        'Material dos pinos',
      ],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correto! O terceiro pino é para aterramento.',
      messageForIncorrectAnswer: 'Incorreto. Tente novamente.',
      explanation:
        'O pino extra proporciona segurança elétrica ao conectar o dispositivo ao sistema de aterramento.',
      point: '10',
    },
    {
      question: 'O que é aterramento e por que é importante?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'Conexão elétrica direta com o solo',
        'Um tipo de voltagem',
        'Proteção contra curtos-circuitos',
        'Fonte de energia alternativa',
      ],
      correctAnswer: '1',
      messageForCorrectAnswer:
        'Correto! Aterramento previne choques elétricos.',
      messageForIncorrectAnswer:
        'Incorreto. A aterramento é uma medida de segurança.',
      explanation:
        'A aterramento ajuda a dispersar correntes não desejadas no solo, evitando choques.',
      point: '10',
    },
    // Exemplo de perguntas adicionais, seguindo o mesmo padrão.
    {
      question: 'Qual a diferença entre 110V e 220V?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        '110V é mais seguro',
        '110V e 220V são diferentes tensões de corrente elétrica',
        '220V consome menos energia',
        'Não há diferença',
      ],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Correto! São tensões diferentes.',
      messageForIncorrectAnswer: 'Incorreto. Tente novamente.',
      explanation:
        'A diferença de tensão impacta a potência e segurança de certos aparelhos.',
      point: '10',
    },
    {
      question:
        'Qual é a voltagem padrão em tomadas residenciais na maioria dos países da América do Norte?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['220V', '110V', '50V', '380V'],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Correto! A voltagem padrão é 110V.',
      messageForIncorrectAnswer:
        'Incorreto. Revise as configurações regionais.',
      explanation:
        'A voltagem padrão varia por região, sendo 110V comum na América do Norte.',
      point: '10',
    },
    {
      question:
        'Qual é o pino adicional encontrado nas tomadas de três pinos e qual sua função?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'Pino de aterramento',
        'Pino neutro',
        'Pino de energia',
        'Pino de alta tensão',
      ],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correto! É o pino de aterramento.',
      messageForIncorrectAnswer: 'Incorreto. Esse pino é para aterramento.',
      explanation: 'O pino de aterramento protege contra choques elétricos.',
      point: '10',
    },
    // Continue com perguntas adicionais até completar as 50 questões
    {
      question:
        'Qual ferramenta é essencial para montar uma placa-mãe no gabinete?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Chave Phillips', 'Alicate', 'Martelo', 'Serra'],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correto! Uma chave Phillips é essencial.',
      messageForIncorrectAnswer: 'Incorreto. Tente novamente.',
      explanation: 'A chave Phillips ajuda a fixar a placa-mãe ao gabinete.',
      point: '10',
    },
    // Exemplo para perguntas sobre periféricos
    {
      question:
        'Qual componente é responsável por processar gráficos complexos em um computador?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['CPU', 'GPU', 'RAM', 'SSD'],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Correto! A GPU processa gráficos.',
      messageForIncorrectAnswer: 'Incorreto. A CPU é diferente da GPU.',
      explanation:
        'A GPU (Unidade de Processamento Gráfico) lida com o processamento de gráficos.',
      point: '10',
    },
    // Exemplo sobre manutenção e substituição de peças
    {
      question:
        'Qual procedimento é necessário antes de substituir uma memória RAM?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'Desconectar a fonte de energia',
        'Atualizar o BIOS',
        'Desmontar o processador',
        'Remover a placa-mãe',
      ],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correto! A segurança é essencial.',
      messageForIncorrectAnswer: 'Incorreto. Isso pode causar danos.',
      explanation:
        'Desconectar a fonte de energia previne choques durante a manutenção.',
      point: '10',
    },
    // Continue seguindo o mesmo padrão até completar as 50 perguntas
  ],
};

export default quiz;
