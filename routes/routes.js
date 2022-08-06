import express from 'express';
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudent,
  updateStudent,
} from '../controllers/StudentController.js';

const userRouter = express.Router();

userRouter.get('/', getAllStudents);
userRouter.get('/:id', getStudent);
userRouter.post('/', createStudent);
userRouter.put('/:id', updateStudent);
userRouter.delete('/:id', deleteStudent);

export default userRouter;
