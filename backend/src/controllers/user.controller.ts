import { Request, Response } from 'express';
import { createUser, getUserById, getAllUsers } from '../services/user.service';
import statusCode from '../utils/statusCode';

const { CREATED, OK } = statusCode;

export const createUserController = async (req: Request, res: Response): Promise<void> => {
  const userData = req.body;
  const user = await createUser(userData);
  res.status(CREATED).json(user);
};

export const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const user = await getUserById(Number(id));
  res.status(OK).json(user);
};

export const getAllUsersController = async (_req: Request, res: Response): Promise<void> => {
  const users = await getAllUsers();
  res.status(OK).json(users);
};