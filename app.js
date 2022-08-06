/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import db from './databases/db.js';
import userRouter from './routes/routes.js';

const PORT = 4000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/students', userRouter);
try {
  await db.authenticate();
  console.log('Conexion a la DB exitosa');
} catch (error) {
  console.error(`Error en la conexion:${error}`);
}
app.get('/', (req, res) => {
  res.status(200).send('Apliacion con nodejs y Mysql');
});
app.listen(PORT, () => console.log(`Server up running on port:${PORT}`));
