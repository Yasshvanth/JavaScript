// 1 Create variables using var, let, and const and print them in the console

// var
var firstName="manobala"
var lastname="Surulichamy"

// let
let Name="yashwanth"
let Age=36

// const
const pi=3.14
radius=10
Area=pi*radius**2


console.log(Area)
console.log(Name,Age)
console.log(firstName,lastname)

// 2 Create variables for name, age, and city and print a sentence using template strings

let naame="Manobala"
let city="chennai"

console.log(`my naame is ${naame} and my age is ${Age} and i live in ${city}`)

// 3 Create a variable with number 50 and convert it to a string.

let number=50
text=String(number)

console.log(text ,typeof text)


// 4 Convert the string '123' into a number.

let string_to_text='123'
convert_to_number=parseInt(string_to_text)

console.log(`Given string ${string_to_text} and its type -->${typeof string_to_text}\nconverted to number ${convert_to_number} and its typ after conversion is-->${typeof convert_to_number}`)


// 5 Create a boolean variable isStudent and print its type using typeof.

let isStudent=true

console.log(`typeof isStudent is --> ${typeof isStudent}`)

// 6 Create an array with 5 different data types and print it

let num_Array=[12,32,65,98]
let str_Array=["'mano'","'bala'","'yashwanth'"]
let boolean_Array=[true,false,true]
let null_Array=[null,null,null]



console.log(`number Array --> [${num_Array}]`)
console.log(`String Array --> [${str_Array}]`)
console.log(`boolean Array --> [${boolean_Array}]`)
// console.log(`null Array --> [${null_Array}]`) 
console.log(null_Array)

// 7 Create an object called person with name, age, and job and print it.

let person={
    "Name":"manobala",
    "Age":36,
    "Job":"tester"
}

console.log(person)
console.log(typeof person)

// 8 Use Math.round(), Math.floor(), and Math.ceil() on the number 5.7

let number_Math=5.7

console.log(`number = 5.7 and its value when Math.floor() --> ${Math.floor(number_Math)}`)
console.log(`number = 5.7 and its value when Math.ceil() --> ${Math.ceil(number_Math)}`)
console.log(`number = 5.7 and its value when Math.round() --> ${Math.round(number_Math)}`)

// 9 Generate a random number using Math.random().

let from_number=1
let till_number=100

console.log(Math.floor(Math.random()*(till_number-from_number+1)+from_number))

// 10 Find the length of the string 'JavaScript Learning'.

let len_String='JavaScript Learning'

console.log(`lenght of the given string '${len_String}' is --> ${len_String.length}`)

// ==================================================================================
//                                  INTERMEDIATE TASK 
// ==================================================================================

// 1 Create a string 'Hello I am learning JavaScript'. Convert it to uppercase and lowercase.

let upper_String='Hello I am learning JavaScript'

console.log(`Given string '${upper_String}' and after conversion to upper --> ${upper_String.toUpperCase()}`)



// 2 Create a string 'Apple,Banana,Mango,Orange' and convert it into an array using split().

let fruits_string ='Apple,Banana,Mango,Orange'

fruits=fruits_string.split(",")

console.log(fruits)


// 3 Replace the word 'JavaScript' with 'JS' in a sentence

let rep_words='i love JavaScript because its been used so vast all around the world'

rep_words=rep_words.replace("JavaScript","JS")

console.log(rep_words)



// 4 Check if the word 'developer' exists inside a string using includes().

let includes_String="The client wants to know if the developer included the mobile responsive design in the update."

console.log(includes_String.includes("developer"))


// 5 Create two numbers and perform +, -, *, /, % operations.

let num1=130
let num2=36

// addition
addition=num1+num2

// subtraction
subtract=num1-num2

// multiplication
multiply=num1*num2

// division
division=Math.floor(num1/num2)

// Modulus
modulo=num1%num2

console.log(addition)
console.log(subtract)
console.log(multiply)
console.log(division)
console.log(modulo)

// 6 Create a sentence using template literals describing yourself.

console.log(`My Name is ${naame} and i am ${Age} years old and I live in ${city}`)


// 7 Slice the word 'Programming' to get 'gram'.

let slice_word='Programming'

console.log(slice_word.slice(3,7))

// 8 Convert '200.45' to integer and float using parseInt and parseFloat.

let conv_strtp_int='200.45'

console.log(`Given String --> ${conv_strtp_int}\nconvert to float -->${ parseFloat(conv_strtp_int)}  and its type ${typeof parseFloat(conv_strtp_int)}\nconvert to Integar -->${parseInt(conv_strtp_int)}  and its type ${typeof parseInt(conv_strtp_int)}`)


// 9 Create an array of numbers and convert it to a string.

let array_Tostring=num_Array

console.log(`Type of given number array ${array_Tostring} is -->${typeof array_Tostring}\nafter conversion to string ${array_Tostring.toString()} and its type -->${typeof array_Tostring.toString()}`)


// 10 Generate a random number between 1 and 10.

let min=1
let max=10

console.log(Math.floor(Math.random()*(max-min+1)+min))

// ==================================================================================
//                                  ADVANCED TASK 
// ==================================================================================

// 1 Create a mini profile generator using template literals (name, age, job, city)

let job="Tester"
const profile=`
----------------------------
|                           |
|    Name  : ${naame}       |
     Age   : ${Age}         
|    Job   : ${job}         |
|    City  : ${city}        |
|                           |
----------------------------
`
console.log(profile)


// 2 Create a simple 6 digit random password using Math.random().

let min_number=100000
let max_number=999999
randm_number_password=Math.floor(Math.random()*(max_number-min_number+1)+min_number)

console.log(randm_number_password)


// 3 Create an object called student with name, marks, and passed status

const student={
    "Name" : "Manobala",
    "Marks" :96,
    "Pass Status" : "Passed"
}

console.log(student)


// 4 Write a script that checks if a string contains the word 'JavaScript'.

function checkContain(String,incl_str){

    return String.includes(incl_str)

}

let sent= "i love JavaScript"
console.log(checkContain(sent,'JavaScript'))


// 5 Create a string and count how many characters it has.

console.log(`No of Character in the given String '${sent}' --> ${sent.length}`)


// 6 Convert different values to numbers: true, false, null, 'Hello'. Observe results.

let value1=true
let value2=false
let value3=null
let value4='Hello'

console.log(`----------------------------\nValue    after_convert_Number\n----------------------------\n${value1}       ${Number(value1)}\n${value2}      ${Number(value2)}\n${value3}       ${Number(value3)}\n${value4}      ${Number(value4)}`)

// 7 Create an array of names and join them into a single string.

let name_array=["I","am","manobala","from","chennai"]

console.log(name_array.join(" "))


// 8 Generate 5 random numbers and print them.

console.log(Math.floor(Math.random()*(max_number-min_number+1)+min_number))
console.log(Math.floor(Math.random()*(max_number-min_number+1)+min_number))
console.log(Math.floor(Math.random()*(max_number-min_number+1)+min_number))
console.log(Math.floor(Math.random()*(max_number-min_number+1)+min_number))
console.log(Math.floor(Math.random()*(max_number-min_number+1)+min_number))


// 9 Create a sentence and replace one word dynamically
let sentence=sent
exist_word="JavaScript"
replace_word="Python"

console.log(`original sentence --> ${sentence}\nAfter word replacement --> ${sentence.replace(exist_word,replace_word)}`)


// Create a simple greeting message for a user using template strings.

console.log(`Hi! Welcome to my WebPage :)\nMy Name is ${naame} and I live in ${city}\nNice to Meet you `)