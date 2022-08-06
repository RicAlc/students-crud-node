import { Sequelize } from 'sequelize';

const db = new Sequelize('schoolDB', 'client', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

export default db;
