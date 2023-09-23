//program that calculates the net salary

function calculatesNetSalary() {
     // Prompt the user to input the basic salary and benefits
     const basicSalary = parseFloat(prompt("Enter Basic Salary:"));
     const benefits = parseFloat(prompt("Enter Benefits:"));

     //Gross salary
     const grossSalary = basicSalary + benefits;
     console.log("Gross Salary: " + salary.grossSalary);

     //tax rate
     const kraTaxRate = 0.3; // 30% rate
     const nhifRate = 0.02; // 2% rate
     const nssfRate = 0.06; // 6%  rate

       // Calculate deductions
       const kraDeduction = grossSalary * kraTaxRate;
       console.log("KRA Deduction: " + salary.kraDeduction);

       const nhifDeduction = grossSalary * nhifRate;
       console.log("NHIF Deduction: " + salary.nhifDeduction);

       const nssfDeduction = grossSalary * nssfRate;
       console.log ("NHIF Deduction: " + salary.nhifDeduction);

       //net salary
       const netSalary = grossSalary - kraDeduction - nhifDeduction - nssfDeduction;
       return`Net salary is: ${netSalary}`;

}
const salary = calculatesNetSalary();
