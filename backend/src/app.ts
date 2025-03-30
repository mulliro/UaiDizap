import express from 'express';
import routes from './routes/index';

const app = express();

app.use((req, __res, next) => {
    console.log(`Incoming request: ${req.method} - ${req.url}`);
    next();
});
  
app.use(express.json());
app.use('/', routes);

export default app;