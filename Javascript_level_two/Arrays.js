// mutable
// array = [values]

var countries = ["USA", "Germany", "China"]

// grab one item
countries[0]

// reassignin values
countries[2] = "France"

// different data types
var mixed = [true, 25, 25.1, "Illia"]

//length
mixed.length

// adding and removing elements (push, pop)
var myArr = ['one', 'two', 'three']
var lastItem = myArr.pop()
myArr.push("new item")

// last index from arr
var lastItem = myArr[myArr.length - 1]

//nested arrays
var nested = [[1,2,3],[4,5,6]]


// array itteration
var myArr = ['one', 'two', 'three']
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

for (i of myArr) {
    console.log(i);
}

// myArr.forEach(element => {
//     console.log(element);
// });

for (i of myArr) {
    alert(i);
}

myArr.forEach(alert)


function addAwesome(name) {
    console.log(name + " is Awesome!");
}

myArr.forEach(addAwesome)