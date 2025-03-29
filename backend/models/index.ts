import User from './user';
import connection from '../src/database/connection';
const db: any = {};

db.User = User(connection);