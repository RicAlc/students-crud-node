import { Sequelize } from 'sequelize';

const db = new Sequelize('schoolDB', 'root', 'pa55word', {
  host: 'mysql-app',
  dialect: 'mysql',
  port: 3306,
});

export default db;
