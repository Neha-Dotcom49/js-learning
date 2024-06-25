console.log(`=============step 1==============`);
function maleMarriageEligibility(gender, age, boyName){
 var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage`
 : `${boyName} you are Not eligible for Marriage`;
  return result;
}
var message = maleMarriageEligibility("Male", 25, "Billgates");
console.log(message);
var message = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(message);


console.log(`==============Step 2================`);
function femaleMarriageEligibility(gender, age, girlName){
    var result = (gender=="female" && age>=21) ? `Hey ${girlName} you are eligible for marriage`
    : `${girlName} you are Not eligible for Marriage`;
     return result;
   }
   var message = femaleMarriageEligibility("female", 16, "jenifer");
   console.log(message);
   var message = femaleMarriageEligibility("female", 27, "Malinda gates");
   console.log(message);