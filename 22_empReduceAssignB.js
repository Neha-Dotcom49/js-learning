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

console.log(`===========All Employee from Wipro Company============`);
const employeesFromWipro = arrayEmployees.filter(employee => employee.emp_company == 'Wipro');
employeesFromWipro.forEach(employee => {
    console.log(`Company: ${employee.emp_company}, Employee: ${employee.emp_name}`);
});

console.log(`============employees from ‘IT’ OR ‘HR’ dept============`);
const itHrEmployee = arrayEmployees.filter(employee => employee.emp_dept == 'IT' || employee.emp_dept == 'HR');
itHrEmployee.forEach(employee => {
    console.log(`Department: ${employee.emp_dept}, Employee: ${employee.emp_name}`);

});

console.log(`========= employees whose emp id’s are greater than 50==========`);
const employeesIdGreaterThan50 = arrayEmployees.filter(employee => employee.emp_id>50);

employeesIdGreaterThan50.forEach(employee => {
    console.log(`ID: ${employee.emp_id}, Employee: ${employee.emp_name}`);
    
});

console.log(`===========employees whose names start with letter ‘A’ or ‘V’ or ‘M’===========`);
const nameStartWith = arrayEmployees.filter(employee => employee.emp_name.startsWith( 'A') || employee.emp_name.startsWith( 'V') || employee.emp_name.startsWith('M')  );
nameStartWith.forEach(employee => {
    console.log(`Employee: ${employee.emp_name}`);

});

console.log(`============average salary of the employee for all the department==================`);

const sum = arrayEmployees.reduce((runningTotal, employee)=>{
    return runningTotal + employee.emp_salary;
},0 );
let averageSalary = sum/arrayEmployees.length;
console.log(`Average Salary:`,averageSalary);

console.log(` ============average salary for ‘IT’ department=================`);
const itEmployees = arrayEmployees.filter(employee => employee.emp_dept === 'IT');

if (itEmployees.length > 0) {
    const sumITSalaries = itEmployees.reduce((total, employee) => total + employee.emp_salary, 0);
    const averageSalaryITDept = sumITSalaries / itEmployees.length;
    console.log(`Average salary of the 'IT' department:`, averageSalaryITDept);
} else {
    console.log(`There are no employees in the 'IT' department.`);
}