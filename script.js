// Create the student object
const student = {
    name: "Ali",
    age: 20,
    enrolled: true,
    courses: ["Mathematics", "Physics", "Computer Science"],
    displayInfo: function () {
      return `Name: ${this.name}, Age: ${this.age}`;
    },
  };
  
  // Log the name and age properties
  console.log("Name:", student.name); // Output: Ali
  console.log("Age:", student.age);   // Output: 20
  
  // Call and log the displayInfo method
  console.log("Student Info:", student.displayInfo());
  // Convert the student object to a JSON string
const studentJSON = JSON.stringify(student);
console.log("Student JSON:", studentJSON);

// Convert the JSON string back into an object
const parsedStudent = JSON.parse(studentJSON);
console.log("Parsed Student Object:", parsedStudent);

// Compare the original and parsed objects
console.log("Are objects equal?", JSON.stringify(student) === JSON.stringify(parsedStudent));
