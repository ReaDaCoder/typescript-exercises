"use strict";
let surname = 'Makgabutla';
let age = 23;
let accolades = [];
let sringOrNum;
function coupleTotalAge(lady, guy) {
    return lady + guy;
}
console.log(coupleTotalAge);
function salary(income) {
    let num = 2356.42;
    return num.toFixed();
}
console.log(salary);
function ageOrname(name, student) {
    if (student = true) {
        return name.toUpperCase();
    }
    else
        return name.toLowerCase();
}
console.log(ageOrname);
class Person {
    constructor(name, age, socialSecurityNumber) {
        this.socialSecurityNumber = socialSecurityNumber;
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }
    getName() {
        return this.name;
    }
}
