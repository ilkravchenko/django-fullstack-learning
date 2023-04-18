// Example of function
// function name(params) {
//     your code here
// }


// basic function
function hello() {
    console.log("Hello World!");
}


// function with one param
function helloYou(name) {
    console.log("Hello " + name);
}


// function with two params
function addNum(num1, num2) {
    console.log(num1 + num2);
}


// function with default params
function helloSomeone(name="Anonym") {
    console.log("Hello " + name);
}


// use return keyword
function formal(name="Sam", title="Sir") {
    //console.log(title + " " + name);
    return title + " " + name;
}


// multiplication
function timesFive(numInput) {
    var result = numInput * 5;
    return result;
}