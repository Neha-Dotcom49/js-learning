// Parent Class or Super class or Base class
class Vehicle {
    // Data Members Or Properties or Attributes or States
    constructor(company, engine){
        this.company = company;
        this.engine = engine;
    }
    //Member Function or Methods or Behavior or Actions
    details(){
        console.log(`Details: ${this.company}, ${this.engine}`);
    }
}
// Child or Sub class or Derived Class
class HarrierCar extends Vehicle{

    constructor(harrierVersion, launchYear, company, engine){
     super(company, engine);
     this.harrierVersion = harrierVersion;
     this.launchYear = launchYear;
    }
    show(){
     console.log(`Show: ${this.company}, ${this.engine}, ${this.harrierVersion} ${this.launchYear} `);
    }
    //
    details(){
     console.log(`Details of Harrier  Class: ${this.company}, ${this.engine}, ${this.harrierVersion} ${this.launchYear} `);
   }
 }
 let harrier = new HarrierCar("S Plus", 2023, "TATA", "2000CC");
 harrier.show();
 harrier.details();

 // Child or Sub class or Derived Class
class CretaCar extends Vehicle{

    constructor(cretaVersion, launchYear, company, engine){
     super(company, engine);
     this.cretaVersion = cretaVersion;
     this.launchYear = launchYear;
    }
    show(){
     console.log(`Show: ${this.company}, ${this.engine}, ${this.cretaVersion} ${this.launchYear} `);
    }
    details(){
     console.log(`Details of Creta: ${this.company}, ${this.engine}, ${this.cretaVersion} ${this.launchYear} `);
 }
 }

let creta = new CretaCar("Sx Plus", 2023, "Hyundai", "1500CC");
creta.show();
creta.details();

