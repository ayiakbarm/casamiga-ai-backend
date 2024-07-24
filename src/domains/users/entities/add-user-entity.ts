export interface AddUserDomainInterface {
  username: string;
  email: string;
  password: string;
}

export interface UserInterface {
  id: string;
  username: string;
  email: string;
}

export class AddUserEntity {
  private _username: string;
  private _email: string;
  private _password: string;

  constructor(payload: AddUserDomainInterface) {
    const { username, email, password } = payload;

    this._username = username;
    this._email = email;
    this._password = password;
  }

  get username(): string {
    return this._username;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }
}
