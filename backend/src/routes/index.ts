import { Router } from 'express';
import userRouter from './user.route';
import chatRouter from './chat.route';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/chats', chatRouter);

export default routes;