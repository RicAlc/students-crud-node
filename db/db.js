import { Sequelize } from 'sequelize';

export const db = new Sequelize('schoolDB', 'client', '', {
  host: 'localhost',
  port: 4306,
  dialect: 'mysql',
});
