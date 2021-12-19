export class Person{
    readonly name:string = "Nikhil";
    constructor(name: string) {
        this.name = name
    }
    display(): string{
      return `${this.name}`
  }
    
 }