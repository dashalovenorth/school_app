const StudentNamespace = {
    students: [],
  
    addStudent(student) {
      this.students.push(student);
      console.log(`Ученик "${student.name}" добавлен.`);
    },
  

    findStudentById(id) {
      return this.students.find(student => student.id === id);
    },

    updateStudent(id, updatedData) {
      const studentIndex = this.students.findIndex(student => student.id === id);
      if (studentIndex !== -1) {
        this.students[studentIndex] = { ...this.students[studentIndex], ...updatedData };
        console.log(`Ученик с ID "${id}" обновлен.`);
      } else {
        console.log(`Ученик с ID "${id}" не найден.`);
      }
    },
  
    deleteStudent(id) {
      this.students = this.students.filter(student => student.id !== id);
      console.log(`Ученик с ID "${id}" удален.`);
    },
  
    promoteStudents() {
      this.students.forEach(student => {
        if (student.class_id < 11) {
          student.class_id += 1;
          console.log(`Ученик "${student.name}" переведен в ${student.class_id} класс.`);
        } else {
          console.log(`Ученик "${student.name}" выпущен.`);
        }
      });
      this.students = this.students.filter(student => student.class_id <= 11);
    },
  
    getAllStudents() {
      return this.students;
    },
  
    getStudentsByClass(classId) {
      return this.students.filter(student => student.class_id === classId);
    }
  };
  
  export default StudentNamespace;
  