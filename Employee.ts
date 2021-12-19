import { Person } from "./Person";
export class Employee extends Person{
    empCode: number;
    
    constructor(name: string, empCode: number) {
        super(name);
        this.empCode = empCode
    }

    display(): string {
        // return super.display()
        return `${this.name} ${this.empCode}`
    }
}