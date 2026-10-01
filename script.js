// Assignment 2 JavaScript Features
// Implemented options: 1, 2, 4, 5
// Not implemented: option 3 (Dark Mode), option 6 (Interactive Project Section)

// Option 5: Welcome message
window.addEventListener("load", function () {
    const welcome = document.getElementById("welcomeMessage");
    welcome.textContent = "Welcome to my portfolio page!";
    welcome.style.display = "block";
});

// Option 2: Show/Hide sections
document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", function () {
        const target = document.getElementById(this.dataset.target);
        if (target.style.display === "none") {
            target.style.display = "block";
        } else {
            target.style.display = "none";
        }
    });
});

// Option 4: Dynamic Skills List
document.getElementById("addSkillBtn").addEventListener("click", function () {
    const input = document.getElementById("newSkill");
    const skill = input.value.trim();

    if (skill !== "") {
        const list = document.querySelector("#skills ul");
        const item = document.createElement("li");
        item.textContent = skill;
        list.appendChild(item);
        input.value = "";
    }
});

// Option 1: Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const result = document.getElementById("formMessage");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        result.textContent = "Please fill in all required fields.";
        result.className = "error";
    } else if (!emailPattern.test(email)) {
        result.textContent = "Please enter a valid email address.";
        result.className = "error";
    } else {
        result.textContent = "Message sent successfully!";
        result.className = "success";
    }
});

// =========================
// DARK MODE
// =========================

const darkModeButton = document.getElementById("dark-mode-btn");

darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "Light Mode";
    } else {
        darkModeButton.textContent = "Dark Mode";
    }
});

// =========================
// INTERACTIVE PROJECTS
// =========================

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const project = button.parentElement;
        const details = project.querySelector(".project-details");

        details.classList.toggle("visible");

        if (details.classList.contains("visible")) {
            button.textContent = "Hide Details";
        } else {
            button.textContent = "Show Details";
        }
    });
});

function addSkill(type) {

    let input;
    let list;

    if (type === "technical") {
        input = document.getElementById("technical-input");
        list = document.getElementById("technical-skills");
    }

    if (type === "soft") {
        input = document.getElementById("soft-input");
        list = document.getElementById("soft-skills");
    }

    if (type === "language") {
        input = document.getElementById("language-input");
        list = document.getElementById("languages");
    }

    const value = input.value.trim();

    if (value === "") {
        return;
    }

    const newItem = document.createElement("li");
    newItem.textContent = value;

    list.appendChild(newItem);

    input.value = "";
}