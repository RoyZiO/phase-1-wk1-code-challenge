//Week 1 Code Challenge

// Challenge 1: Student Grade Generator (Toy Problem)

function studentGrade(totMarks) {               //function for generating student grades
    if (totMarks <= 100 && totMarks >= 0) {     //if statement to show range of marks
        if (totMarks > 79) {
            return "A";
        }
        else {
        if (totMarks >= 60 && totMarks <= 79) {
        return "B";
        }
            else {
            if (totMarks >= 50 && totMarks <= 59) {
            return "C";
            }
                else {
                if (totMarks >= 40 && totMarks <= 49) {
                return "D";
                }
                    else {
                    if (totMarks < 40) {                               //if statements to show grades accoding to total marks scored
                     return "E";
                    }
                    }
                }
            }
        }
    }
    return studentGrade(totMarks); 
}
console.log(studentGrade(90));

// Challenge 2: Speed Detector (Toy Problem)

function speedDetector(carSpeed) {
    const speedLimit = 70
    const speedRate = 5

    if(carSpeed <= speedLimit) {
        return "OK";
    }

    const excessSpeed = carSpeed - speedLimit;

    let  demeritPoints = 0;
    for(let i = 0; i < excessSpeed; i+= speedRate) {

        demeritPoints += 1
    
    // demeritPoints = points accumulated after every speedRate (5km/h) above the speedLimit
    if(demeritPoints > 12) {
        return "License Suspended";
    }
}
return `Points: ${demeritPoints}`;

}
console.log(speedDetector(100));

// Challenge 3: Net Salary Calculator (Toy Problem)









