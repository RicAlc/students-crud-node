import { StudentModel } from '../models/StudentModel.js';

export const getAllStudents = async (req, res) => {
  try {
    const students = await StudentModel.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({
      message: `Operacion fallida, error: ${error}`,
    });
  }
};

export const getStudent = async (req, res) => {
  try {
    const student = await StudentModel.findOne({
      where: { idST: req.paramas.id },
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({
      message: `Operacion fallida, error: ${error}`,
    });
  }
};

export const createStudent = async (req, res) => {
  try {
    await StudentModel.create(req.body);
    res.status(201).json({
      message: 'Operacion realizada exitosamente',
    });
  } catch (error) {
    res.status(400).json({
      message: `Operacion fallida, error: ${error}`,
    });
  }
};

export const updateStudent = async (req, res) => {
  try {
    await StudentModel.update(req.body, { where: { idST: req.params.id } });
    res.status(204).json({
      message: 'Operacion realizada exitosamente',
    });
  } catch (error) {
    res.status(400).json({
      message: `Operacion fallida, error: ${error}`,
    });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    await StudentModel.destroy({ where: { idST: req.params.id } });
    res.status(204).json({
      message: 'Estudiante elminado con exito',
    });
  } catch (error) {
    res.status(400).json({
      message: `Operacion fallida, error: ${error}`,
    });
  }
};
