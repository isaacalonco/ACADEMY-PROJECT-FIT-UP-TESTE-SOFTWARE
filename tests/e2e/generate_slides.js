const pptxgen = require("pptxgenjs");
const path = require("path");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_16x9";
pptx.author = "FIT UP Academy Team";
pptx.company = "Universidade Católica de Brasília";
pptx.title = "FIT UP - Apresentação de Testes de Software";

// Paleta Elegante e Minimalista (Dark Mode)
const C = {
  bg: "080F1E",         // Fundo escuro profundo
  card: "121D33",       // Fundo do card
  cardBorder: "1D2D4D", // Borda sutil
  cyan: "00E5FF",       // Ciano neon
  teal: "00D2B4",       // Verde água
  blue: "38BDF8",       // Azul céu
  green: "10B981",      // Verde sucesso
  white: "FFFFFF",      // Branco puro
  light: "E2E8F0",      // Cinza claro
  muted: "94A3B8"       // Cinza médio
};

const FONT = "Segoe UI";

function addHeader(slide, tag, title, subtitle) {
  slide.addText(tag.toUpperCase(), {
    x: 0.8, y: 0.45, w: 9.0, h: 0.25,
    fontSize: 9.5, fontFace: FONT, bold: true, color: C.cyan, letterSpacing: 2
  });

  slide.addText(title, {
    x: 0.8, y: 0.72, w: 10.0, h: 0.5,
    fontSize: 22, fontFace: FONT, bold: true, color: C.white
  });

  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.8, y: 1.25, w: 10.5, h: 0.3,
      fontSize: 12, fontFace: FONT, color: C.muted
    });
  }
}

function addFooter(slide) {
  slide.addText("FIT UP · Teste de Software · Universidade Católica de Brasília · 2026", {
    x: 0.8, y: 5.15, w: 10.0, h: 0.25,
    fontSize: 8.5, fontFace: FONT, color: C.muted
  });
}

// ==========================================
// SLIDE 1: CAPA MINIMALISTA
// ==========================================
{
  const s = pptx.addSlide();
  s.background = { color: C.bg };

  // Tag
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 0.75, w: 3.4, h: 0.38,
    fill: { color: C.card }, line: { color: C.cyan, width: 1 }, rectRadius: 0.15
  });
  s.addText("N1 – AT1  |  TESTE DE SOFTWARE", {
    x: 0.8, y: 0.75, w: 3.4, h: 0.38,
    fontSize: 10, fontFace: FONT, bold: true, color: C.cyan, align: "center", valign: "middle"
  });

  // Título Principal
  s.addText("FIT UP", {
    x: 0.8, y: 1.35, w: 8.0, h: 1.0,
    fontSize: 56, fontFace: FONT, bold: true, color: C.white
  });

  // Linha de detalhe
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.82, y: 2.4, w: 1.8, h: 0.05,
    fill: { color: C.cyan }, line: { color: C.cyan }
  });

  s.addText("Gestão de Academia & Estratégia de Testes", {
    x: 0.8, y: 2.6, w: 9.0, h: 0.45,
    fontSize: 17, fontFace: FONT, color: C.light
  });

  // Integrantes Card
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 3.45, w: 6.2, h: 1.5,
    fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
  });
  s.addText("EQUIPE DO PROJETO", {
    x: 1.05, y: 3.65, w: 5.5, h: 0.25,
    fontSize: 9.5, fontFace: FONT, bold: true, color: C.cyan, letterSpacing: 1.5
  });
  s.addText("• Gustavo Júnio   • Isaac Alonço   • Raphael Gondim\n• Hugo Oliveira   • Paulo Vitor", {
    x: 1.05, y: 4.0, w: 5.8, h: 0.75,
    fontSize: 12, fontFace: FONT, color: C.light, lineSpacing: 20
  });

  // Professor Card
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 7.3, y: 3.45, w: 4.8, h: 1.5,
    fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
  });
  s.addText("PROFESSOR & INSTITUIÇÃO", {
    x: 7.55, y: 3.65, w: 4.3, h: 0.25,
    fontSize: 9.5, fontFace: FONT, bold: true, color: C.teal, letterSpacing: 1.5
  });
  s.addText("Prof. Samuel Novais Moura Junior\nUniversidade Católica de Brasília (UCB)\nBrasília - DF · 2026", {
    x: 7.55, y: 4.0, w: 4.3, h: 0.75,
    fontSize: 12, fontFace: FONT, color: C.light, lineSpacing: 18
  });
}

// ==========================================
// SLIDE 2: VISÃO DO SISTEMA
// ==========================================
{
  const s = pptx.addSlide();
  s.background = { color: C.bg };
  addHeader(s, "Visão Geral", "O Sistema FIT UP", "Plataforma web para controle operacional de academias");
  addFooter(s);

  const pillars = [
    {
      title: "Alunos & Avaliação",
      tag: "CADASTRO & SAÚDE",
      tagCol: C.cyan,
      items: [
        "Cadastro de alunos e dados pessoais",
        "Validação de CPF e e-mail único",
        "Cálculo automatizado de IMC",
        "Classificação corporal (4 faixas)"
      ]
    },
    {
      title: "Planos & Matrículas",
      tag: "SERVIÇOS",
      tagCol: C.teal,
      items: [
        "Planos Mensal, Trimestral e Anual",
        "Gestão de instrutores responsáveis",
        "Vínculo de matrícula do aluno",
        "Catálogo de modalidades esportivas"
      ]
    },
    {
      title: "Financeiro & Acesso",
      tag: "OPERAÇÃO",
      tagCol: C.blue,
      items: [
        "Controle de pagamentos de mensalidade",
        "Status de quitação (Pago / Pendente)",
        "Login seguro para recepcionistas e gestão",
        "Interface moderna e intuitiva"
      ]
    }
  ];

  pillars.forEach((p, i) => {
    const x = 0.8 + i * 3.85;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 1.7, w: 3.65, h: 3.25,
      fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
    });

    s.addText(p.tag, {
      x: x + 0.25, y: 1.95, w: 3.15, h: 0.25,
      fontSize: 9, fontFace: FONT, bold: true, color: p.tagCol, letterSpacing: 1.2
    });

    s.addText(p.title, {
      x: x + 0.25, y: 2.25, w: 3.15, h: 0.35,
      fontSize: 16, fontFace: FONT, bold: true, color: C.white
    });

    const txt = p.items.map(it => `• ${it}`).join("\n\n");
    s.addText(txt, {
      x: x + 0.25, y: 2.75, w: 3.15, h: 2.0,
      fontSize: 11.5, fontFace: FONT, color: C.light, lineSpacing: 16
    });
  });
}

// ==========================================
// SLIDE 3: HISTÓRIA DE USUÁRIO (USER STORY)
// ==========================================
{
  const s = pptx.addSlide();
  s.background = { color: C.bg };
  addHeader(s, "Requisito de Negócio", "História de Usuário & Critérios (BDD)", "Definição formal com foco na avaliação física do aluno");
  addFooter(s);

  // Card Esquerda: User Story
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.7, w: 5.4, h: 3.25,
    fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
  });

  s.addText("HISTÓRIA DE USUÁRIO", {
    x: 1.1, y: 1.95, w: 4.8, h: 0.25,
    fontSize: 9.5, fontFace: FONT, bold: true, color: C.cyan, letterSpacing: 1.2
  });
  s.addText("Avaliação Física Automatizada", {
    x: 1.1, y: 2.2, w: 4.8, h: 0.4,
    fontSize: 17, fontFace: FONT, bold: true, color: C.white
  });

  const storyRows = [
    { label: "COMO", desc: "Instrutor da Academia FIT UP," },
    { label: "QUERO", desc: "que o sistema calcule o IMC e classifique o estado nutricional do aluno automaticamente," },
    { label: "PARA", desc: "prescrever o treino e a dieta corretos sem erros de cálculo manual." }
  ];

  let yOffset = 2.8;
  storyRows.forEach(r => {
    s.addText(r.label, {
      x: 1.1, y: yOffset, w: 1.0, h: 0.3,
      fontSize: 10, fontFace: FONT, bold: true, color: C.cyan
    });
    s.addText(r.desc, {
      x: 2.1, y: yOffset, w: 3.8, h: 0.48,
      fontSize: 11.5, fontFace: FONT, color: C.light
    });
    yOffset += 0.65;
  });

  // Card Direita: BDD
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.5, y: 1.7, w: 5.6, h: 3.25,
    fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
  });

  s.addText("CRITÉRIO DE ACEITAÇÃO (BDD)", {
    x: 6.8, y: 1.95, w: 5.0, h: 0.25,
    fontSize: 9.5, fontFace: FONT, bold: true, color: C.teal, letterSpacing: 1.2
  });
  s.addText("Cenário: Cálculo de IMC e Classificação", {
    x: 6.8, y: 2.2, w: 5.0, h: 0.4,
    fontSize: 17, fontFace: FONT, bold: true, color: C.white
  });

  const bddRows = [
    { kw: "DADO QUE", text: "um aluno possui peso 80 kg e altura 2.00 m;", col: C.teal },
    { kw: "QUANDO", text: "o sistema registrar os dados da avaliação física;", col: C.cyan },
    { kw: "ENTÃO", text: "o IMC calculado deve ser exatamente 20.0;", col: C.green },
    { kw: "E", text: "a classificação deve indicar 'Peso normal'.", col: C.green }
  ];

  let bddY = 2.8;
  bddRows.forEach(b => {
    s.addText(b.kw, {
      x: 6.8, y: bddY, w: 1.3, h: 0.3,
      fontSize: 10.5, fontFace: FONT, bold: true, color: b.col
    });
    s.addText(b.text, {
      x: 8.1, y: bddY, w: 3.7, h: 0.45,
      fontSize: 11.5, fontFace: FONT, color: C.light
    });
    bddY += 0.52;
  });
}

// ==========================================
// SLIDE 4: PIRÂMIDE DE TESTES & V&V
// ==========================================
{
  const s = pptx.addSlide();
  s.background = { color: C.bg };
  addHeader(s, "Estratégia em Camadas", "Pirâmide de Testes: 4 Níveis & V&V", "Classificação de Verificação e Validação para cada ferramenta");
  addFooter(s);

  const levels = [
    {
      num: "1 · UNITÁRIO",
      tag: "VERIFICAÇÃO",
      tagCol: C.cyan,
      tool: "JUnit 5 + AssertJ",
      type: "Caixa Branca",
      desc: "Verifica a exatidão das regras matemáticas no código Java (Fórmula de IMC, validação de CPF e faixas nutricionais)."
    },
    {
      num: "2 · API REST",
      tag: "VERIFICAÇÃO",
      tagCol: C.cyan,
      tool: "Postman",
      type: "Caixa Preta",
      desc: "Verifica os contratos da API em produção (Status HTTP 200, payloads JSON, login e token de autenticação)."
    },
    {
      num: "3 · E2E INTERFACE",
      tag: "VALIDAÇÃO",
      tagCol: C.teal,
      tool: "Playwright",
      type: "Caixa Preta",
      desc: "Valida a experiência do usuário navegando no sistema real no Chromium, com gravação de evidência em vídeo."
    },
    {
      num: "4 · CARGA",
      tag: "NÃO-FUNCIONAL",
      tagCol: C.blue,
      tool: "Apache JMeter",
      type: "Resiliência",
      desc: "Simulação de 100 requisições simultâneas na nuvem Railway, avaliando estabilidade sob concorrência."
    }
  ];

  levels.forEach((l, i) => {
    const x = 0.8 + i * 2.85;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 1.7, w: 2.7, h: 3.25,
      fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
    });

    s.addText(l.num, {
      x: x + 0.2, y: 1.88, w: 2.3, h: 0.25,
      fontSize: 9.5, fontFace: FONT, bold: true, color: C.muted
    });

    // Tag Pill
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.2, y: 2.15, w: 1.5, h: 0.28,
      fill: { color: "182B48" }, line: { color: l.tagCol, width: 1 }, rectRadius: 0.08
    });
    s.addText(l.tag, {
      x: x + 0.2, y: 2.15, w: 1.5, h: 0.28,
      fontSize: 8, fontFace: FONT, bold: true, color: l.tagCol, align: "center", valign: "middle"
    });

    s.addText(l.tool, {
      x: x + 0.2, y: 2.55, w: 2.3, h: 0.35,
      fontSize: 13, fontFace: FONT, bold: true, color: C.white
    });

    s.addText(`Tipo: ${l.type}`, {
      x: x + 0.2, y: 2.9, w: 2.3, h: 0.25,
      fontSize: 9.5, fontFace: FONT, italic: true, color: C.cyan
    });

    s.addText(l.desc, {
      x: x + 0.2, y: 3.2, w: 2.3, h: 1.6,
      fontSize: 10, fontFace: FONT, color: C.light, lineSpacing: 15
    });
  });
}

// ==========================================
// SLIDE 5: V&V NA PRÁTICA (CONCEITOS DA AULA)
// ==========================================
{
  const s = pptx.addSlide();
  s.background = { color: C.bg };
  addHeader(s, "Teoria da Aula 05", "V&V na Prática: Caçando o Defeito", "Diferenciação clara entre Verificação e Validação no FIT UP");
  addFooter(s);

  // Card Esquerda: Verificação
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.7, w: 5.4, h: 3.25,
    fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
  });

  s.addText("VERIFICAÇÃO", {
    x: 1.1, y: 1.95, w: 4.8, h: 0.25,
    fontSize: 10, fontFace: FONT, bold: true, color: C.cyan, letterSpacing: 1.5
  });
  s.addText("'Construindo o produto corretamente?'", {
    x: 1.1, y: 2.2, w: 4.8, h: 0.35,
    fontSize: 14, fontFace: FONT, bold: true, color: C.white
  });

  const verifItems = [
    "Foco: Conformidade com o código e a especificação",
    "Ambiente: JUnit 5 (Caixa Branca no Backend)",
    "Cenário de Teste: IMC com altura zero ou peso inválido",
    "Resultado: Se o código dividir por zero ou errar a fórmula, o teste FALHA imediatamente no IntelliJ, barrando o defeito antes de ir ao ar"
  ];
  s.addText(verifItems.map(it => `• ${it}`).join("\n\n"), {
    x: 1.1, y: 2.65, w: 4.8, h: 2.1,
    fontSize: 11, fontFace: FONT, color: C.light, lineSpacing: 16
  });

  // Card Direita: Validação
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.5, y: 1.7, w: 5.6, h: 3.25,
    fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
  });

  s.addText("VALIDAÇÃO", {
    x: 6.8, y: 1.95, w: 5.0, h: 0.25,
    fontSize: 10, fontFace: FONT, bold: true, color: C.teal, letterSpacing: 1.5
  });
  s.addText("'Construindo o produto certo?'", {
    x: 6.8, y: 2.2, w: 5.0, h: 0.35,
    fontSize: 14, fontFace: FONT, bold: true, color: C.white
  });

  const validItems = [
    "Foco: Atendimento às necessidades reais do usuário",
    "Ambiente: Playwright (Caixa Preta no Navegador)",
    "Cenário de Teste: Fluxo completo de matrícula do aluno",
    "Resultado: Se o sistema salvar o aluno mas a tela não atualizar o status de pagamento, o produto NÃO ATENDE ao gestor; a validação visual reprova"
  ];
  s.addText(validItems.map(it => `• ${it}`).join("\n\n"), {
    x: 6.8, y: 2.65, w: 5.0, h: 2.1,
    fontSize: 11, fontFace: FONT, color: C.light, lineSpacing: 16
  });
}

// ==========================================
// SLIDE 6: FLUXO E2E DO USUÁRIO
// ==========================================
{
  const s = pptx.addSlide();
  s.background = { color: C.bg };
  addHeader(s, "Automação no Navegador", "Teste E2E: Jornada do Usuário", "Execução automatizada com Playwright gerando vídeo em Chromium");
  addFooter(s);

  // 5 Etapas Minimalistas
  const steps = [
    { n: "01", name: "Login", desc: "Acesso administrativo" },
    { n: "02", name: "Alunos", desc: "Cadastro e CPF" },
    { n: "03", name: "Avaliação", desc: "Cálculo do IMC" },
    { n: "04", name: "Planos", desc: "Seleção do pacote" },
    { n: "05", name: "Pagamento", desc: "Baixa da mensalidade" }
  ];

  steps.forEach((st, i) => {
    const x = 0.8 + i * 2.3;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 1.8, w: 2.15, h: 1.35,
      fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
    });

    s.addText(st.n, {
      x: x + 0.15, y: 1.9, w: 1.85, h: 0.3,
      fontSize: 16, fontFace: FONT, bold: true, color: C.cyan
    });
    s.addText(st.name, {
      x: x + 0.15, y: 2.2, w: 1.85, h: 0.3,
      fontSize: 13, fontFace: FONT, bold: true, color: C.white
    });
    s.addText(st.desc, {
      x: x + 0.15, y: 2.5, w: 1.85, h: 0.55,
      fontSize: 9.5, fontFace: FONT, color: C.muted
    });

    if (i < 4) {
      s.addText("→", {
        x: x + 2.1, y: 2.15, w: 0.3, h: 0.4,
        fontSize: 16, fontFace: FONT, bold: true, color: C.cyan, align: "center"
      });
    }
  });

  // Caixa de Destaques
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 3.45, w: 11.35, h: 1.5,
    fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
  });
  s.addText("RECURSOS DE TESTE IMPLEMENTADOS", {
    x: 1.05, y: 3.65, w: 10.5, h: 0.25,
    fontSize: 9.5, fontFace: FONT, bold: true, color: C.teal, letterSpacing: 1.2
  });
  s.addText("• Autenticação Dinâmica: Sessão e token validados antes de operações restritas.\n• Geração de CPFs Válidos: Evita conflito com registros prévios no banco de dados.\n• Evidência em Vídeo: Cada suíte grava um arquivo de vídeo .webm em test-results/ para comprovação.", {
    x: 1.05, y: 3.95, w: 10.8, h: 0.9,
    fontSize: 11.5, fontFace: FONT, color: C.light, lineSpacing: 18
  });
}

// ==========================================
// SLIDE 7: RESULTADOS E MÉTRICAS
// ==========================================
{
  const s = pptx.addSlide();
  s.background = { color: C.bg };
  addHeader(s, "Resultados Consolidados", "Métricas da Suíte de Testes", "Desempenho aprovado em todos os níveis exigidos no Barema");
  addFooter(s);

  const metrics = [
    { num: "11 / 11", label: "Testes Unitários", sub: "JUnit 5 + AssertJ", col: C.cyan },
    { num: "6", label: "Endpoints de API", sub: "Coleção Postman (100% OK)", col: C.teal },
    { num: "5 / 5", label: "Cenários E2E", sub: "Playwright no Chromium", col: C.blue },
    { num: "100", label: "Reqs de Carga", sub: "Apache JMeter (0% erro)", col: C.green }
  ];

  metrics.forEach((m, i) => {
    const x = 0.8 + i * 2.85;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 1.8, w: 2.7, h: 1.8,
      fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
    });

    s.addText(m.num, {
      x: x + 0.1, y: 1.95, w: 2.5, h: 0.65,
      fontSize: 34, fontFace: FONT, bold: true, color: m.col, align: "center"
    });
    s.addText(m.label, {
      x: x + 0.1, y: 2.65, w: 2.5, h: 0.35,
      fontSize: 13, fontFace: FONT, bold: true, color: C.white, align: "center"
    });
    s.addText(m.sub, {
      x: x + 0.1, y: 3.0, w: 2.5, h: 0.45,
      fontSize: 10, fontFace: FONT, color: C.muted, align: "center"
    });
  });

  // Linha de Rodapé
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 3.85, w: 11.35, h: 1.1,
    fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
  });
  s.addText("AUTOMAÇÃO & COBERTURA", {
    x: 1.05, y: 4.0, w: 10.5, h: 0.25,
    fontSize: 9.5, fontFace: FONT, bold: true, color: C.cyan, letterSpacing: 1.2
  });
  s.addText("Execução automatizada via scripts .bat no Windows. Relatório analítico de cobertura de código gerado pelo plugin JaCoCo (Maven) comprovando a amplitude dos testes.", {
    x: 1.05, y: 4.3, w: 10.8, h: 0.55,
    fontSize: 11, fontFace: FONT, color: C.light
  });
}

// ==========================================
// SLIDE 8: DEPLOY E ENCERRAMENTO
// ==========================================
{
  const s = pptx.addSlide();
  s.background = { color: C.bg };
  addHeader(s, "Disponibilidade", "Deploy em Produção & Encerramento", "Ambiente online acessível e código versionado no GitHub");
  addFooter(s);

  // Card Frontend
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.7, w: 5.4, h: 1.6,
    fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
  });
  s.addText("FRONTEND NA NUVEM", {
    x: 1.05, y: 1.9, w: 4.8, h: 0.25,
    fontSize: 9.5, fontFace: FONT, bold: true, color: C.cyan, letterSpacing: 1.2
  });
  s.addText("Vercel (Produção)", {
    x: 1.05, y: 2.15, w: 4.8, h: 0.35,
    fontSize: 15, fontFace: FONT, bold: true, color: C.white
  });
  s.addText("Interface SPA responsiva integrada em tempo real com a API REST.", {
    x: 1.05, y: 2.55, w: 4.8, h: 0.6,
    fontSize: 11, fontFace: FONT, color: C.light
  });

  // Card Backend
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.75, y: 1.7, w: 5.4, h: 1.6,
    fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
  });
  s.addText("BACKEND NA NUVEM", {
    x: 7.0, y: 1.9, w: 4.8, h: 0.25,
    fontSize: 9.5, fontFace: FONT, bold: true, color: C.teal, letterSpacing: 1.2
  });
  s.addText("Railway (Docker Container)", {
    x: 7.0, y: 2.15, w: 4.8, h: 0.35,
    fontSize: 15, fontFace: FONT, bold: true, color: C.white
  });
  s.addText("Java 21 + Spring Boot com banco SQLite persistente e SSL ativo.", {
    x: 7.0, y: 2.55, w: 4.8, h: 0.6,
    fontSize: 11, fontFace: FONT, color: C.light
  });

  // Card GitHub & Perguntas
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 3.5, w: 11.35, h: 1.45,
    fill: { color: C.card }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.12
  });
  s.addText("REPOSITÓRIO NO GITHUB", {
    x: 1.05, y: 3.7, w: 7.0, h: 0.25,
    fontSize: 9.5, fontFace: FONT, bold: true, color: C.blue, letterSpacing: 1.2
  });
  s.addText("github.com/isaacalonco/ACADEMY-PROJECT-FIT-UP", {
    x: 1.05, y: 4.0, w: 7.5, h: 0.4,
    fontSize: 15, fontFace: FONT, bold: true, color: C.white
  });
  s.addText("Código fonte, automações, casos de teste e planos de carga.", {
    x: 1.05, y: 4.4, w: 7.5, h: 0.4,
    fontSize: 10.5, fontFace: FONT, color: C.muted
  });

  s.addText("DÚVIDAS?", {
    x: 8.8, y: 3.8, w: 3.0, h: 0.8,
    fontSize: 24, fontFace: FONT, bold: true, color: C.cyan, align: "center", valign: "middle"
  });
}

// Salvar Apresentação
const outputPath = path.resolve(__dirname, "../../Apresentacao_FIT_UP_Minimalista.pptx");
pptx.writeFile({ fileName: outputPath })
  .then(fileName => {
    console.log("Apresentação minimalista gerada em:", fileName);
  })
  .catch(err => {
    console.error("Erro ao gerar PowerPoint:", err);
    process.exit(1);
  });
