console.log(`Deprecated DOM API`);
const headingElement = document.getElementById("heading");
console.log(headingElement);

console.log(`New DOM API`);
console.log(`===== Query Selector with element name=======`);
const elementH2 = document.querySelector("h2");
console.log(elementH2);

console.log(`===== Query Selector with id=======`);
const elementH2ByID = document.querySelector("#heading");
console.log(elementH2ByID);
console.log(elementH2ByID.innerHTML);

console.log(`===== Query Selector with class=======`);
const elementLearning = document.querySelector(".learning");
console.log(elementLearning);
console.log(elementLearning.innerHTML);
console.log(`======= Modifying element using QuerySelector ========`);
const elementH2Heading = document.querySelector("h2");
elementH2Heading.innerHTML = "Introduction of Dom - Document Object Model";

console.log(`===== Query Selector ALL with element name =======`);
const liElements = document.querySelectorAll("li");
console.log(liElements);
for (const element of liElements) {
    console.log(element.innerHTML);
}

console.log(`===== Query Selector ALL with class name =======`);
const learningElements = document.querySelectorAll(".learning");
for (const element of learningElements) {
    console.log(element.innerHTML);
}
console.log(`===== Changing an attribute =======`);
const linkGoogleEle = document.querySelector("#linkGoogle");
linkGoogleEle.setAttribute("href", "https://www.google.com/");

console.log(`===== Changing the style of an element =======`);
const addressElement = document.querySelector("#address");
addressElement.style.color= "red";

console.log(`===== Removing element =======`);
const skillElement = document.querySelector("#skills");
const agileElement = document.querySelector("#agile");
skillElement.removeChild(agileElement);

console.log(`===== Creating new element =======`);
const elementP = document.createElement("p");
const textNodeAddress =document.createTextNode("1005, iTrend, Wakad, Pune, MH  - 411057");
elementP.appendChild(textNodeAddress);
const divElement = document.querySelector("#address-content");
divElement.appendChild(elementP);

// function techFunction(){
//     console.log(`Hey you clicked me - H3 `);
// }
// const butElement = document.querySelector("#submit-button");
// butElement.addEventListener('click', ()=>{
//     console.log("Hey you clicked");
//     alert("Hey you clicked");
// });

// addressElement.addEventListener('mouseover', ()=>{
//     alert("Hey mouseover event performed");
// });

const elementNumberBtn = document.querySelector("#number-one-button");
elementNumberBtn.addEventListener("click", ()=>{
    const num = prompt("Enter number to Square..", 1);
    const areYouSure = confirm(`Are you sure. you want to get the square of number : ${num}`);
    if(areYouSure){
        const result =  num * num;
        alert(`Square is: ${result}`);
    }
});