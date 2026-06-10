# Trabalho Final - Javascript com Testes Automatizados

Este projeto foi desenvolvido como trabalho final da disciplina, com o objetivo de praticar Javascript, testes automatizados e integração contínua.

Foi criada uma classe chamada `ServicoDePagamento`, responsável por realizar pagamentos e consultar o último pagamento realizado.

## Tecnologias utilizadas

- Javascript
- Node.js
- Mocha
- Node Assert
- GitHub
- GitHub Actions

## Estrutura do projeto

### Pasta `src`
Contém a classe `ServicoDePagamento`, responsável pela lógica dos pagamentos.

### Pasta `test`
Contém os testes automatizados da aplicação.

## Funcionalidades

### Realizar pagamento
O método `pagar()` recebe:

- Código de barras
- Empresa
- Valor

Se o valor for maior que `100`, a categoria será:

`cara`

Caso contrário:

`padrão`

### Consultar último pagamento
O método `consultarUltimoPagamento()` retorna apenas o último pagamento realizado.

## Como executar o projeto

Instalar dependências:

npm install

Executar testes:

npm test

## Pipeline CI/CD

Foi criada uma pipeline utilizando GitHub Actions para executar automaticamente os testes do projeto.