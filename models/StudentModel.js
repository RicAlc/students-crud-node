import { DataTypes } from 'sequelize';
import db from '../databases/db.js';

const StudentModel = db.define('students', {
  idST: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nameST: { type: DataTypes.STRING, allowNull: false },
  lastNameST: { type: DataTypes.STRING, allowNull: false },
  activeST: { type: DataTypes.BOOLEAN, allowNull: false },
});

export default StudentModel;
