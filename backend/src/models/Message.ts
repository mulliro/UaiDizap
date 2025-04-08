import { Model, DataTypes, Sequelize } from 'sequelize';

export const defineMessageModel = (sequelize: Sequelize) => {
    class Message extends Model {
        public id!: number;
        public chat_id!: number;
        public sender_id!: number;
        public content!: string;
        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;

        static associate(models: any) {
            const { Chat, User } = models;
            Message.belongsTo(Chat, { foreignKey: 'chat_id' });
            Message.belongsTo(User, { foreignKey: 'sender_id' });
        }
    }
    Message.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        chat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
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
        modelName: 'Message',
        tableName: 'messages',
        timestamps: true,
    });
    
    return Message;
};