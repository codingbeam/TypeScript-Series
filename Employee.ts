import { Person } from "./Person";

export class Employee extends Person{
    age: number;
    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }
    getName(): string {
        return `${this.name}`
    }
    getAge(): number {
        return this.age
    }
}