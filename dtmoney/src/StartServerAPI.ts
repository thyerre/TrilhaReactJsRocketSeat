import { createServer, Model } from "miragejs";

export function StartServerAPI() {
  createServer({
    models: {
      transaction: Model,
    },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "transation 1",
            amount: 1000,
            category: "Food",
            createAt: new Date(),
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/transactions", () => {
        return this.schema.all("transaction");
      });

      this.post("/transactions", (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create("transaction", data);
      });
    },
  });
}
