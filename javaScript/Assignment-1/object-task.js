// JavaScript Practice: 30 Tasks (Basic → Advanced)
// =====================================================================
//  1. Create a constructor function Person(name, age) and log 2 objects.
// ======================================================================
console.log("Question-1");

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Manobala", 32);
const person2 = new Person("yash", 12);

console.log("object1 -->", person1);
console.log("object2 -->", person2);

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  2. Add a method inside constructor to return full details
// ======================================================================
console.log("Question-2");
function Person2(name, age) {
  this.name = name;
  this.age = age;
  this.details = function () {
    return this.name + " " + this.age;
  };
}
const person3 = new Person2("Yash", 10);
console.log(person3.details());
console.log("=====X===========X==============X=================X========");
// =====================================================================
//  3. Convert that method to prototype.
// ======================================================================
console.log("Question-3");
function Person3(name, age) {
  this.age = age;
  this.name = name;
}
Person3.prototype.details = function () {
  return this.name + " " + this.age;
};
const person4 = new Person3("Priya", 34);
console.log(person4.details());
console.log("=====X===========X==============X=================X========");
// =====================================================================
//  4. Create a Car constructor with brand and model
// ======================================================================
console.log("Question-4");
function Car(brand, model) {
  this.model = model;
  this.brand = brand;
}
const car = new Car("hyundai", "i20");
console.log(car);
console.log("=====X===========X==============X=================X========");
// =====================================================================
//  5. Add getCarName method using prototype.
// ======================================================================
console.log("Question-5");
Car.prototype.getCarName = function () {
  return `brand name --> ${this.brand} && model name --> ${this.model}`;
};
console.log(car.getCarName());
console.log("=====X===========X==============X=================X========");

// =====================================================================
//  6. Compare primitive vs object string using typeof.
// ======================================================================

let firstname_primitive = "Manobala";
let firstname_object = new String("Manobala");
console.log(typeof firstname_primitive);
console.log(typeof firstname_object);
console.log(
  `{typeof firstname_primitive}-->${typeof firstname_primitive} === {typeof firstname_object}-->${typeof firstname_object} ==> ${firstname_primitive === firstname_object}`,
);
console.log("=====X===========X==============X=================X========");

// =====================================================================
//  7. Compare number vs Number object.
// ======================================================================
let number_primitive = 36;
let number_object = new Number(36);
console.log(typeof number_primitive);
console.log(typeof number_object);
console.log(
  `{typeof number_primitive}-->${typeof number_primitive} === {typeof number_object}-->${typeof number_object} ==> ${number_primitive === number_object}`,
);
console.log("=====X===========X==============X=================X========");

// =====================================================================
//  8. Compare boolean vs Boolean object.
// ======================================================================
let boolean_primitive = true;
let boolean_object = new Boolean(true);
console.log(typeof boolean_primitive);
console.log(typeof boolean_object);
console.log(
  `{typeof boolean_primitive}-->${typeof boolean_primitive} === {typeof boolean_object}-->${typeof boolean_object} ==> ${boolean_primitive === boolean_object}`,
);
console.log("=====X===========X==============X=================X========");

// =====================================================================
//  9. Create an array using [] and new Array().
// ======================================================================

let myArray = [1, 2, 3, 4];
let array_object = new Array(1, 2, 3, 4);
console.log(typeof myArray);
console.log(typeof array_object);
console.log(myArray === array_object);
// javascript always check by reference
console.log("=====X===========X==============X=================X========");

// =====================================================================
//  10. Test new Array(5) and observe result.
// ======================================================================
let newArray = new Array(5);
// new Array(5) --> 5 empty slots (holes), not actual values.
// if need values can use fill(value,start,end)
console.log(newArray);
console.log("=====X===========X==============X=================X========");

// =====================================================================
//  11. Create a function using function keyword
// ======================================================================
function greeting() {
  console.log("this is funtion created using funtion keyword");
}
greeting();
console.log("=====X===========X==============X=================X========");

// =====================================================================
//  12. Create same function using new Function().
// ======================================================================
let greet = new Function(
  console.log("this is funtion created using new Function keyword"),
);
greet();
let addFunction = new Function("num1", "num2", "return num1+num2");
console.log(addFunction(5, 5));
console.log("=====X===========X==============X=================X========");

// =====================================================================
//  13. Explain which is better and why.
// ======================================================================
// funtion keyword is preferred bcz its safe and faster since it is complied once and not like new Funtion bcz it is created at run time
// local scope for new Function()--> cant access local scope

let x = "local scope";
function myHouse() {
  let locker = 500;

  // let newKeywordFunction= new Function("return x"); // it only sees global scope means it can have access for global variable but not local.
  // return newKeywordFunction();
  //output -> local scope

  let newKeywordFunction = new Function("return x"); //it doesnt have access to local scope or variable
  return newKeywordFunction();
  // output -> locker is not defined
}

console.log(myHouse());
// console.log(keywordFunction());//"hello"
// console.log(newKeywordFunction());//"local scope"
console.log("=====X===========X==============X=================X========");

// =====================================================================
//  14. Create an object with method and log this
// ======================================================================

const student = {
  name: "mano",
  age: 36,
  marks: function () {
    console.log(this.age);
  },
};
student.marks(); // output --> entire object bcz when calling method using "dot" it refers to object before it
console.log("=====X===========X==============X=================X========");

// =====================================================================
//  15. Extract method into variable and call it
// ======================================================================

let getMarks = student.marks.bind(student); // when we assuign method to variable this(student object) is lost

getMarks();

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  16. Observe change in this behavior
// ======================================================================

//  normally method dont use this automatically unless we write it so when there is this keyword then in order to call the method we need object otherwise it wont work since the this reference is lost it points to undefined
//this is only for methods not for properties

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  17. Create 2 objects using same constructor and compare methods
// ======================================================================

function Student(Name, Age, City) {
  this.Name = Name;
  this.Age = Age;
  this.City = City;
  this.Address = function () {
    return `${this.Name} : Cosmocity-pudupakkam -${this.City}`;
  };
}
let student1 = new Student("Manobala", 36, "Chennai");
let student2 = new Student("yash", 12, "Chennai");
console.log(student1.Address === student2.Address);
// every time when we create object seperate refrence is created

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  18. Add method via prototype and test sharing.
// ======================================================================
function Bikes(model, brand) {
  this.model = model;
  this.brand = brand;
}
Bikes.prototype.drive = function () {
  return "driving";
};

let bike1 = new Car("splender", "hero");
let bike2 = new Car("scooty", "TVS");

console.log(bike1.drive === bike2.drive);

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  19. Print __proto__ of an array.
// ======================================================================

let strArray = ["manobala", "yash", "priya"];
console.log("proto");
console.log(Object.getPrototypeOf(strArray));

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  20. Print __proto__.__proto__ and analyze.
// ======================================================================

console.log(Object.getPrototypeOf(Object.getPrototypeOf(strArray)));

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  21. Find where toString() comes from.
// ======================================================================

console.log(strArray.hasOwnProperty("toString"));
console.log(strArray.__proto__.hasOwnProperty("toString"));
console.log(strArray.__proto__.__proto__.hasOwnProperty("toString"));

//Array.prototype --> also has toString() and Object.prototype also has its own toString()
// Array overrides Object one

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  22. Add custom method to Array.prototype
// ======================================================================

console.log(Array.__proto__.hasOwnProperty("lengthArray")); //false
Array.prototype.lengthArray = function () {
  return this.length;
};

let numberArr = [1, 2, 3, 4];
console.log(numberArr.lengthArray());
console.log(Array.prototype.hasOwnProperty("lengthArray")); //true

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  23. Test that method on multiple arrays
// ======================================================================

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const cars = ["Saab", "Volvo", "BMW"];

console.log(fruits.lengthArray()); //4
console.log(cars.lengthArray()); //3

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  24. Create a Student constructor with name and marks
// ======================================================================

function Student1(name, marks,result) {
  this.name = name;
  this.marks = marks;
  this.result=result;
}
let stu1=new Student1("mano",68,"pass");
console.log(stu1);

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  25. Add getResult() method via prototype.
// ======================================================================
Student1.prototype.getResults=function(){
    return this.result;
}
let stu2=new Student1("yash",85,"pass");
console.log(stu2.getResults()); //pass

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  26. Add static method Student.isStudent(obj).
// ======================================================================

Student1.compareMarks=function(s1,s2){
    return s1.marks > s2.marks ? s1.name : s2.name;
}

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  27. Create multiple students and test methods.
// ======================================================================
let stu3=new Student1("arun",45,"fail");
let stu4=new Student1("geek",56,"pass");

console.log(Student1.compareMarks(stu3,stu4));

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  28. Write your own myNew() function.
// ======================================================================

function myNew(constructor,...args){
    let obj={};
    obj.__proto__=constructor.prototype;
    let res=constructor.apply(obj,args);
    return res instanceof Object ? res:obj;

}
console.log(myNew);

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  29. Test myNew() with Person constructor.
// ======================================================================

let person5=myNew (Person,"yash",12);
console.log(person5);

console.log("=====X===========X==============X=================X========");

// =====================================================================
//  30. Explain prototype chain in your own words.
// ======================================================================

// prototype chain is finding the property when its not directly present in Object.
// esxample toString method

let arrays=[2,1,4,5];

console.log(Array.hasOwnProperty("toString"));//false bcz Array doesnot have toString method 
console.log(Array.prototype.hasOwnProperty("toString"));//true bcz Array.prototype ==>Funtion.prototype doesnot have toString method 