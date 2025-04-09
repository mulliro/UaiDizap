import { Model, DataTypes, Sequelize } from 'sequelize';
import { IChatAttributes, IChatCreationAttributes} from '../interfaces/index';

export const defineChatModel = (sequelize: Sequelize) => {
    class Chat extends Model<IChatAttributes, IChatCreationAttributes> {
        public id!: number
        public chat_type!: string
        public readonly createdAt!: Date
        public readonly updatedAt!: Date

        static associate(__models: any) {};
    }

    Chat.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            chat_type: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: { isIn: [['private', 'group']] },
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
            modelName: 'Chat',
            tableName: 'chats',
            timestamps: true,
        }
    )
    return Chat;
}