
console.log(`===================================Step-1 Vehicle Details===========================================`);
class Vehicle {
// Data Members Or Properties or Attributes or States
    constructor(brand,model,year,color,price){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price =price;
    }
     //Member Function or Methods or Behavior or Actions
     details(){
        console.log(`Vehicle Details:`);
        console.log(`Brand: ${this.brand}, Model:${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`);
    }

}
const vehicle1 = new Vehicle('Honda','F-150',2021,'Black',80000);
vehicle1.details();
const vehicle2 = new Vehicle('BMW','F-150',2022,'Black',50000);
vehicle2.details();
const vehicle3 = new Vehicle('Thar','2021 LX',2022,'Black',1200000);
vehicle3.details();
const vehicle4 = new Vehicle('Bullet','B-350',2022,'Black',200000);
vehicle4.details();
const vehicle5 = new Vehicle('Ford','F-150',2023,'Red',32000);
vehicle5.details();


console.log(`====================================Step-2 College Details=======================================================`);
class College{
    constructor(name,location,courses,principle){
        this.name = name;
        this.location = location;
        this.courses = courses;
        this.principle = principle;
    }
    display(){
        console.log(`College Details:`);
        console.log(`Name: ${this.name}, Location:${this.location}, Courses: ${this.courses}, Principle: ${this.principle}`);
    } 
}
const college1 = new College('Tsec','Zhiri','B.E/B.tech','jack')
college1.display();
const college2 = new College('Abc','jalgaon','Pharma','jenny')
college2.display();
const college3 = new College('XYZ','pune','Art','Stew')
college3.display();
const college4 = new College('Lmn','Mumbai','B.E/B.tech','rojie')
college4.display();