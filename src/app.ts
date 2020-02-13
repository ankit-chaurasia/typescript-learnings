class Department {
  // private id: string;
  // private name: string;
  // private employees: string[] = [];
  protected employees: string[] = [];
  static fiscalyear: string = '2020';

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department; ${this.name}, ID: ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return {
      name,
    };
  }
}

console.log(Department.createEmployee('Max'));
console.log(Department.fiscalyear);

const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// accounting.employees.push('Outside employee'); // Error: Property 'employees' is private and only accessible within class 'Department'
accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'asas', describe: accounting.describe };

// accountingCopy.describe();

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT Department');
    // super should be called before using this i.e parent constructor should get initialized first
    this.admins = admins;
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
}

const iTDepartment = new ITDepartment('I1', ['Max']);
// iTDepartment.employees = []; // Error:Property 'employees' is protected and only accessible within class 'Department' and its subclasses

class AccountDepartment extends Department {
  private lastReport: string;
  private static instance: AccountDepartment;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    return 'No report found';
  }

  set mostRecentReport(value: string) {
    this.lastReport = value;
  }
  private constructor(id: string, private reports: string[]) {
    super(id, 'Account');
    this.lastReport = reports[0];
  }
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountDepartment('Ai', []);
    return this.instance;
  }
}

// const account = new AccountDepartment('A1', ['report1']);
// // Read property
// console.log(account.mostRecentReport);
// // Set property
// account.mostRecentReport = 'new latest report';
// console.log(account.mostRecentReport);
const account1 = AccountDepartment.getInstance();
const account2 = AccountDepartment.getInstance();
console.log(account1 === account2 ? 'single instance' : 'new instance');
