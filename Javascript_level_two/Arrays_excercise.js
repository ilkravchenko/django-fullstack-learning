var roster = []

// ADD A NEW STUDENT

function addNewStudents(name) {
    roster.push(name);
}

// REMOVE STUDENT

function removeStudents(arr, name) {
    var index = arr.indexOf(name);
    if (index > -1) {
        arr.splice(index, 1);
    }

    return arr
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function displayRoster() {
    console.log(roster);
}

// Start by asking if they want to use the web app
user_input = prompt("Do you want start working with our WEB App for students? Type 'y' or 'n'.")
if (user_input == 'y') {
    user_input = true
} else {
    user_input = false
}
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
while (user_input) {
    action = prompt("Please select an action: add, remove, display or quit.").toLowerCase()
    if (action == 'add') {
        name = prompt("What name would you like to add?")
        addNewStudents(name)
    } else if (action == 'remove') {
        name = prompt("What name would you like to remove?")
        removeStudents(roster, name)
    } else if (action == 'display') {
        displayRoster()
    } else {
        user_input = false
    }
}