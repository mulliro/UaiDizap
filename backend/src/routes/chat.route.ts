import { Router } from 'express';
import {
    createChatController,
    getChatByIdController,
    getAllChatsController,
    deleteChatController
} from '../controllers/chat.controller';

const router = Router();

router.post('/', createChatController);
router.get('/:chatId', getChatByIdController); 
router.get('/', getAllChatsController); 
router.delete('/:chatId', deleteChatController); 

export default router;