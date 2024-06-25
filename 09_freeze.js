const person = {
    firstName: "Anil",
    lastName: "Sharma",
    city: "Mumbai",
}
Object.freeze(person);
person.city = "Pune";
console.log(person);

const array = [50, 60, 80, 90];
Object.freeze(array);
// array.push(1000);
// array.pop()
console.log(array);

const clonedObject = Object.assign({}, person);
console.log(person);
console.log(clonedObject);

const anil = {
    firstName: "Anil",
    lastName: "Sharma",
    city: "Mumbai",
}
const address = {
    street: "Wakad",
    PIN: 411057
}

const mergedObject = Object.assign({}, anil, address);
console.log(mergedObject);

