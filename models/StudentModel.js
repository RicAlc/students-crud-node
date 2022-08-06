import { DataTypes } from 'sequelize/types';
import { db } from '../db/db.js';

export const StudentModel = db.define('students', {
  idST: { type: DataTypes.INTEGER, primaryKey: true },
  nameST: { type: DataTypes.STRING },
  lastNameST: { type: DataTypes.STRING },
  tuitonCode: { type: DataTypes.STRING },
  activeST: { type: DataTypes.BOOLEAN },
});
