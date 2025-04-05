import { Model, DataTypes, Sequelize } from 'sequelize';

export const defineUserModel = (sequelize: Sequelize) => {
  class User extends Model {
    public id!: number;
    public full_name!: string;
    public username!: string;
    public email!: string;
    public phone_number!: string;
    public password_hash!: string;
    public profile_picture!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(__models: any) {};
  }

  User.init(
    {
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile_picture: {
        type: DataTypes.STRING,
        allowNull: true,
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
      modelName: 'User',
      tableName: 'users',
      timestamps: true,
    }
  );

  return User;
};