interface IEmployee{
    id:number;
    name:string;
    position:string;
    salary:number;
}

const emp1 : IEmployee = {
    id: 7,
    name: 'Rintaro Tsumugi',
    position: 'Operations Manager',
    salary: 520000
};

interface IManager extends IEmployee{
    teamSize:number;
}

const manager1 : IManager = {
    id:9,
    name:'Madoka Wantaro',
    position  : 'Public Relations',
    salary : 98000,
    teamSize : 11
};

class Department{
    private employees: IEmployee[] = [
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

    public addEmployee(employee:IEmployee){
        this.employees.push(employee);
    }
    public removeEmployee(id:number){
        const selectedEmployeeIndex:number = this.employees.findIndex((emp)=>emp.id===id);
        this.employees.splice(selectedEmployeeIndex,1);
        console.log("Employee object deleted successfully");
    }
    public getTotalSalary():number{
        const totalSalary:number = this.employees.reduce((sumSal,curVal)=>sumSal+curVal.salary,0);
        
        return totalSalary;
    }
    public listEmployee():void{
        console.log(this.employees);
    }
}

class GenericStorage<T>{
    public genArray :T[] = [];
    public add(item:T):void{
        this.genArray.push(item);
        console.log("Added Item successfully");
    }
    public remove(item:T):void{
       const indexToRemove = this.genArray.findIndex((el)=>el === item);
       this.genArray.splice(indexToRemove,1);
       console.log("Removed Item successfully");
    }
    public getAll():T[]{
        return this.genArray;
    }
}


function updateSalary<T extends IEmployee>(employee:T, newSalary:number):T{
    const updatedSalaryObject:T= {...structuredClone(employee)};
    updatedSalaryObject.salary = newSalary;
    return updatedSalaryObject;
}


console.log("Updating Employee Salary");
const emp2: IEmployee = updateSalary(emp1, 98000);
console.log(emp2);
console.log('-----------------------------------------------');

console.log("Creating a Department and Listing Employees");
const department = new Department();
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
const storage = new GenericStorage<IEmployee>();
storage.add(emp1);
storage.add(manager1);
console.log(storage.getAll());
console.log('-----------------------------------------------');

console.log("Removing an Employee from Generic Storage");
storage.remove(emp1);
console.log(storage.getAll());
console.log('-----------------------------------------------');
