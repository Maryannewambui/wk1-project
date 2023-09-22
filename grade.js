// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


function studentMarks() {
    //prompts user to enter marks btwn 0-100
    const input = prompt("Enter the student's marks:");
    const marks = parseFloat(input);
  
    if (isNaN(marks) || marks < 0 || marks > 100) {
      return;
    }

    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >49 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E'
    }
    return (`The student's grade is: ${grade}`);
}

studentMarks();
