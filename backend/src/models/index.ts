import connection from '../database/connection';
import { defineUserModel } from './User';
import { defineMessageModel } from './Message';
import { defineChatModel } from './Chat';
import { defineChatMembersModel } from './ChatMembers';

const models = {
    User: defineUserModel(connection),
    Message: defineMessageModel(connection),
    Chat: defineChatModel(connection),
    ChatMembers: defineChatMembersModel(connection)
}

Object.values(models).forEach((model: any) => {
    if (model.associate) return model.associate(models);
})

export { connection, models };