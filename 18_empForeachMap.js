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

const mapEmployees = new Map();
arrayEmployees.forEach(employee => {
    mapEmployees.set(employee.emp_id, employee);
});

// Log the details using forEach loop
mapEmployees.forEach((value, key) => {
    console.log(`${key} ===> Name: ${value.emp_name}, Dept: ${value.emp_dept}, Company: ${value.emp_company}, Salary: ${value.emp_salary}`);
});