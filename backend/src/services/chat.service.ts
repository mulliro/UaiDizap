import statusCode from '../utils/statusCode';
import GenerateError from '../utils/GenerateError';
import { models } from '../models';
import { IChatAttributes, IChatCreationAttributes } from '../interfaces';

const ChatService = () => {
  const { Chat } = models;
  const { INTERNAL_SERVER_ERROR, NOT_FOUND } = statusCode;

  // Create a new chat
  const createChat = async (role: IChatCreationAttributes): Promise<IChatAttributes> => {
    return await Chat.create(role);
  };

  // Get a chat by ID
  const getChatById = async (id: number): Promise<IChatAttributes> => {
    const chat = await Chat.findByPk(id);
    if (!chat) {
      throw new GenerateError(NOT_FOUND, 'Chat não encontrado');
    }
    return chat;
  };

  // Get all chats
  const getAllChats = async (): Promise<IChatAttributes[]> => {
    const chats = await Chat.findAll();
    if (!chats) {
      throw new GenerateError(INTERNAL_SERVER_ERROR, 'Nenhum chat encontrado');
    }
    return chats;
  };

  const deleteChat = async (id: number): Promise<IChatAttributes> => {
    const chat = await Chat.findByPk(id);
    if (!chat) {
      throw new GenerateError(NOT_FOUND, 'Chat não encontrado');
    }
    await chat.destroy();
    return chat;
  };

  return { createChat, getChatById, getAllChats, deleteChat };
};

export default ChatService;