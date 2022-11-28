//Week 1 Code Challenge

// Code Challenge 1: Student Grade Generator (Toy Problem)

function studentGrade(totMarks) {               //function for generating student grades
    if (totMarks <= 100 && totMarks >= 0) {     //if statement to show range of marks
        if (totMarks > 79) {
            return "A";
        }
        else {
        if (totMarks >= 60 && totMarks <= 79) {             //if...else conditional staements to determine letter grade based on the number of marks scored//
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
    return studentGrade(totMarks);              //the function returns the letter grade depending on which range a particular score falls.
}
console.log(studentGrade(90));
