const ClassNamespace = {
    classes: [],
  
    addClass(newClass) {
      this.classes.push(newClass);
      console.log(`Класс ${newClass.grade} добавлен.`);
    },
  
    findClassById(id) {
      return this.classes.find(cls => cls.id === id);
    },
  
    updateClass(id, updatedData) {
      const classIndex = this.classes.findIndex(cls => cls.id === id);
      if (classIndex !== -1) {
        this.classes[classIndex] = { ...this.classes[classIndex], ...updatedData };
        console.log(`Класс с ID "${id}" обновлен.`);
      } else {
        console.log(`Класс с ID "${id}" не найден.`);
      }
    },
  
    deleteClass(id) {
      this.classes = this.classes.filter(cls => cls.id !== id);
      console.log(`Класс с ID "${id}" удален.`);
    },
  
    getAllClasses() {
      return this.classes;
    },
  
    getClassesBySchool(schoolId) {
      return this.classes.filter(cls => cls.school_id === schoolId);
    }
  };
  
  export default ClassNamespace;
  