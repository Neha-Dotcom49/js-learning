console.log(`we can only add value in empty object after declaration but not in object with some values`);
const student = {};
student.name  = "mohit";
console.log(student);
for (const key in student) {
    console.log(student[key]);
    }

const student={
    name: "mohit",
    rollno:1233
}
// student = {
  student.city = "pune";
// }

const string = 'code';
for (let key in string) {
console.log(string[key]);
        
 }
