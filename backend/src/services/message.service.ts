import { models } from '../models/index';

const MessageService = () => {
    const { User, Message, Chat } = models;

    const createMessage = async (data: {
        chat_id: number;
        sender_id: number;
        content: string;
    }) => {
        return await Message.create(data);
    };

    const getMessagesByChat = async (chat_id: number) => {
        return await Message.findAll({
        where: { chat_id },
        include: [
            { model: User, as: 'sender', attributes: ['id', 'username'] },
            { model: Chat, attributes: ['id', 'chat_type'] },
        ],
        order: [['createdAt', 'ASC']],
        });
    };

    const getMessageById = async (id: number) => {
        return await Message.findByPk(id, {
        include: [
            { model: User, as: 'sender', attributes: ['id', 'username'] },
            { model: Chat, attributes: ['id', 'chat_type'] },
        ],
        });
    };

    const updateMessage = async (id: number, data: Partial<typeof Message>) => {
        return await Message.update(data, {
        where: { id },
        returning: true,
        });
    };

    const deleteMessage = async (id: number) => {
        return await models.Message.destroy({
        where: { id },
        });
    };

    return {
        createMessage,
        getMessagesByChat,
        getMessageById,
        updateMessage,
        deleteMessage,
    };
};

export default MessageService;