import { Optional } from 'sequelize';

export interface IUserAttributes {
    id?: number;
    email: string;
    password_hash: string;
    full_name: string;
    profile_picture: string;
    phone_number: string;
    username: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  export interface IUserCreationAttributes extends Optional<IUserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}
  