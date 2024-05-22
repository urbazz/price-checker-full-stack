import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './db';
// import { models } from './models/models';
import cors from 'cors';
import { router } from './routes';
import { ErrorHandlingMiddleware } from './middleware/ErrorHandlingMiddleware';

dotenv.config();

const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);


app.use(ErrorHandlingMiddleware);


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server was started from port:${PORT}`)
        });

    } catch (error) {
        console.error(error)
    }
}

start();
