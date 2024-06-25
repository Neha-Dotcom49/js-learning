console.log("=======Functions with no argument and no return value=======");
function great(){
    console.log("Hello! Have a great day!");
}
great();

function encourage(){
    console.log("You are doing great! Keep it up!");
}
encourage();

console.log("=======Functions personal Details=======");
function personalDetails(firstName,lastName,collegeName){
    console.log("First Name:",firstName);
    console.log("Last Name:",lastName);
    console.log("college Name:",collegeName);
}
personalDetails("Neha","Patil","TSEC")

console.log("========Addition Function============");
function addThreeValues(numOne,numTwo,numThree){
    // console.log("Given Numbers are:",numOne,numTwo,numThree);
    // console.log("Given Values are:",numOne,numTwo,numThree);
    var result = numOne+numTwo+numThree;
    console.log("Addition of Three number Is:",result);
}
addThreeValues(10.23,600,40)
addThreeValues("Hello", " Good", " Morning")
