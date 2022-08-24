import { Sequelize } from 'sequelize';

const db = new Sequelize('railway', 'root', 'zLHPboQ6UHLt4JO6GGaR', {
  host: 'containers-us-west-38.railway.app',
  dialect: 'mysql',
  port: 5933,
});

export default db;
