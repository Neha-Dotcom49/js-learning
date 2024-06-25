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
const emp_raht = new employee(99, "Mahesh", "E-commerce", 85000, "Infy");

const Employees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_raht];

console.log(`==========Descending order of employee id==========`);
const employeeInfoDescending = Employees.sort((a,b)=>{
    return a.emp_id>b.emp_id?-1:1;
});
const employeeInfoMapped= employeeInfoDescending.map((employee)=>{
    console.log(`ID: ${employee.emp_id}, Name: ${employee.emp_name}, Department: ${employee.emp_dept}`);
});

console.log(`==========Ascending order of employee department=========`);
const employeeInfoascending = Employees.sort((a,b)=>{
    return a.emp_dept>b.emp_dept? 1:-1;
});
const employeeInfoascendingMapped= employeeInfoascending.map((employee)=>{
    console.log(`ID: ${employee.emp_id}, Name: ${employee.emp_name}, Department: ${employee.emp_dept}`);
});

console.log(`==========descending order of employee salary=========`);
const employeeInfodescending = Employees.sort((a,b)=>{
    return a.emp_salary>b.emp_salary? -1:1;
});
const employeeInfodescendingMapped= employeeInfodescending.map((employee)=>{
    console.log(`ID: ${employee.emp_id}, Name: ${employee.emp_name}, Department: ${employee.emp_dept},Salary: ${employee.emp_salary}`);
});







