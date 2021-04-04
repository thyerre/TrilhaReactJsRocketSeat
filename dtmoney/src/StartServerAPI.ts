import { createServer } from "miragejs";

export function StartServerAPI() {
  createServer({
    routes() {
      this.namespace = "api";
      this.get("/transactions", () => {
        return [
          {
            id: 1,
            title: "transation 1",
            amount: 1000,
            category: "Food",
            createAt: new Date(),
          },
          {
            id: 2,
            title: "transation 2",
            amount: 400,
            category: "Food",
            createAt: new Date(),
          },
          {
            id: 3,
            title: "transation 3",
            amount: 6500,
            category: "Fun",
            createAt: new Date(),
          },
        ];
      });
    },
  });
}
