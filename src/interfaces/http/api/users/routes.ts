import { Elysia } from "elysia";
import { UsersHandler } from "./handler";

const usersHandler = new UsersHandler();
export const users = new Elysia({ prefix: "/user" })
  .get("/", () => "Hello World")
  // .guard({ body: usersHandler.validateCreateUser }, (guardApp) =>
  //   guardApp.post("/create", usersHandler.postUserSignUpHandler)
  // );
  .post("/create", usersHandler.postUserSignUpHandler);
