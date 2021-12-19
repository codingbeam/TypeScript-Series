 export abstract class Person {
    name: string;

    constructor(name:string) {
        this.name = name;
    }

    abstract getName(): string;
    abstract getAge(): number;
}