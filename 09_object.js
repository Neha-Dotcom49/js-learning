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
//    Object.entries(student);
   console.log(student);
   console.log(`Accessing element from object`);
   console.log(`Student Name: ${student.stdName}`);
   console.log(`Married status:  ${student.isMarried}`);
   console.log(`City:  ${student["city"]}`);
   
   console.log(`Accessing new entry`);
   student.mobile = "9966 7788 55";
   student.address.city = "Pune";
   console.log(student);
   
   console.log(`------Update-----`);
   student.isMarried = true;
   student.friendsList[1] = "Bill gates";
   console.dir(JSON.stringify(student,null,2));
   
   console.log(`-----Delete------`);
   delete student["city"];
   console.log(student);

   const person = {
    firstName: "Anil",
    lastName: "Sharma",
    city: "Mumbai",
    display: function(){
        console.log(`Full Name: ${this.firstName} ${this.lastName}`);
    }
}
person.display()