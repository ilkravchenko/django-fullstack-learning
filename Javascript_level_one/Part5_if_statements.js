// var hot = false;
// var temp = 60;

// if (temp > 80) {
//     hot = true;
//     console.log("Hot outside!");
// }else if (temp <= 80 && temp >= 50) {
//     console.log("Avevrage temp outside!");
// } else if (temp < 50 && temp >= 32) {
//     console.log("It's pretty cold out!");
// } else {
//     console.log("It is very cold now!");
// }

var ham = 10;
var cheese = 10;

var report = "blank";

if (ham >= 10 && cheese >= 10) {
    report = "Strong sales of both ham and cheese.";
} else if (ham === 0 && cheese === 0) {
    report = "Nothing sold!";
} else {
    report = "We had some sales of items";
}

console.log(report);