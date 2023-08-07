

// ask the student to enter his/her name
var studentName = prompt("Enter your name please !")

// ask the student to enter his/her mark
var studentMark = prompt("Hello " + studentName + " ! \nEnter your mark please:")

// convert the mark to be int using Math.floor
var StudentMarkFloor = Math.floor(studentMark)


// chech the entered value from student to show the correct grade  
    if(StudentMarkFloor >= 0 && StudentMarkFloor <= 49 ){
        prompt("Your grade is F ! \n You Failed")
    }
    else if(StudentMarkFloor >= 50 && StudentMarkFloor <= 60 ){
        prompt("Your grade is D ! \n You Pass")
    }
    else if(StudentMarkFloor >= 61 && StudentMarkFloor <= 70 ){
        prompt("Your grade is C ! \n You Pass")
    }
    else if(StudentMarkFloor >= 71 && StudentMarkFloor <= 80 ){
        prompt("Your grade is B ! \n You Pass")
    }
    else if(StudentMarkFloor >= 81 && StudentMarkFloor <= 90 ){
        prompt("Your grade is A ! \n You Pass")
    }
    else {
        prompt("Your grade is A+ ! \n You Pass")
    }
        
