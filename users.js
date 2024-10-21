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
    if (users[email].password == password) {
        return true; // login success
    } else {
        return false;
    }
}

// Function to check if a user already exists
function userExists(email) {
    return users.hasOwnProperty(email);
}

// window makes functions globally accessable
window.addUser = addUser;
window.userExists = userExists;
window.logUser = logUser;