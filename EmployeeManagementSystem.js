var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var emp1 = {
    id: 7,
    name: 'Rintaro Tsumugi',
    position: 'Operations Manager',
    salary: 520000
};
var manager1 = {
    id: 9,
    name: 'Madoka Wantaro',
    position: 'Public Relations',
    salary: 98000,
    teamSize: 11
};
var Department = /** @class */ (function () {
    function Department() {
        this.employees = [
            {
                id: 1,
                name: 'Ootani Youka',
                position: 'HR Manager',
                salary: 500000
            },
            {
                id: 2,
                name: 'Nishida Kanoko',
                position: 'Marketing Specialist',
                salary: 420000
            },
            {
                id: 3,
                name: 'Yamada Kaoru',
                position: 'Finance Analyst',
                salary: 460000
            },
            {
                id: 4,
                name: 'Yamaguchi Souta',
                position: 'Software Engineer',
                salary: 480000
            },
            {
                id: 5,
                name: 'Tachibana Renge',
                position: 'Project Manager',
                salary: 530000
            }
        ];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.removeEmployee = function (id) {
        var selectedEmployeeIndex = this.employees.findIndex(function (emp) { return emp.id === id; });
        this.employees.splice(selectedEmployeeIndex, 1);
        console.log("Employee object deleted successfully");
    };
    Department.prototype.getTotalSalary = function () {
        var totalSalary = this.employees.reduce(function (sumSal, curVal) { return sumSal + curVal.salary; }, 0);
        return totalSalary;
    };
    Department.prototype.listEmployee = function () {
        console.log(this.employees);
    };
    return Department;
}());
var GenericStorage = /** @class */ (function () {
    function GenericStorage() {
        this.genArray = [];
    }
    GenericStorage.prototype.add = function (item) {
        this.genArray.push(item);
        console.log("Added Item successfully");
    };
    GenericStorage.prototype.remove = function (item) {
        var indexToRemove = this.genArray.findIndex(function (el) { return el === item; });
        this.genArray.splice(indexToRemove, 1);
        console.log("Removed Item successfully");
    };
    GenericStorage.prototype.getAll = function () {
        return this.genArray;
    };
    return GenericStorage;
}());
function updateSalary(employee, newSalary) {
    var updatedSalaryObject = __assign({}, structuredClone(employee));
    updatedSalaryObject.salary = newSalary;
    return updatedSalaryObject;
}
console.log("Updating Employee Salary");
var emp2 = updateSalary(emp1, 98000);
console.log(emp2);
console.log('-----------------------------------------------');
console.log("Creating a Department and Listing Employees");
var department = new Department();
department.listEmployee();
console.log('-----------------------------------------------');
console.log("Adding an Employee to the Department");
department.addEmployee(emp1);
department.listEmployee();
console.log('-----------------------------------------------');
console.log("Removing an Employee from the Department");
department.removeEmployee(3);
department.listEmployee();
console.log('-----------------------------------------------');
console.log("Calculating Total Salary of the Department");
console.log("Total Salary:", department.getTotalSalary());
console.log('-----------------------------------------------');
console.log("Using Generic Storage to Store Employees");
var storage = new GenericStorage();
storage.add(emp1);
storage.add(manager1);
console.log(storage.getAll());
console.log('-----------------------------------------------');
console.log("Removing an Employee from Generic Storage");
storage.remove(emp1);
console.log(storage.getAll());
console.log('-----------------------------------------------');
