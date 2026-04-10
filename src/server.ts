import fastify from "fastify";
import cors from "@fastify/cors";

interface RequestParams { id: string; }

const server = fastify({ logger: true });
server.register(cors, { origin: "*", methods: ["GET"] });

const leagues = [
    { id: 1, name: "Brasileirão", country: "Brasil", federation: "CBF", confederation: "CONMEBOL" },
    { id: 2, name: "Premier League", country: "Inglaterra", federation: "FA", confederation: "UEFA" },
    { id: 3, name: "La Liga", country: "Espanha", federation: "RFEF", confederation: "UEFA" },
    { id: 4, name: "Serie A", country: "Itália", federation: "FIGC", confederation: "UEFA" },
    { id: 5, name: "Bundesliga", country: "Alemanha", federation: "DFB", confederation: "UEFA" },
    { id: 6, name: "Ligue 1", country: "França", federation: "FFF", confederation: "UEFA" },
    { id: 7, name: "Primeira Liga", country: "Portugal", federation: "FPF", confederation: "UEFA" },
    { id: 8, name: "Eredivisie", country: "Holanda", federation: "KNVB", confederation: "UEFA" },
    { id: 9, name: "Russian Premier League", country: "Rússia", federation: "RFS", confederation: "UEFA" },
    { id: 10, name: "J1 League", country: "Japão", federation: "JFA", confederation: "AFC" },
    { id: 11, name: "Major League Soccer", country: "Estados Unidos", federation: "MLS", confederation: "CONCACAF" },
    { id: 12, name: "Super Lig", country: "Turquia", federation: "TFF", confederation: "UEFA" },
    { id: 13, name: "A-League", country: "Austrália", federation: "FFA", confederation: "OFC" },
    { id: 14, name: "Chinese Super League", country: "China", federation: "CFA", confederation: "AFC" },
    { id: 15, name: "Argentine Primera División", country: "Argentina", federation: "AFA", confederation: "CONMEBOL" },
];

const teams = [
    { id: 1, name: "Santos", league: "Brasileirão", colors: ["#000000", "#FFFFFF"], founded: 1912, stadium: "Vila Belmiro", city: "Santos", nationalTitles: 8, continentalTitles: 3 },
    { id: 2, name: "Flamengo", league: "Brasileirão", colors: ["#FF0000","#000000", "#FFFFFF"], founded: 1898, stadium: "Maracanã", city: "Rio de Janeiro", nationalTitles: 7, continentalTitles: 4 },
    { id: 3, name: "Palmeiras", league: "Brasileirão", colors: ["#008000", "#FFFFFF"], founded: 1914, stadium: "Allianz Parque", city: "São Paulo", nationalTitles: 13, continentalTitles: 3 },
    { id: 4, name: "Corinthians", league: "Brasileirão", colors: ["#000000", "#FFFFFF"], founded: 1910, stadium: "Neo Química Arena", city: "São Paulo", nationalTitles: 7, continentalTitles: 1 },
    { id: 5, name: "Barcelona", league: "La Liga", colors: ["#0000FF", "#FF0000"], founded: 1899, stadium: "Camp Nou", city: "Barcelona", nationalTitles: 26, continentalTitles: 5 },
    { id: 6, name: "Real Madrid", league: "La Liga", colors: ["#FFFFFF"], founded: 1902, stadium: "Santiago Bernabéu", city: "Madrid", nationalTitles: 34, continentalTitles: 14 },
    { id: 7, name: "Manchester United", league: "Premier League", colors: ["#FF0000"], founded: 1878, stadium: "Old Trafford", city: "Manchester", nationalTitles: 20, continentalTitles: 3 },
    { id: 8, name: "Liverpool", league: "Premier League", colors: ["#FF0000"], founded: 1892, stadium: "Anfield", city: "Liverpool", nationalTitles: 19, continentalTitles: 6 },
    { id: 9, name: "Bayern Munich", league: "Bundesliga", colors: ["#FF0000"], founded: 1900, stadium: "Allianz Arena", city: "Munich", nationalTitles: 31, continentalTitles: 6 },
    { id: 10, name: "Paris Saint-Germain", league: "Ligue 1", colors: ["#0000FF", "#FF0000"], founded: 1970, stadium: "Parc des Princes", city: "Paris", nationalTitles: 9, continentalTitles: 0 },
    { id: 11, name: "São Paulo", league: "Brasileirão", colors: ["#FFFFFF", "#FF0000", "#000000"], founded: 1930, stadium: "Morumbi", city: "São Paulo", nationalTitles: 6, continentalTitles: 3 },
    { id: 12, name: "Grêmio", league: "Brasileirão", colors: ["#01a0ac", "#000000", "#FFFFFF"], founded: 1903, stadium: "Arena do Grêmio", city: "Porto Alegre", nationalTitles: 2, continentalTitles: 3 },
    { id: 13, name: "Internacional", league: "Brasileirão", colors: ["#FF0000", "#FFFFFF"], founded: 1909, stadium: "Beira-Rio", city: "Porto Alegre", nationalTitles: 3, continentalTitles: 2 },
    { id: 14, name: "Chelsea", league: "Premier League", colors: ["#0000FF"], founded: 1905, stadium: "Stamford Bridge", city: "London", nationalTitles: 6, continentalTitles: 2 },
    { id: 15, name: "Manchester City", league: "Premier League", colors: ["#87CEEB"], founded: 1880, stadium: "Etihad Stadium", city: "Manchester", nationalTitles: 9, continentalTitles: 1 },
    { id: 16, name: "Juventus", league: "Serie A", colors: ["#000000", "#FFFFFF"], founded: 1897, stadium: "Allianz Stadium", city: "Turin", nationalTitles: 36, continentalTitles: 2 },
    { id: 17, name: "Milan", league: "Serie A", colors: ["#FF0000", "#000000"], founded: 1899, stadium: "San Siro", city: "Milan", nationalTitles: 19, continentalTitles: 7 },
    { id: 18, name: "Ajax", league: "Eredivisie", colors: ["#FFFFFF", "#FF0000"], founded: 1900, stadium: "Johan Cruyff Arena", city: "Amsterdam", nationalTitles: 36, continentalTitles: 4 },
    { id: 19, name: "Porto", league: "Primeira Liga", colors: ["#0000FF", "#FFFFFF"], founded: 1893, stadium: "Estádio do Dragão", city: "Porto", nationalTitles: 30, continentalTitles: 2 },
    { id: 20, name: "Boca Juniors", league: "Argentine Primera División", colors: ["#0000FF", "#FFFF00"], founded: 1905, stadium: "La Bombonera", city: "Buenos Aires", nationalTitles: 35, continentalTitles: 6 },
];

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
});

server.get("/leagues", async (request, response) => {
    response.type("application/json").code(200);
    return { leagues };
});

server.get<{ Params: RequestParams }>("/leagues/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const league = leagues.find((l) => l.id === id);

    if (!league) 
    {
        response.type("application/json").code(404);
        return { message: "League Not Found" };
    } 
    else 
    {
        response.type("application/json").code(200);
        return { league };
    }
  }
);

server.get<{ Params: RequestParams }>("/teams/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const team = teams.find((t) => t.id === id);

    if (!team) 
    {
        response.type("application/json").code(404);
        return { message: "Team Not Found" };
    } 
    else 
    {
        response.type("application/json").code(200);
        return { team };
    }
  }
);

server.listen({ port: 3333 }, () => console.log("Server init"));