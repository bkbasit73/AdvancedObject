
const student = {
    name: "Ali",
    age: 21,
    enrolled: true,
    courses: ["Mathematics", "Physics", "Programming"],
    displayInfo: function () {
      return `Student Name: ${this.name}, Age: ${this.age}`;
    },
  };
  
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  

  console.log("Student Info:", student.displayInfo());

  const studentJSON = JSON.stringify(student);
  console.log("Student JSON String:", studentJSON);
  
  
  const parsedStudent = JSON.parse(studentJSON);
  console.log("Parsed Student Object:", parsedStudent);
  

  console.log("Are objects equal:", JSON.stringify(student) === JSON.stringify(parsedStudent));
  

  const { name, courses } = student;
  console.log("Destructured Name:", name);
  console.log("Destructured Courses:", courses);
  

  const scores = [85, 92, 78, 90];
  const [firstScore, secondScore] = scores;
  console.log("First Score:", firstScore);
  console.log("Second Score:", secondScore);
  

  const clonedStudent = { ...student, graduationYear: 2024 };
  console.log("Cloned Student with Graduation Year:", clonedStudent);
  

  const newCourses = ["Chemistry", "Biology"];
  const mergedCourses = [...student.courses, ...newCourses];
  console.log("Merged Courses:", mergedCourses);
  

  student.addCourse = function (course) {
    this.courses.push(course);
    console.log(`Added Course: ${course}`);
  };
  

  student.totalCourses = function () {
    return this.courses.length;
  };
  

  student.addCourse("English");
  console.log("Updated Courses:", student.courses);
  console.log("Total Number of Courses:", student.totalCourses());
  

  const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  console.log("Average Score:", averageScore);
  