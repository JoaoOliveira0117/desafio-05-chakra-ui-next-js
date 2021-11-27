import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";

type City = {
  name: string;
  country: string;
};

interface Continent {
  slug: string;
  name: string;
  description: string;
  countries: number;
  languages: number;
  cityCount: number;
  cities: City[];
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      continent: Model.extend<Partial<Continent>>({}),
    },

    factories: {
      continent: Factory.extend({
        slug: "europa",
        name: "Europa",
        description:
          "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        countries: 50,
        languages: 60,
        cityCount: 27,
        cities: [
          {
            name: "Londres",
            country: "Reino Unido",
          },
          {
            name: "Paris",
            country: "França",
          },
          {
            name: "Roma",
            country: "Itália",
          },
          {
            name: "Praga",
            country: "República Tcheca",
          },
          {
            name: "Amsterdã",
            country: "Holanda",
          },
        ],
      }),
    },

    seeds(server) {
      server.createList("continent", 1);
    },

    routes() {
      this.namespace = "api";

      this.get("/continents", function (schema, request) {
        const continents = schema.all("continent");

        return new Response(200, {}, continents);
      });

      this.get("/continent/:id");
    },
  });

  return server;
}
