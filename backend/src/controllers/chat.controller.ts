import { Request, Response } from 'express';
import ChatService from '../services/chat.service';

const { createChat, getAllChats, getChatById, deleteChat } = ChatService();

export const createChatController = async (req: Request, res: Response): Promise<void> =>{
    const chat_type = req.body;

    if (!chat_type) {
        res.status(400).json({ error: 'Participants are required and must be an array.' });
    }

    const newChat = await createChat(chat_type);
    res.status(201).json(newChat);
};

export const getChatByIdController = async (req: Request, res: Response): Promise<void> => {
    const { chatId } = req.params;

    const chat = await getChatById(parseInt(chatId, 10));
    if (!chat) {
        res.status(404).json({ error: 'Chat not found.' });
    }

    res.status(200).json(chat);
};

export const getAllChatsController = async (_req: Request, res: Response): Promise<void> => {
    const chats = await getAllChats();
    res.status(200).json(chats);
}
export const deleteChatController = async (req: Request, res: Response): Promise<void> => {    
    const { chatId } = req.params;

    const deletedChat = await deleteChat(parseInt(chatId, 10));
    if (!deletedChat) {
        res.status(404).json({ error: 'Chat not found.' });
    }

    res.status(200).json(deletedChat);
}