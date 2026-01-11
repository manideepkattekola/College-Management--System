const questionPapers = {
  "CSE": {
    "Semester 1": [
      { subject: "Mathematics 1" },
      { subject: "English" },
      { subject: "Physics" }
      // Add more subjects for Semester 1 as needed
    ],
    "Semester 2": [
      { subject: "Mathematics 2" },
      { subject: "Chemistry" },
      { subject: "Computer Programming" }
      // Add more subjects for Semester 2 as needed
    ]
    // Add data for other semesters as needed
  },
  "EC": {
    // Add question papers data for Electronics and Communication Engineering
  },
  "EEE": {
    // Add question papers data for Electrical and Electronics Engineering
  },
  "MECH": {
    // Add question papers data for Mechanical Engineering
  },
  "CIVIL": {
    // Add question papers data for Civil Engineering
  }
};

const categories = document.querySelectorAll('.category');

categories.forEach(category => {
  category.addEventListener('click', function() {
    const department = this.dataset.department;
    displayQuestionPapers(department);
  });
});

function displayQuestionPapers(department) {
  const papersDiv = document.getElementById('papers');
  let papersHTML = '';

  for (const semester in questionPapers[department]) {
    if (questionPapers[department].hasOwnProperty(semester)) {
      papersHTML += '<h2>' + semester + '</h2>';
      questionPapers[department][semester].forEach(paper => {
        papersHTML += `
          <div class="paper">
            <h3>${paper.subject}</h3>
            <a href="#" class="open">Open</a>
          </div>
        `;
      });
    }
  }

  papersDiv.innerHTML = papersHTML;
}
