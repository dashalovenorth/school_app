const express = require('express');
const router = express.Router();
const crud = require('../crud');

router.get('/', async (req, res) => {
  try {
    const students = await crud.getStudents();
    res.json(students);
  } catch (err) {
    console.error(errres.status(500).send('Ошибка сервера'));
  }
});


router.post('/', async (req, res) => {
  const { name, school_id, class_id, schedule } = req.body;
  try {
    const newStudent = await crud.createStudent(name, school_id, class_id, schedule);
    res.status(201).json(newStudent);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка при создании ученика');
  }
});

module.exports = router;
