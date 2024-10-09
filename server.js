const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const studentRoutes = require('./routes/students');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});


const checkDateAndUpdateClasses = async () => {
    const currentMonth = new Date().getMonth();
    if (currentMonth === 8) { 
      const res = await pool.query(`
        UPDATE students
        SET class_id = class_id + 1
        WHERE class_id < 11
      `);
  
      const graduates = await pool.query(`
        INSERT INTO graduates (student_id)
        SELECT id FROM students WHERE class_id = 11
      `);
      await pool.query(`
        DELETE FROM students WHERE class_id = 11
      `);
  
      console.log(`Обновлено ${res.rowCount} учеников, выпускников: ${graduates.rowCount}`);
    }
  };
  
  checkDateAndUpdateClasses();
  setInterval(checkDateAndUpdateClasses, 24 * 60 * 60 * 1000);
  