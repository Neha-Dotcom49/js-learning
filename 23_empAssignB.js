class employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new employee(33, "Anil", "IT", 50000, "TCS");
const emp_radha = new employee(22, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new employee(55, "Rishi", "Finance", 47008, "TCS");
const emp_sonali = new employee(66, "Sonali", "Finance", 45008, "Inty");
const emp_monika = new employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinay = new employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new employee(99, "Mahi", "E-commerce", 85000, "Infy");

const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];

// const tcsEmployees = arrayEmployees.filter((employee)=>{
//     return employee.emp_company=='TCS';
// });

console.log(`=======employees working in ‘TCS’=============`);
arrayEmployees.forEach((employee)=>{
    if (employee.emp_company=='TCS') {
        console.log(`Employee Name:${employee.emp_name},Company Name:${employee.emp_company}`);
    }
  
});

console.log(`===================Finance department employees==================`);
arrayEmployees.forEach((employee)=>{
    if (employee.emp_dept=='Finance') {
        console.log(`Department:${employee.emp_dept},Employee Name:${employee.emp_name}`);
    }
  
});

console.log(`==================employees whose name starts with ‘R’================`);
arrayEmployees.forEach((employee)=>{
    if (employee.emp_name.startsWith('R')) {
        console.log(employee);
    }
});

console.log(`======== employees whose salary is greater than 75000===================`);
arrayEmployees.forEach((employee)=>{
    if (employee.emp_salary>75000) {
        console.log(`Employee Name:${employee.emp_name},Company:${employee.emp_company},Salary:${employee.emp_salary}`);
    }
});

console.log(`=====salary greater than or equal 50000 and from ‘IT’ department======`);
arrayEmployees.forEach((employee)=>{
    if (employee.emp_salary>=50000&& employee.emp_dept=='IT') {
        console.log(employee);
    }
});