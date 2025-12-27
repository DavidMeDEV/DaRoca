# 🌱 Da Roça – Marketplace de Produtos da Agricultura Familiar

**Da Roça** é uma aplicação web desenvolvida com **Angular** que conecta **agricultores familiares** a **consumidores locais**, permitindo a visualização e compra de produtos agrícolas frescos por meio de um sistema simples, organizado e acessível.

O projeto tem como objetivo **fomentar o comércio local**, apoiar pequenos produtores e servir como **projeto de portfólio**, demonstrando boas práticas de desenvolvimento frontend e modelagem de domínio.

---

## 🎯 Objetivo do Projeto

- Facilitar a venda de produtos da agricultura familiar  
- Permitir que produtores cadastrem seus produtos para comercialização
- Exibir produtos organizados por tipo (alface, tomate, etc.)  
- Mostrar diferentes vendedores, preços e disponibilidade  

---

## 🧩 Funcionalidades

- Página inicial com **categorias de produtos**
- Navegação por **rotas dinâmicas**
- Listagem de produtos filtrados por tipo
- Exibição de:
  - Nome do produto
  - Preço
  - Quantidade disponível
  - Produtor responsável
- Arquitetura baseada em **services**
- Dados mockados (simulação de backend)
- Layout responsivo com cards

---

## 🧠 Arquitetura e Conceitos Utilizados

- Angular Standalone Components
- Angular Router
  - Rotas com parâmetros (`/products/:type`)
  - Navegação programática
- Services para regras de negócio
- Modelagem de domínio
  - Produto
  - Produtor
- Separação de responsabilidades
- Estrutura preparada para integração futura com API REST

---

## 🛠️ Tecnologias Utilizadas

- Angular 17+
- TypeScript
- HTML5
- CSS3
- Angular Router
- Pipes nativos (Currency Pipe – BRL)

---

## 📁 Estrutura do Projeto

O projeto segue uma arquitetura **baseada em domínio (feature-based)**, separando responsabilidades globais, funcionalidades e componentes reutilizáveis.

```text
src/
 ├── app/
 │   ├── core/
 │   │   ├── guards/
 │   │   ├── interceptors/
 │   │   ├── models/
 │   │   └── services/
 │   │
 │   ├── features/
 │   │   ├── auth/
 │   │   ├── consumer/
 │   │   ├── farmer/
 │   │   ├── home/
 │   │   ├── orders/
 │   │   └── products/
 │   │
 │   ├── shared/
 │   │
 │   ├── app.config.ts
 │   ├── app.css
 │   ├── app.html
 │   ├── app.routes.ts
 │   ├── app.spec.ts
 │   └── app.ts
 │
 └── assets/
