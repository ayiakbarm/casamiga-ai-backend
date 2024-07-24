import { Context, t } from "elysia";
import { AddUserUseCase } from "../../../../applications/use-cases/add-user-use-case";
import { UserRepositoryMongo } from "../../../../infrastructures/repository/user-repository-mongo";
import { AddUserDomainInterface } from "../../../../domains/users/entities/add-user-entity";

export class UsersHandler {
  async postUserSignUpHandler(ctx: Context) {
    try {
      const requestBody = ctx.body as AddUserDomainInterface;

      const userRepository = new UserRepositoryMongo();
      const addUserUseCase = new AddUserUseCase({ userRepository });

      const result = await addUserUseCase.execute(requestBody);

      ctx.set.status = 201;
      return {
        status: "success",
        message: "user created successfully",
        data: result,
      };
    } catch (error) {
      console.error("Unexpected error:", error);

      // More specific error handling based on error type
      if (error instanceof SyntaxError) {
        ctx.set.status = 400;
        return {
          status: "error",
          message: "Invalid JSON format",
        };
      }

      ctx.set.status = 500;
      return {
        status: "error",
        message: "Failed to create user",
      };
    }
  }

  validateCreateUser = t.Object({
    username: t.String(),
    email: t.String(),
    password: t.String(),
  });
}
