import { AddUserDomainInterface, AddUserEntity } from "../../domains/users/entities/add-user-entity";
import { UserRepositoryInterface } from "../../domains/users/user-repository";

export class AddUserUseCase {
  private _userRepository: UserRepositoryInterface;
  constructor({ userRepository }: { userRepository: UserRepositoryInterface }) {
    this._userRepository = userRepository;
  }

  async execute(useCasePayload: AddUserDomainInterface) {
    const registerUser = new AddUserEntity(useCasePayload);

    return await this._userRepository.createUser(registerUser);
  }
}
