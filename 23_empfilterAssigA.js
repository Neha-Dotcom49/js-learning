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

console.log(`============all employees from 'TCS'===========`);
const employeesFromTCS = arrayEmployees.filter(employee => employee.emp_company === 'TCS');
employeesFromTCS.forEach(employee => {
    console.log(`Company: ${employee.emp_company}, Employee: ${employee.emp_name}`);
});

console.log(`=============Calculate the average salary of employees from the company 'Wipro'============`);
const itEmployees = arrayEmployees.filter(employee => employee.emp_company === 'Wipro');

if (itEmployees.length > 0) {
    const sumITSalaries = itEmployees.reduce((total, employee) => total + employee.emp_salary, 0);
    const averageSalaryITDept = sumITSalaries / itEmployees.length;
    console.log(`Average salary of the 'IT' department:`, averageSalaryITDept);
} else {
    console.log(`There are no employees in the 'IT' department.`);
}

console.log(`==========Calculate the average salary of employees from companies 'Wipro' or 'Infy'============`);
const wiproInfyEmployees = arrayEmployees.filter(employee => employee.emp_company === 'Wipro' || employee.emp_company === 'Infy');

if (wiproInfyEmployees.length > 0) {
    const sumWiproInfySalaries = wiproInfyEmployees.reduce((total, employee) => total + employee.emp_salary, 0);
    const averageSalaryWiproInfy = sumWiproInfySalaries / wiproInfyEmployees.length;
    console.log(`Average salary of employees from 'Wipro' or 'Infy':`, averageSalaryWiproInfy);
} else {
    console.log(`There are no employees from 'Wipro' or 'Infy'.`);
}