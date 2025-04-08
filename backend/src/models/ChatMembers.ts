import { Model, DataTypes, Sequelize } from 'sequelize';

export const defineChatMembersModel = (sequelize: Sequelize) => {
    class ChatMembers extends Model {
        public id!: number;
        public chat_id!: number;
        public user_id!: number;
        public role!: string;
        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;

        static associate(models: any) {
            const { Chat, User } = models;
            Exemplo: ChatMembers.belongsTo(Chat, { foreignKey: 'chat_id' });
            Exemplo: ChatMembers.belongsTo(User, { foreignKey: 'user_id' });
        };
    }
        ChatMembers.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                chat_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                role: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: { isIn: [['admin', 'member']] },
                },
                createdAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW,
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW,
                },
            },
            {
                sequelize,
                modelName: 'ChatMembers',
                tableName: 'chat_members',
                timestamps: true,
            }
        )
    return ChatMembers;
};
