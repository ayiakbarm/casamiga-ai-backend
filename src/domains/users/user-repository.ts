import { AddUserDomainInterface, UserInterface } from "./entities/add-user-entity";

export abstract class UserRepository {
  async createUser(payload: AddUserDomainInterface): Promise<UserInterface> {
    throw new Error("METHOD_NOT_IMPLEMENTED");
  }
}

export interface UserRepositoryInterface {
  createUser(payload: AddUserDomainInterface): Promise<UserInterface>;
}
