//Challenge 3: Net Salary Calculator


//The first four lines of code presents a prompt that asks the employee to input their data, thereby storing the declared variables

//Remember that one must run the code 'npm install prompt-sync' in the terminal to enable the use of the prompt


const promptgrossSalary = require(`prompt-sync`)();
let employeeSalary = promptgrossSalary("Enter employeeSalary:")
const promptBenefits = require(`prompt-sync`)();
let benefits = promptBenefits("Enter benefits:")


// The function netSalaryCalculator below is utilized to tabulate and calculate relevant information to determine the net salary of an employee.

//The function then logs and presents the calculated data in a tabular structure, while also returning a string to indicate the employee's net salary.

function netSalaryCalculator(){
    
    const grossSalary = Number(employeeSalary) + Number(benefits);

    const nhif = calculateNhif(grossSalary);

    const nssf = calculateNssf(grossSalary);

    const taxablePay = grossSalary - nhif - nssf;
    
    const paye = calculatePaye(taxablePay);

    const netPay = grossSalary - (nssf + paye + nhif);

    const result = {
        "grossSalary" : grossSalary,
        "NHIF" : nhif,
        "NSSF" : nssf,
        "taxablePay" : taxablePay,
        "payee(tax)" : paye,
    
    }
    console.table(result);
    console.log(`Your net salary is : ${netPay} Ksh`)


// Next, we define anotehr function named 'calculateNhif' which we will use to calculate the National Hospital Insurance Fund deductibles with respect to the gross salary of the user or employee.

//The function returns deductibles based on information on tax rates obtained from Aren: https://www.aren.co.ke/payroll/taxrates.htm


function calculateNhif(grossSalary) {
    if (grossSalary < 6000) {
        return 150;

    } else if (grossSalary >= 6000 && grossSalary < 8000) {
        return 300;

    } else if (grossSalary >= 8000 && grossSalary < 12000) {
        return 400;

    } else if (grossSalary >= 12000 && grossSalary < 15000) {
        return 500;

    } else if (grossSalary >= 15000 && grossSalary < 20000) {
        return 600;

    } else if (grossSalary >= 20000 && grossSalary < 25000) {
        return 750;

    } else if (grossSalary >= 25000 && grossSalary < 30000) {
        return 850;

    } else if (grossSalary >= 30000 && grossSalary < 35000) {
        return 900;

    } else if (grossSalary >= 35000 && grossSalary < 40000) {
        return 950;

    } else if (grossSalary >= 40000 && grossSalary < 45000) {
        return 1000;

    } else if (grossSalary >= 45000 && grossSalary < 50000) {
        return 1100;

    } else if (grossSalary >= 50000 && grossSalary < 60000) {
        return 1200;

    } else if (grossSalary >= 60000 && grossSalary < 70000) {
        return 1300;

    } else if (grossSalary >= 70000 && grossSalary < 80000) {
        return 1400

    } else if (grossSalary >= 80000 && grossSalary < 90000) {
        return 1500;

    } else if (grossSalary >= 90000 && grossSalary < 100000) {
        return 1600;

    } else {
        return 1700;
    }

} 
calculateNhif(grossSalary);


//After calculating NHIF deductibles, we then develop a function named 'caclulateNssf()' to calculate the NSSF social security and the rates based on pensionable pay.



function calculateNssf(grossSalary) {

    if (grossSalary < 6000) {
        return  grossSalary * 0.06

    } else if (grossSalary > 6000 && grossSalary <= 18000) {                    //conditional statements based on information from Aren https://www.aren.co.ke/payroll/taxrates.htm

        return grossSalary * 0.06;

    } else {
        return grossSalary * 0.06
    }
}
calculateNssf(grossSalary);



//Finally, we then create a function named 'calculatePaye()' to calculate the total amount of PAYE tax paid by a user or employee who inputs their data.



function calculatePaye(taxablePay) {

        if (taxablePay <= 24000) {
            return taxablePay * 0.1;
    
        } else if (taxablePay > 24000 && taxablePay <= 32333) {
            return taxablePay * 0.25;
    
        } else if (taxablePay > 32333) {
            return taxablePay * 0.3;
    
        }
    
}
calculatePaye(taxablePay);


}
netSalaryCalculator();                  //Conclusively, we call the 'netSalaryCalculator()' function to complete the calculations of gross salary, deductibles,taxable income, PAYE, and net salary.