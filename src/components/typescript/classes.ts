// class Person {
//     //protected name: string = "string name";
//     //public name: string = "string name";
//     private readonly name: string = "string name";
//     public constructor(){
//         this.name="hello";
//         console.log(this.name);
//     }
//   }
  
//   class Person1 extends Person {
//     public constructor() {
//       super();
//       //console.log(this.name); // Logs "string name"
//     }
//   }
  
//   const person1 = new Person1();
interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  
    public toString(): string {
      return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
  }
  
  class Square extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }
  
    // this toString replaces the toString from Rectangle
    public override toString(): string {
      return `Square[width=${this.width}]`;
    }
  }
  const sq= new Square(20);
  console.log(sq.toString())