import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'price_checker', //DB_NAME
    'postgres', //DB_USER
    'sudosamurai', //DB_PASS
    {
        dialect: 'postgres',
        host: 'localhost', //DB_HOST
        port: 5432 //DB_PORT
    }
)