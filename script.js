// Part 1: Understanding and Creating Objects
const student = {
    name: "John Doe",
    age: 20,
    enrolled: true,
    courses: ["Math", "Science", "History"],
    
    // Method to display basic student information
    displayInfo() {
      return `${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled ? "Yes" : "No"}`;
    }
  };
  
  // Console log for Part 1: Output the student's name and age properties
  console.log(`Name: ${student.name}, Age: ${student.age}`);
  
  // Console log for the result of calling the displayInfo method
  console.log(student.displayInfo());
  
  
  
  // Part 2: Working with JSON
  
  // Convert the student object into a JSON string
  const studentJSON = JSON.stringify(student);
  
  // Log the JSON string to the console
  console.log("Student as JSON string:", studentJSON);
  
  // Convert the JSON string back into a JavaScript object
  const studentFromJSON = JSON.parse(studentJSON);
  
  // Log the newly created object and compare it to the original
  console.log("Student object from JSON:", studentFromJSON);
  
  
  
  // Part 3: Using Destructuring Assignment
  
  // Destructure the name and courses properties from the student object
  const { name, courses } = student;
  
  // Log the destructured properties
  console.log("Destructured Name:", name);
  console.log("Destructured Courses:", courses);
  
  // Create an array of scores
  const scores = [85, 92, 78, 90];
  
  // Destructure the first two scores from the array
  const [firstScore, secondScore] = scores;
  
  // Log the destructured scores
  console.log("First Score:", firstScore);
  console.log("Second Score:", secondScore);
  
  
  
  // Part 4: The Spread Operator
  
  // Clone the student object using the spread operator
  const clonedStudent = { ...student };
  
  // Add a new property to the cloned object (graduation year)
  clonedStudent.graduationYear = 2025;
  
  // Log the cloned object with the new property
  console.log("Cloned Student with Graduation Year:", clonedStudent);
  
  // Merge two arrays using the spread operator
  const newCourses = ["Computer Science", "Art"];
  const mergedCourses = [...student.courses, ...newCourses];
  
  // Log the merged array of courses
  console.log("Merged Courses:", mergedCourses);
  
  
  
  // Part 5: Object Methods
  
  // Add a method to dynamically add a new course to the courses array
  student.addCourse = function(course) {
    this.courses.push(course);
  };
  
  // Add a new course and log the updated courses list
  student.addCourse("Physical Education");
  console.log("Updated Courses after Adding New Course:", student.courses);
  
  // Add a method to calculate and return the total number of courses
  student.getTotalCourses = function() {
    return this.courses.length;
  };
  
  // Log the total number of courses
  console.log("Total Number of Courses:", student.getTotalCourses());
  
  
  
  // Bonus Task: Calculate the average score using the reduce method
  
  const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
  
  // Log the average score
  console.log("Average Score:", averageScore.toFixed(2));
  