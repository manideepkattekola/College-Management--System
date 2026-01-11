document.getElementById('resultForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var studentID = document.getElementById('studentID').value;
  
  // Here you would typically fetch the result data from a server using AJAX or fetch API
  // For the sake of simplicity, let's assume the result is hardcoded
  
  // Example hardcoded result
  var result = {
    studentID: "12345",
    name: "John Doe",
    subjects: [
      { name: "Math", marks: 80 },
      { name: "Science", marks: 75 },
      { name: "English", marks: 65 },
      { name: "History", marks: 45 },
      { name: "Geography", marks: 55 }
    ]
  };
  
  if (studentID === result.studentID) {
    var resultDisplay = "<h2>Hello " + result.name + ", Your Result:</h2>";
    var totalMarks = 0;
    var totalSubjects = result.subjects.length;
    var failCount = 0;
    
    result.subjects.forEach(function(subject) {
      totalMarks += subject.marks;
      resultDisplay += "<p>" + subject.name + ": " + subject.marks;
      
      if (subject.marks >= 40) {
        resultDisplay += " - Pass</p>";
      } else {
        resultDisplay += " - Fail</p>";
        failCount++;
      }
    });
    
    var averageMarks = totalMarks / totalSubjects;
    var cgpa = averageMarks / 9.5; // Assuming 1 point for every 9.5 marks
    var sgpa = cgpa; // For simplicity, let's assume SGPA same as CGPA
    
    resultDisplay += "<p>Total Marks: " + totalMarks + "</p>";
    resultDisplay += "<p>Average Marks: " + averageMarks.toFixed(2) + "</p>";
    resultDisplay += "<p>CGPA: " + cgpa.toFixed(2) + "</p>";
    resultDisplay += "<p>SGPA: " + sgpa.toFixed(2) + "</p>";
    
    if (failCount > 0) {
      resultDisplay += "<p>You have failed in " + failCount + " subject(s).</p>";
    } else {
      resultDisplay += "<p>Congratulations! You have passed all subjects.</p>";
    }
    
    document.getElementById('resultDisplay').innerHTML = resultDisplay;
  } else {
    document.getElementById('resultDisplay').innerHTML = "No result found for this student ID.";
  }
});
