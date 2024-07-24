import { AddUserDomainInterface, UserInterface } from "../../domains/users/entities/add-user-entity";
import User from "../../domains/users/entities/user-model";
import { UserRepository } from "../../domains/users/user-repository";

export class UserRepositoryMongo implements UserRepository {
  async createUser(payload: AddUserDomainInterface): Promise<UserInterface> {
    try {
      const { username, email, password } = payload;
      // await verifyUsername(username);

      const hashedPassword = await Bun.password.hash(password, {
        algorithm: "bcrypt",
        cost: 10,
      });

      const user = new User({
        username: username,
        email: email,
        password: hashedPassword,
      });
      const userSave = await user.save();

      return {
        id: userSave._id as string,
        email: userSave.email,
        username: userSave.username,
      };
    } catch (error) {
      console.error("error while creating user", error);
      throw error;
    }
  }
}
