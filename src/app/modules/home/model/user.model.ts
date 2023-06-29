export class UserModel {
  constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }
	
  id?: number = undefined;
  user?: string = undefined;
  password?: string = undefined;
  nome?: string = undefined;
  idade?: number = undefined;
  email?: string = undefined;
  telefone?: string = undefined;
}
