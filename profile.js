const editBtn = document.getElementById("editBtn");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

// Load saved data when the page opens
if (localStorage.getItem("name")) {
    userName.textContent = localStorage.getItem("name");
}

if (localStorage.getItem("email")) {
    userEmail.textContent = "Email: " + localStorage.getItem("email");
}

// Edit profile
editBtn.addEventListener("click", function () {

    let newName = prompt("Enter your new name:");
    let newEmail = prompt("Enter your new email:");

    if (newName) {
        userName.textContent = newName;
        localStorage.setItem("name", newName);
    }

    if (newEmail) {
        userEmail.textContent = "Email: " + newEmail;
        localStorage.setItem("email", newEmail);
    }

});