import models from '../models';
const { User } = models;

export class UserService {
  async getUserById(id: number) {
    return await User.findByPk(id);
  }

  async getAllUsers() {
    return await User.findAll();
  }
}
