first_name = prompt("Please, enter a first name: ")
last_name = prompt("Please, enter a last name now: ")
age = parseInt(prompt("Enter your age: "))
heigth = parseInt(prompt("Enter your heigth in cm: "))
pet = prompt("Enter your pet's name: ")
alert("Thank you about your info!")

if ((first_name[0] === last_name[0]) && (age < 30 && age > 20) && (heigth >= 170) && (pet.slice(-1) === "y")) {
    console.log("Welcome to our website Mr. SPY");
} else {
    console.log("Nothing about the SPY");
}
