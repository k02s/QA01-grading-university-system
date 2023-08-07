

// ask the student to enter his/her name
var studentName = prompt("Enter your name please !")

// ask the student to enter his/her mark
var studentMark = prompt("Hello " + studentName + " ! \nEnter your mark please:")

// convert the mark to be int using Math.floor
var StudentMarkFloor = Math.floor(studentMark)


// chech the entered value from student to show the correct grade  
    if(StudentMarkFloor >= 0 && StudentMarkFloor <= 49 ){
        alert("Your grade is F ! \n You Failed")
    }
    else if(StudentMarkFloor >= 50 && StudentMarkFloor <= 60 ){
        alert("Your grade is D ! \n You Pass")
    }
    else if(StudentMarkFloor >= 61 && StudentMarkFloor <= 70 ){
        alert("Your grade is C ! \n You Pass")
    }
    else if(StudentMarkFloor >= 71 && StudentMarkFloor <= 80 ){
        alert("Your grade is B ! \n You Pass")
    }
    else if(StudentMarkFloor >= 81 && StudentMarkFloor <= 90 ){
        alert("Your grade is A ! \n You Pass")
    }
    else {
        alert("Your grade is A+ ! \n You Pass")
    }
        
