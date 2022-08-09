import StudentModel from '../models/StudentModel.js';

// Metodos HTTP
// Metodo GET de todos los estudiantes
export const getAllStudents = async (req, res) => {
  try {
    const students = await StudentModel.findAll({ raw: true });
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({
      message: `Operacion fallida, error: ${error}`,
    });
  }
};

// Metodo GET de un solo estudiante
export const getStudent = async (req, res) => {
  try {
    const student = await StudentModel.findAll({
      where: { idST: req.params.id },
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({
      message: `Operacion fallida, error: ${error}`,
    });
  }
};

// Metodo POST de creacion de un estudiante
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

// Metodo PUT de un solo estudiante
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

// Metodo DELETE de un estudiante
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
