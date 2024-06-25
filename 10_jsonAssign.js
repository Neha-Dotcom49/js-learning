const employeeData = `{
"name": "Aleix Melon",
"id": "E00245",
"role": ["Dev", "DBA"],
"age": 23,
"doj": "11-12-2019",
"married": false,
"address": {
"street": "32, Laham St.",
"city": "Innsbruck",
"country": "Austria"
},
"referred-by": "E0012"
}`

console.log(`=======converting to object==========`);
const employee = JSON.parse(employeeData);
console.log(typeof employee);
console.log(employee);

console.log(`Role:` ,employee.role[0] );
const lastName = employee.name.split(" ")[1];
console.log(`Last Name:`,lastName);


const joiningYear = employee.doj.split("-")[2];
console.log(`joining year:`,joiningYear);

