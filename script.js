
const student = {
name: "John Doe",
age: 20,
enrolled: true,
courses: ["Math", "Science", "History"],
    
   
displayInfo() {
return `${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled ? "Yes" : "No"}`;
}
};
  
console.log(`Name: ${student.name}, Age: ${student.age}`);
  
 
console.log(student.displayInfo());
const studentJSON = JSON.stringify(student);
console.log("Student as JSON string:", studentJSON);
const studentFromJSON = JSON.parse(studentJSON);
console.log("Student object from JSON:", studentFromJSON);
const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);
const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
  
 
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);
  
const clonedStudent = { ...student };
clonedStudent.graduationYear = 2025;
  
console.log("Cloned Student with Graduation Year:", clonedStudent);
const newCourses = ["Computer Science", "Art"];
const mergedCourses = [...student.courses, ...newCourses];
  

console.log("Merged Courses:", mergedCourses);
  
student.addCourse = function(course) {
this.courses.push(course);
};
student.addCourse("Physical Education");
console.log("Updated Courses after Adding New Course:", student.courses);
  
  
student.getTotalCourses = function() {
return this.courses.length;
};
  
console.log("Total Number of Courses:", student.getTotalCourses());
const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length
console.log("Average Score:", averageScore.toFixed(2));
  