# 🛒 CRUD de Produtos — Bureau Veritas

Sistema simples de cadastro de produtos com operações completas de CRUD, desenvolvido como teste prático para o processo seletivo de Estágio em TI da Bureau Veritas.

---

## 🛠️ Tecnologias

- **Back-End:** Node.js + Express
- **Banco de Dados:** MySQL
- **Front-End:** HTML, CSS, JavaScript puro

---

## 📋 Funcionalidades

- Cadastrar produto
- Cadastrar múltiplos produtos em lote (batch)
- Listar todos os produtos
- Editar produto por ID
- Deletar produto por ID
- Ordenação dinâmica ASC/DESC por ID, Valor, Usuário e Data de Cadastro

---

## 🗄️ Script SQL

```sql
CREATE DATABASE crud_bureauveritas;
USE crud_bureauveritas;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    usuario VARCHAR(100) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔗 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /produtos | Lista todos os produtos |
| GET | /produtos/:id | Busca produto por ID |
| POST | /produtos | Cadastra um produto |
| POST | /produtos/batch | Cadastra múltiplos produtos |
| PUT | /produtos/:id | Atualiza produto por ID |
| DELETE | /produtos/:id | Deleta produto por ID |

### Exemplo — POST /produtos/batch

```json
[
    {"descricao": "Teclado Mecânico", "quantidade": 3, "valor": 250.00, "usuario": "Fulano"},
    {"descricao": "Mouse Gamer", "quantidade": 5, "valor": 180.00, "usuario": "Sicrano"},
    {"descricao": "Monitor 24pol", "quantidade": 2, "valor": 1200.00, "usuario": "Beltrano"}
]
```

---

## ▶️ Como Rodar

### Pré-requisitos
- Node.js instalado
- MySQL rodando localmente (XAMPP ou instalação nativa)

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/K4rlous/Projects
```

2. Acesse a pasta do projeto:
```bash
cd CRUD-BureauVeritas
```

3. Instale as dependências:
```bash
npm install
```

4. Configure o arquivo `.env`:
```
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=crud_bureauveritas
DB_PORT=3306
```

5. Execute o script SQL para criar o banco e a tabela.

6. Inicie o servidor:
```bash
node src/index.js
```

7. Acesse no navegador:
```
http://localhost:3000
```

---

## 🤖 Uso de Inteligência Artificial

Este projeto foi desenvolvido com suporte de IA (Claude - Anthropic) como ferramenta de aprendizado, não como substituto do raciocínio técnico.

Meu stack principal é Java com Spring Boot. Para referência, desenvolvi anteriormente uma API REST completa com CRUD em Java:
[SpringbootAPI](https://github.com/K4rlous/Projects/tree/main/SpringbootAPI)

A lógica aplicada neste projeto é equivalente — a IA me ajudou a transpor o raciocínio que já dominava em Java para Node.js e Express, fazendo comparações diretas entre as duas stacks:

| Conceito           | Java/Spring Boot   | Node.js/Express |
|--------------------|--------------------|-----------------|
| Rota               | `@GetMapping`      | `router.get()`  |
| Body da requisição | `@RequestBody`     | `req.body`      |
| Resposta           | `ResponseEntity`   | `res.json()`    |
| Conexão DB         | Hibernate/JDBC     | mysql2          |
| Batch save         | `saveAll()`        | `INSERT ... VALUES ?` |


