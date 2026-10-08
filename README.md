# FIT UP — Suíte de Testes de Software

---

## Visão Geral da Suíte de Testes
Este repositório contém exclusivamente os artefatos de **Teste de Software** do sistema **FIT UP** (Gestão de Academias), organizados de forma modular e em conformidade estrita com o Barema de Avaliação da disciplina:

| Nível de Teste | Conceito (V&V) | Tipo de Teste | Ferramenta | Quantidade | Foco da Validação |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **Unitário** | Verificação | Caixa Branca | JUnit 5 + AssertJ | 11 testes | Regras de validação (CPF, e-mail), fórmula de IMC e faixas nutricionais |
| **API REST** | Verificação | Caixa Preta | Postman / Newman | 6 requests (14 asserções) | Login, token JWT, contratos JSON e status HTTP (testado na nuvem) |
| **E2E / Interface** | Validação | Caixa Preta | Playwright | 5 fluxos | Jornada do usuário no Chromium: autenticação, matrículas e modais |
| **Carga / Stress** | Não-Funcional | Desempenho | Apache JMeter | 100 requisições | 20 usuários concorrentes avaliando resiliência do servidor Railway |
| **Cobertura** | Métricas de Código | Análise Dinâmica | JaCoCo (Maven) | Relatório HTML/XML | Mapeamento da abrangência do código Java testado |

---

## Estrutura do Repositório

```text

├── backend/                              # Código Java essencial e pom.xml com JUnit e JaCoCo
│   ├── pom.xml                           # Configuração Maven com JUnit 5, AssertJ e JaCoCo
│   └── src/                              # Classes de domínio e validação testadas
├── docs/                                 # Documentos formais exigidos no Barema
│   ├── DOCUMENTACAO_OFICIAL_TESTES_FIT_UP.md # Casos de Teste (CTs) e rastreabilidade
│   ├── FIT_UP_Documento_de_Visao_do_Sistema.pdf # Visão, escopo e stakeholders
│   └── FIT_UP_Relatorio_Etapa1.pdf       # Relatório acadêmico da etapa
└── tests/                                # Central de automação de testes
    ├── junit/                            # Testes unitários com asserções fluentes AssertJ
    ├── postman_collection.json           # Coleção oficial para execução no Postman / Newman
    ├── jmeter/
    │   └── LoadTest_FITUP.jmx            # Plano de teste de carga (20 usuários simultâneos)
    ├── e2e/                              # Testes de ponta a ponta com Playwright
    │   ├── playwright.config.js          # Configuração (headless, gravação de vídeo .webm)
    │   └── tests/                        # 5 suítes cobrindo auth, alunos, planos e dashboard
    └── README.md                         # Guia de execução rápida dos testes
```

---

## Como Executar os Testes

### 1. Testes Unitários & Cobertura (JUnit 5 + AssertJ + JaCoCo)
```bash
cd backend
mvn test
# O relatório JaCoCo é gerado em: backend/target/site/jacoco/index.html
```

### 2. Testes de API (Postman / Newman)
Importe o arquivo `tests/postman_collection.json` no Postman e execute a collection contra o ambiente de produção:
* **Base URL da API:** `https://academy-project-fit-up-production.up.railway.app`

### 3. Testes E2E (Playwright)
```bash
cd tests/e2e
npm install
npx playwright test
```

### 4. Teste de Carga (Apache JMeter)
Abra o JMeter, carregue `tests/jmeter/LoadTest_FITUP.jmx` e clique no botão **Start** para executar as 100 requisições concorrentes.

---

## Ambientes em Produção
* **Frontend Web:** Disponível na Vercel (SPA integrada)
* **Backend REST:** `https://academy-project-fit-up-production.up.railway.app` (Railway Docker Container)
