import * as dotenv from 'dotenv';
import app from './app';
import logger from './utils/logger';

dotenv.config();

const PORT = process.env.PORT || 3000;
const message = logger.info(`Server running on port ${PORT}`)  

const server = app.listen(PORT, () => message);

export default server;