var firstName = prompt("Enter Your Name");
var rollNo = prompt("Enter Your Roll No");
var english = +prompt("Enter Your English Marks");
var math = +prompt("Enter Your Math  Marks");
var science = +prompt("Enter Your Science Marks");
var physics = +prompt("Enter Your Physics Marks");
var chemistry = +prompt("Enter Your Chemistry Marks");

var totalMarks = (english + math + science + physics + chemistry);
var percentage = (totalMarks/500*100)

if (percentage >=80 && percentage <100){
   alert("NAME: " + firstName + "\nROLL NO: " + rollNo + "\nOBTAINED MARKS " + totalMarks + "\nPERCENTAGE " + percentage + "\nGRADE A+")
}
else if(percentage >=70 &&percentage <80){
    alert("NAME: " + firstName + "\nROLL NO: " + rollNo + "\nOBTAINED MARKS " + totalMarks + "\nPERCENTAGE " + percentage + "\nGRADE B")
}
else if(percentage>=60 && percentage <70){
    alert("NAME: " + firstName + "\nROLL NO: " + rollNo + "\nOBTAINED MARKS " + totalMarks + "\nPERCENTAGE " + percentage + "\nGRADE C")
}
else if(percentage>=50 && percentage <60){
   alert("NAME: " + firstName + "\nROLL NO: " + rollNo + "\nOBTAINED MARKS " + totalMarks + "\nPERCENTAGE " + percentage + "\nGRADE D")
}
else if(percentage>100){
    alert("please inter valid numbers")
}
else{
    alert("failed")
}