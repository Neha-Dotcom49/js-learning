const employeeJSON = `{
    "id": 123,
    "name": "Billgates",
    "designation": "CEO",
    "dob": "03/04/1945",
    "isMarried": true,
    "skills": ["CPP", "Java", "DS"],
    "address": {
        "street": "Wakad",
        "city": "LA",
        "PIN": 23489,
        "country": "USA"
    }
}`
console.log(typeof employeeJSON);
console.log(employeeJSON);
console.log(`======JSON.parse()=========`);
const employee = JSON.parse(employeeJSON);
console.log(typeof employee);
console.log(employee);
console.log(employee.address.PIN);

console.log(`Employee Skill - ${employee.name}`);
const empSkills = employee.skills;
for (const element of empSkills) {
    console.log(element);
}

console.log(`====== Object to JSON conversion using JSON.stringfy()========`);
const student = {
    stdName: "Jenny",
    rollNum: 107,
    city: "Pune",
    isMarried: false,
    friendsList: ["Elon", "Bill", "Stew"],
    address: {
       flatNum: 1005,
       society: "Horizon",
       street: "Wakad",
       PIN: 411057
    },
   };
   const studentJSON = JSON.stringify(student);
   console.log(typeof studentJSON);
   console.log(studentJSON);