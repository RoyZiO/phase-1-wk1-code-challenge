# phase-1-wk1-code-challenge
Week One Code Challenge

/*Challenge 1: Student Grade Generator (Toy Problem)/*

- The Challenge was to come up with a program that prompts users to enter marks scored by students. The program would the assign a grade to each marks scored, according to the following system:
 
A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E - less than 40. 


- Therefore, I began by creating a function names studentGrade (), with a parameter totMarks ranging between 0 and 100. The range of totMarks was defined in an if statement. 

- Moreover, I implemented the if...else method to assign a grade to the corret range of values, whereby marks over 79 were graded "A", between 60 to 78 graded "B", and so forth.

- The program would then return a string value containing the grades of a student based on the marks they scored.  




/*Challenge 2: Speed Detector (Toy Problem)/*

- The challenge was to develop a program that enables the imput of the speed of a vehicle, whereby the program prints "OK" if the speeds are under 70. 

- Moreover, the program should add one demerit point for every 5 km/s exceeding the speed limit (70).

- For instance, if the speed is 90, then the program would return "Points: 4". However, in the case where a driver accumulates more than 12 points, the program should return the string "License suspended."

- Therefore, I began by creating a function named speedDetector with the parameter carSpeed to represent the driver's speed. 
Te function also contains three variables: the speedLimit, which is 70, speedRate, which is 5 km/s, and excessSpeed, which is equivalent to the difference between the driver's speed and the speed limit.

- I then created a for loop which repeats the awarding of demerit points according to the amount exceeded over the speed limit. 

- The if statement was used to return the string "Points: (accumulated demerit points), up until the accumulated points exceed 12, afterwhich the condition is evaluated to false, returning the message "License suspended".









/*Challenge 3: Net Salary Calculator (Toy Problem)/*

