import { defineUserModel } from './user';
import connection from '../database/connection';

const models = {
    User: defineUserModel(connection)
}

Object.values(models).forEach((model: any) => {
    if (model.associate) model.associate(models);
})

export { connection, models };