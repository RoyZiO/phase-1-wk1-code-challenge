# PHASE ONE: WEEK 1 CODE CHALLENGE

# Week One Code Challenge


This week's code challenge features three toy problems, namely, the Student Grade Generator, the Speed Detector, and the Net Salary Calculator

## Challenge 1: Student Grade Generator (Toy Problem)

- The Challenge was to come up with a program that prompts users to enter marks scored by students. The program would the assign a grade to each marks scored, according to the following system:
 
A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E - less than 40. 


- Therefore, I began by creating a function named 'studentGrade ()', with a parameter totMarks ranging between 0 and 100. The range of totMarks was defined in an if...else statement to ensure that awareded marks are between 0 and 100.

- Moreover, I implemented the if...else method to assign a grade to the correct range of values, whereby marks over 79 were graded "A", between 60 to 78 graded "B", and so forth.

- The program would then return a string value containing the grades of a student based on the marks they scored, with the result being "A" or "B" and so forth.

- Finally, use console.log(studentGrade()) to log in scored marks into the function, thereby determining the grade





## Challenge 2: Speed Detector (Toy Problem)

- The challenge was to develop a program that enables the input of the speed of a vehicle, whereby the program prints "OK" if the speeds are under 70 (the speed limit). 

- Moreover, the program should add one demerit point for every 5 km/s exceeding the speed limit (70).

- For instance, if the speed is 90, then the program would return "Points: 4". However, in the case where a driver accumulates more than 12 points, the program should return the string "License suspended."

- Therefore, I began by creating a function named 'speedDetector()' with the parameter carSpeed to represent the driver's speed. 
The function also contains three variables: the speedLimit, which is 70, speedRate, which is 5 km/s, and excessSpeed, which is equivalent to the difference between the driver's speed and the speed limit.

- I then created a for loop which repeats the awarding of demerit points according to the amount exceeded over the speed limit. 

- The if statement was used to return the string "Points: (accumulated demerit points), up until the accumulated points exceed 12, afterwhich the condition is evaluated to false, returning the message "License suspended".

- Finally, run console.log(speedDetector(carSpeed)) to log in a particular driver's speed and determine whether it is "OK", or the number of demerit points, or whether the driver's license is suspended,









## Challenge 3: Net Salary Calculator (Toy Problem)

Instructions: 
Write a program whose major task is to calculate a individual's Net Salary by getting the inputs of basic salary and benefits. calculate the payee(i.e. tax), NHIF Deductions, NSSF Deducations, gross salary, and net salary. 

- To successfully execute this code, make sure you run npm install prompt-sync in the terminal to generate a prompt asking the user for input. 


- Before enything else, I used the prompt method to develop a net salary calculator in the terminal. Therefore, to acquire the user imput in Node,js, you need to use the prompt() function sync module by entering the following code in the terminal: npm install prompt-sync.


- I then used the prompt() function to declare the basic salary, for which which I assigned the word employeeSalary as the variable name. I also declared the employee benefits using the term 'benefits. The prompt function would ask the employee/user to input their basic salary and benefits, then use this data to calculate net salary and other relevant variables.


- In addition, I created the function 'netSalaryCalculator()' to calculate various information that are relevant in the tabulation of net salary, while also presenting the information in a tabular data structure, accompanied by a logged string informing the employee of their net salary (): (`Your net salary is ${netPay} Ksh.`). 

- I used console.table(result) to dispay the result in a tabular data structure.


- I then created a function 'calculateNhif' to calculate NHIF deductions based on the user/employee's gross salary. The function utilized data from Aren: https://www.aren.co.ke/payroll/taxrates.htm, and returns total NHIF deductibles based on the aforementioned information. 


- Next, I created the functions 'calculateNssf()' and 'calculatePaye()' to calculate NSSF deductibles based on gross salary, and PAYE based on a user/employee's taxable income, respectively. 


- Lastly, I then called the function netSalaryCalculator()' to complete the relevant calculations and tabulations. 


- If you type the command: node NetSalaryCalculator.js on the terminal, the program will ask for employeeSalary (basic salary) and benefits before calculating gross salary, NHIF deductibles, NSSF deductibles, tacable income, and total taxes levied (PAYE),  



## Running the Application

Running the applications is straightforward requiring one step:

 *Run the application using node filename.js



## Author(s)

This project was contributed by:

Roy Nzioki Ngei: https://github.com/RoyZiO



## License

The project is licensed under the GNU General Public License
 
