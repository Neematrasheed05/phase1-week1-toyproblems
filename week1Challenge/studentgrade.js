function calculategrade(){
    const marks = prompt("Please enter the student's marks(between 0 and 100)");
    //this will let the user know the limit upto which they can input marks
    if (marks >= 80 && marks <= 100){
        return "A";
        // any marks above 80 marks will output "A"
    }else if(marks >= 60 && marks < 80){
        return "B";
        //any marks above 60 will outpu "B"
    }else if (marks >= 50 && marks < 60){
        return "C";
        //any marks between the range 50-59 will output "C"
    }else if (marks >= 40 && marks < 50){
        // any marks between the range 40-49 will output "D"
        return "D";
    }else{ // this will take anything below 40 marks and output "E"
        return "E";
    }
}