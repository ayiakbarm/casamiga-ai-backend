import { Elysia } from "elysia";
import { DbConnection } from "./infrastructures/database/mongod";
import { users } from "./interfaces/http/api/users/routes";

const app = new Elysia()
  .use(users)
  .get("/", () => "Hello Elysia")
  .listen(3000);
await DbConnection();
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
