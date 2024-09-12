var num :number =123;
var str :string ="this is a string type"
console.log(num, str);
var strarr :string[] =["77","88"];
strarr.push("string");
console.log(strarr);
//there is a special type of array which accepts specific type for each element in the array
let typedarrortuple:readonly[string,boolean,number]=["string",true,78];
typedarrortuple=["updatedstring",false,50];
//it will check order also how we can declared in that way only we have to initialize.
console.log(typedarrortuple);
//if it is readonly tuple it will not accept.
// typedarrortuple.push("adding extra it will accept because whatever declared that places only have strong typing")
console.log(typedarrortuple);
var typeobj:{num:number,str:string,bool:boolean}={
    num:123,
    str:"str",
    bool:true
}
console.log(typeobj.num)
//enums
//if not given any value for the elements in enum type it will automatically give from 0 and increment by 1 so on
enum CardinalDirections {
    North,
    East,
    South,
    West
  };

console.log(CardinalDirections.North,CardinalDirections.West);
//if we given any number to starting then from that number it will increment and assign to the next elements
enum CardinalDirections2 {
    North=1,
    East,
    South,
    West
  };

console.log(CardinalDirections2.North,CardinalDirections2.West);
//and also we can assign fully to do not increment
enum CardinalDirections1 {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };

console.log(CardinalDirections1.North);
//Aliases --> like creating a template of types.
type name = string;
type contact = number;
type ismarried = boolean;
type combo ={
    comboname:name,
    combocontact:contact,
    combomarried:ismarried
}
const employeeName:name="employeeeee";
const employeeContact:contact=90728479;
const employeemarried:ismarried=false;
const comboemployee:combo ={
    comboname:"employee2",
    combocontact:968669869,
    combomarried:true
}
//----------------------------------
//interfaces ---> these are also same type of alias but applied only for objects.
interface species{
    livingOn:string
}
const specie1:species={
    livingOn:"earth"
}
interface animal extends species{
    namee:string,
    nooflegs:number
}
const animal1:animal={
    namee:"horse",
    nooflegs:4,
    livingOn:"earth"
}
// we can also extend these interfaces like classes
