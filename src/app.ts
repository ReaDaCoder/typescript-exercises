// Exercise 1
let surname = 'Makgabutla';
let age: number = 23;
let accolades = [];
let sringOrNum: string | number;

//Exercise 2
type stringOrBool = string | boolean;

//Exercise 3 Functions
function coupleTotalAge(lady: number, guy:number): number{
    return lady+ guy;
}
console.log(coupleTotalAge);

function salary(income: number){
    let num = 2356.42;
    return num.toFixed();
}
console.log(salary);

function ageOrname(name: string, student: boolean){
    if(student = true){
        return name.toUpperCase();
    } else return name.toLowerCase();
}
console.log(ageOrname);

//Exercise 4
class Person {
    name: string
    age: number
    constructor(
        name: string, 
        age: number,
        private socialSecurityNumber: number,
    ){
        this.name = name
        this.age = age
        this.socialSecurityNumber = socialSecurityNumber
    }
    getName(){
        return this.name;
    }
}

// Exercise 5

 class Calculator{
    num1: number
    num2: number
    constructor(
        num1:number, 
        num2:number){
            this.num1 = num1
            this.num2 =num2
    }
    getSum(){
        return this.num1 + this.num2;
    }

    getDifference(){
        return this.num1 - this.num2;
    }

    getMultiplication(){
        return this.num1 + this.num2;
    }
    getDivision(){
        return this.num1 / this.num2;
    }
 }

 function add(num1:number, num2:number){
    return getSum();
 }

 function difference(num1:number, num2:number){
    return getDifference();
 }

 function multiplication(num1:number, num2:number){
    return getMultiplication();
 }

 function division(num1:number, num2:number){
    return getDivision();
 }

