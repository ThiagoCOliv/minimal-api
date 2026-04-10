# Minimal API - Football Leagues & Teams

Uma API minimalista desenvolvida com Fastify e TypeScript que fornece informações sobre ligas e times de futebol de diversos países.

## 🚀 Tecnologias Utilizadas

- **Fastify** - Framework web rápido e eficiente
- **TypeScript** - Superset tipado do JavaScript
- **@fastify/cors** - Plugin para tratamento de CORS

## 📦 Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd minimal-api

# Instale as dependências
npm install
```

## 🏃‍♂️ Como Executar

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run start:dist
```

O servidor será iniciado na porta 3333.

## 📚 Endpoints da API

### GET /teams
Retorna uma lista com todos os times disponíveis.

**Resposta:**
```json
{
  "teams": [
    {
      "id": 1,
      "name": "Santos",
      "league": "Brasileirão",
      "colors": ["#000000", "#FFFFFF"],
      "founded": 1912,
      "stadium": "Vila Belmiro",
      "city": "Santos",
      "nationalTitles": 8,
      "continentalTitles": 3
    }
    // ... mais times
  ]
}
```

### GET /leagues
Retorna uma lista com todas as ligas disponíveis.

**Resposta:**
```json
{
  "leagues": [
    {
      "id": 1,
      "name": "Brasileirão",
      "country": "Brasil",
      "federation": "CBF",
      "confederation": "CONMEBOL"
    }
    // ... mais ligas
  ]
}
```

### GET /leagues/:id
Retorna informações de uma liga específica baseada no ID.


**Parâmetros:**
- `id` (number): ID da liga

**Resposta de Sucesso (200):**
```json
{
  "league": {
    "id": 1,
    "name": "Brasileirão",
    "country": "Brasil",
    "federation": "CBF",
    "confederation": "CONMEBOL"
  }
}
```

**Resposta de Erro (404):**
```json
{
  "message": "League Not Found"
}
```

### GET /teams/:id
Retorna informações de um time específico baseado no ID.


**Parâmetros:**
- `id` (number): ID do time

**Resposta de Sucesso (200):**
```json
{
    "team": { 
        "id": 1, 
        "name": "Santos", 
        "league": "Brasileirão", 
        "colors": ["#000000", "#FFFFFF"], 
        "founded": 1912, 
        "stadium": "Vila Belmiro", 
        "city": "Santos", 
        "nationalTitles": 8, 
        "continentalTitles": 3 
    }
}
```

**Resposta de Erro (404):**
```json
{
  "message": "Team Not Found"
}
```

## 🌍 Ligas Disponíveis

A API inclui dados de ligas dos seguintes países:

- 🇧🇷 Brasil (Brasileirão)
- 🇬🇧 Inglaterra (Premier League)
- 🇪🇸 Espanha (La Liga)
- 🇮🇹 Itália (Serie A)
- 🇩🇪 Alemanha (Bundesliga)
- 🇫🇷 França (Ligue 1)
- 🇵🇹 Portugal (Primeira Liga)
- 🇳🇱 Holanda (Eredivisie)
- 🇷🇺 Rússia (Russian Premier League)
- 🇯🇵 Japão (J1 League)
- 🇺🇸 Estados Unidos (Major League Soccer)
- 🇹🇷 Turquia (Super Lig)
- 🇦🇺 Austrália (A-League)
- 🇨🇳 China (Chinese Super League)
- 🇦🇷 Argentina (Argentine Primera División)

## ⚽ Times Disponíveis

A API contém informações detalhadas de 20 times icônicos, incluindo:

- Dados básicos (nome, liga, cores)
- Informações históricas (ano de fundação, títulos nacionais e continentais)
- Localização (cidade, estádio)

## 📝 Estrutura do Projeto

```
minimal-api/
├── src/
│   └── server.ts    # Arquivo principal do servidor
├── package.json     # Dependências e scripts
├── tsconfig.json    # Configuração do TypeScript
└── README.MD        # Este arquivo
```