import { models } from '../models';
import { IUserAttributes, IUserCreationAttributes } from '../interfaces';
import statusCode from '../utils/statusCode';
import GenerateError from '../utils/GenerateError';

const { User } = models;
const { INTERNAL_SERVER_ERROR, NOT_FOUND } = statusCode;

export const createUser = async (userData: IUserCreationAttributes): Promise<IUserAttributes> => {
  return await User.create(userData);
};

export const getUserById = async (id: number): Promise<IUserAttributes> => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new GenerateError(NOT_FOUND, 'Usuário não encontrado');
  }
  return user;
};

export const getAllUsers = async (): Promise<IUserAttributes[]> => {
  const users = await User.findAll();
  console.log(users);
  if (!users) {
    throw new GenerateError(INTERNAL_SERVER_ERROR, 'Nenhum erro');
  }
  return users;
};