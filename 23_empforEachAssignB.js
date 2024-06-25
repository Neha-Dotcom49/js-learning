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

const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];

console.log(`=====================TCS employees=======================`);
arrayEmployees.forEach((employee) => {
    if (employee.emp_company == 'TCS') {
        console.log(`Employee Name: ${employee.emp_name}, Company: ${employee.emp_company}`);
    }
});


console.log(`============employees with a salary greater than or equal to 50000======================`);
arrayEmployees.forEach((employee) => {
    if (employee.emp_salary >= 50000) {
        console.log(employee);
    }
});


console.log(`============================sum of all employees salary=======================`);
let arrayEmpSalary = arrayEmployees.map( (employee)=> {
    return employee.emp_salary;
});
console.log(arrayEmpSalary);

const sum = arrayEmpSalary.reduce((runningTotal, value)=>{
    return runningTotal + value;
},0 );
console.log(`sum of all employee salary:`,sum);


console.log(`===================average salary=========================================`);
let averageSalary = sum/arrayEmpSalary.length;
console.log(`Average Salary:`,averageSalary);

console.log(`=============== employees with a salary greater than or equal to 75000=====================`);
arrayEmployees.forEach((employee) => {
    if ((employee.emp_dept == 'IT' || employee.emp_dept == 'HR') && employee.emp_salary >= 75000) {
        console.log(employee);
    }
});