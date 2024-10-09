const pool = require('./db');

const getSchools = async () => {
  const res = await pool.query('SELECT * FROM schools');
  return res.rows;
};

const createSchool = async (name, address) => {
  const res = await pool.query(
    'INSERT INTO schools (name, address) VALUES ($1, $2) RETURNING *',
    [name, address]
  );
  return res.rows[0];
};


const updateSchool = async (id, name, address) => {
  const res = await pool.query(
    'UPDATE schools SET name = $1, address = $2 WHERE id = $3 RETURNING *',
    [name, address, id]
  );
  return res.rows[0];
};

const deleteSchool = async (id) => {
  const res = await pool.query('DELETE FROM schools WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};


const getClasses = async () => {
  const res = await pool.query('SELECT * FROM classes');
  return res.rows;
};


const createClass = async (school_id, grade, schedule, capacity = 20) => {
  const res = await pool.query(
    'INSERT INTO classes (school_id, grade, schedule, capacity) VALUES ($1, $2, $3, $4) RETURNING *',
    [school_id, grade, schedule, capacity]
  );
  return res.rows[0];
};


const updateClass = async (id, school_id, grade, schedule, capacity) => {
  const res = await pool.query(
    'UPDATE classes SET school_id = $1, grade = $2, schedule = $3, capacity = $4 WHERE id = $5 RETURNING *',
    [school_id, grade, schedule, capacity, id]
  );
  return res.rows[0];
};


const deleteClass = async (id) => {
  const res = await pool.query('DELETE FROM classes WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};


const getStudents = async () => {
  const res = await pool.query('SELECT * FROM students');
  return res.rows;
};


const createStudent = async (name, school_id, class_id, schedule) => {
  const res = await pool.query(
    'INSERT INTO students (name, school_id, class_id, schedule) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, school_id, class_id, schedule]
  );
  return res.rows[0];
};

const updateStudent = async (id, name, school_id, class_id, schedule) => {
  const res = await pool.query(
    'UPDATE students SET name = $1, school_id = $2, class_id = $3, schedule = $4 WHERE id = $5 RETURNING *',
    [name, school_id, class_id, schedule, id]
  );
  return res.rows[0];
};


const deleteStudent = async (id) => {
  const res = await pool.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};

module.exports = {

  getSchools,
  createSchool,
  updateSchool,
  deleteSchool,

  getClasses,
  createClass,
  updateClass,
  deleteClass,

  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
