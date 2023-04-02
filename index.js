
// 1. Write a function called greetCustomer that will log "Welcome to the store" + the name parameter

const greetCustomer = (name) => {
    console.log(`Welcome to the store ${name}`)
}
greetCustomer('Jonathan');


// 2. Write a function called logPositiveOrNegative that will log if the number parameter is a negative number, positive number, or 0
const returnPositiveOrNegative = (num) => {
    if(!num) return 0;
    return num <= 0 ? 'number is Negative' : 'Number is positive';
}

let result2 = returnPositiveOrNegative(2);
console.log("#2",result2);




// 3. Write a function called returnIsPositive that will return if the number parameter is a positive "true" or not  positive "false"
const returnIsPositive = (num1) => {
 return num1 <= 0 ? false : true;
}

let result3 = returnIsPositive(2);
console.log("#3", result3);



// 4. Write a function called returnIsTooShort that will return true if the password parameter is shorter than 8 characters
const returnIsTooShort = (password) => {
   return password.length < 8 ? true : "Password is longer than 8 charecters";
}

let result4 = returnIsTooShort('five');
console.log("#4", result4, "password was shorter than 8 characters");


// 5. Write a function called returnIsBreakingLaw that will return true if the age parameter is < 21 AND drink parameter is "alcohol"
const returnIsBreakingLaw = (age, vevarage) => {
    vevarage.toLowerCase();
    // let conatainAlcohol = ["alcohol", "beer", "wine"];
    // return age < 21 && vevarage === "alcohol" ?  false : true;
    if (age < 21 || vevarage === "alcohol") {
        return true;
    } else {
        return "Cheers!";
    }
}

let results5 = returnIsBreakingLaw(20, "Alcohol");
console.log("#5", results5);


// 6. Make a variable called count.
let count;
// Write a function called addToCount that will add the number parameter to the count variable.
// Call addToCount 4 times with different numbers
const addToCount = (addToNum) => {
 count = addToNum;
 return addToNum++;
}

count = addToCount(2);
console.log(count);
count = addToCount(3);
console.log(count);
count = addToCount(5);
console.log(count);
count = addToCount(10);
console.log(count);



// 7. Write a function called returnIsChase that will return true if the name parameter is "Chase" - Make case insensitive "Chase" "CHASE" "CHasE" all return true
const returnIsChase = (name) => {
    return name.toLowerCase() === "chase" ?  true : "Not Chase";
}
console.log("#7", returnIsChase('ChaSe'));

// 8. Make a variable called class that is an array ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"]
let classNames = ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"];
// Write a function called returnClassIsTooSmall that will return true if the students parameter has less than 10 students
const returnClasIsTooSmall = (classeSize) => {
    return classeSize.length < 10 ? true : "this is a large class";
}

console.log("#8", returnClasIsTooSmall(classNames));




// 9. Make a variable called combineStrings that will take stringOne parameter and stringTwo parameter and return them combined
const combineString = (stringOne, stringTwo) => {
    let combined = `${stringOne}${stringTwo}`;
    return combined;
}

// call this function 3 times with 6 strings.
console.log("#9" ,combineString("hello", "Welcome"));
console.log("#9" ,combineString("hello", "Welcome"));
console.log("#9" ,combineString("hello", "Welcome"));
console.log("#9" ,combineString("hello", "Welcome"));


// 10. Write a function called returnDataType that will return the datatype of the data parameter
const returnDataType = (param) => {
    return typeof param;
}

console.log("#10 type of paramiter is: ", returnDataType(2));


// 11. Write a function called addStudentToClass that will push the student parameter to the class array from problem number 8
const addStudentToClass = (newStudent) => {
     classNames.push(newStudent);
}

addStudentToClass("Will");
// addStudentToClass("Joe");
// addStudentToClass("Mike");
// addStudentToClass("Lisa");
// addStudentToClass("Maria");

// console.log("#11", classNames); 

// Call this function 2 times
// 12. VERY OPTIONAL - Make a variable called extraStudents. This should be an array with about 10 string names. 
let extraStudents = ["Tiffany", "Erika", "Nick", "Chase", "Edgar", "Jonathan", "Jay", "Mark", "Tony"];

// Write a function called fillClass that will loop until the class array has >= 15 students. 
// Every loop one student should be put into the class array and taken out of the extraStudents array
const fillClass = (extraStudents) => {
    let limetClassZise;
    for(let i=0; classNames.length < 10; i++) {
        if(classNames.length < 10) {
            extraStudents.forEach(name => {
                limetClassZise = classNames.push(name);
            });
            return limetClassZise;
        }
    }
}

// combined = classNames.concat(extraStudents);
    // done = combined.filter(size => size.length > 5);
    // console.log(done);

console.log(fillClass(extraStudents));