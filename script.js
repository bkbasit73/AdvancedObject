// Part 1: Understanding and Creating Objects
const student = {
    name: "Ali",
    age: 21,
    enrolled: true,
    courses: ["Mathematics", "Physics", "Programming"],
    displayInfo: function () {
      return `Student Name: ${this.name}, Age: ${this.age}`;
    },
  };
  
  // Log name and age
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  
  // Call and log the method
  console.log("Student Info:", student.displayInfo());
  
  // Part 2: Working with JSON
  // Convert the student object to a JSON string
  const studentJSON = JSON.stringify(student);
  console.log("Student JSON String:", studentJSON);
  
  // Convert JSON string back to an object
  const parsedStudent = JSON.parse(studentJSON);
  console.log("Parsed Student Object:", parsedStudent);
  
  // Compare the original and parsed objects
  console.log("Are objects equal:", JSON.stringify(student) === JSON.stringify(parsedStudent));
  
  // Part 3: Using Destructuring Assignment
  // Destructure name and courses from the student object
  const { name, courses } = student;
  console.log("Destructured Name:", name);
  console.log("Destructured Courses:", courses);
  
  // Create an array of scores and destructure first two scores
  const scores = [85, 92, 78, 90];
  const [firstScore, secondScore] = scores;
  console.log("First Score:", firstScore);
  console.log("Second Score:", secondScore);
  
  // Part 4: The Spread Operator
  // Clone the student object and add a new property
  const clonedStudent = { ...student, graduationYear: 2024 };
  console.log("Cloned Student with Graduation Year:", clonedStudent);
  
  // Merge student.courses with a new array of courses
  const newCourses = ["Chemistry", "Biology"];
  const mergedCourses = [...student.courses, ...newCourses];
  console.log("Merged Courses:", mergedCourses);
  
  // Part 5: Object Methods
  // Add a method to dynamically add a new course
  student.addCourse = function (course) {
    this.courses.push(course);
    console.log(`Added Course: ${course}`);
  };
  
  // Add a method to calculate total number of courses
  student.totalCourses = function () {
    return this.courses.length;
  };
  
  // Use the addCourse and totalCourses methods
  student.addCourse("English");
  console.log("Updated Courses:", student.courses);
  console.log("Total Number of Courses:", student.totalCourses());
  
  // Bonus Task: Calculate the average score
  const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  console.log("Average Score:", averageScore);
  