import initUser from './user';
import connection from '../database/connection';

if (!connection) {
    throw new Error('Database connection is not initialized.');
}
const User = initUser(connection);

export default {
    User
};