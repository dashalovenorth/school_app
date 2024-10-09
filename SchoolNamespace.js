const SchoolNamespace = {
    schools: [],
  
    addSchool(school) {
      this.schools.push(school);
      console.log(`Школа "${school.name}" добавлена.`);
    },
  
    findSchoolById(id) {
      return this.schools.find(school => school.id === id);
    },
  
    updateSchool(id, updatedData) {
      const schoolIndex = this.schools.findIndex(school => school.id === id);
      if (schoolIndex !== -1) {
        this.schools[schoolIndex] = { ...this.schools[schoolIndex], ...updatedData };
        console.log(`Школа с ID "${id}" обновлена.`);
      } else {
        console.log(`Школа с ID "${id}" не найдена.`);
      }
    },
 
    deleteSchool(id) {
      this.schools = this.schools.filter(school => school.id !== id);
      console.log(`Школа с ID "${id}" удалена.`);
    },
  
    getAllSchools() {
      return this.schools;
    }
  };
  
  export default SchoolNamespace;
  