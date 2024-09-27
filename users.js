const users = {
    "lakhanpalmanik@gmail.com": {
        name: "Manik Lakhanpal",
        password: "coolguy"
    }
};

// Function to add user to the object
function addUser(name, email, password) {
    if (!users[email]) {
        users[email] = {
            name: name,
            password: password,
        };
        return true; // Success
    } else {
        return false; // User with this email already exists
    }
}

function logUser(email, password) {
    if (!users[email]) {
        return false; // No user
    } else {
        if (user[email].password == password) {
            return true; // login success
        } else {
            return false // login fail
        }
    }
}

// Function to check if a user already exists
function userExists(email) {
    return users.hasOwnProperty(email);
}

window.addUser = addUser;
window.userExists = userExists;