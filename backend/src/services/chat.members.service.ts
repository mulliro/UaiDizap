import { models } from '../models/index';

const ChatMembersService = () => {
  const { ChatMembers, Chat, User } = models;
  const addMember = async (data: {
    chat_id: number;
    user_id: number;
    role: string;
  }) => {
    return await ChatMembers.create(data);
  };

  const getMembersByChat = async (chat_id: number) => {
    return await ChatMembers.findAll({
      where: { chat_id },
      include: [
        { model: User, attributes: ['id', 'username', 'email'] },
        { model: Chat, attributes: ['id', 'chat_type'] },
      ],
    });
  };

  const getChatsByUser = async (user_id: number) => {
    return await ChatMembers.findAll({
      where: { user_id },
      include: [
        { model: Chat, attributes: ['id', 'chat_type'] },
      ],
    });
  };

  const updateMemberRole = async (chat_id: number, user_id: number, role: string) => {
    return await ChatMembers.update(
      { role },
      {
        where: { chat_id, user_id },
        returning: true,
      }
    );
  };

  const removeMember = async (chat_id: number, user_id: number) => {
    return await ChatMembers.destroy({
      where: { chat_id, user_id },
    });
  };

  return {
    addMember,
    getMembersByChat,
    getChatsByUser,
    updateMemberRole,
    removeMember,
  };
};

export default ChatMembersService;