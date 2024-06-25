class Student {
    // Data Members Or Properties or Attributes or States
    constructor(firstName, lastName, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
    }

    //Member Function or Methods or Behavior or Actions
    details(){
        console.log(`Details: ${this.firstName}, ${this.lastName}, ${this.city}`);
    }
}
const anil = new Student("Anil", "Sharma", "Pune");
anil.details();

const jenny = new Student("Jenny", "Tipi", "LA");
jenny.details();

const stew = new Student("Stew", "Job", "LA");
stew.details();