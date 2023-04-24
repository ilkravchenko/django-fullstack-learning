// Properties of Objects
var carInfo = {make:"Toyota", year:1990, model:"Camry"};
carInfo['make'];
carInfo['year'] = 2000;
carInfo['year'] += 1;

console.dir(carInfo)

for (key in carInfo) {
    console.log(key);
    console.log(carInfo[key]);
}

var myNewObject = {a:"hello", b:[1,2,3], c:{inside:['a', 'b']}};
myNewObject

myNewObject['a']
myNewObject['b'][1]
myNewObject['c']['inside'][1]


// Object's Methods
var simple = {
    prop: "Hello",
    myMethod: function () {
        console.log("The myMethod was called");
    }
}

simple.myMethod()

var myObj = {
    name:"Illia",

    greet: function () {
        console.log("Hello " + this.name);
    }
};

myObj['name']
myObj.greet()