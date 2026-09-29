# Central de Documentação da Etapa 1 — FIT UP
## Disciplina: TESTE DE SOFTWARE (GPE02M30026) — UCB
**Professor:** Samuel Novais Moura Júnior  

---

### Documentos e Relatórios:

(`FIT_UP_Documento_de_Visao_do_Sistema.pdf`): Escopo, partes interessadas, requisitos e regras de negócio do FIT UP.

---

###  Scripts Físicos de Banco de Dados:
Os scripts executáveis encontram-se na pasta [`../sql/`]
- **[`01_ddl.sql`]**: Criação física com restrições padronizadas (`pk_`, `uq_`, `fk_`, `ck_`, `idx_`) e integridade referencial com `ON DELETE` e `ON UPDATE`.
- **[`02_carga.sql`]**: Carga sintética com 50 indivíduos e 114 pagamentos, contemplando casos de contorno.
- **[`03_consultas.sql`]**: 15 Consultas comentadas (5 Básicas, 5 Junções/Agregação, 5 Avançadas com subconsultas e `EXISTS`).

###  Pasta de Testes:

- **[`e2e`]**: Testes de ponta a ponta.
- **[`junit`]**: Testes Unitários.

