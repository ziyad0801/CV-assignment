// =========================================================
// ASSIGNMENT 2 - JAVASCRIPT
// =========================================================
// Implemented options:
// 1. Contact Form Validation
// 2. Show/Hide Sections
// 3. Dark Mode
// 4. Dynamic Skills List
// 5. Welcome Message
// 6. Interactive Project Section
// =========================================================


document.addEventListener("DOMContentLoaded", function () {


    // =====================================================
    // OPTION 5 - WELCOME MESSAGE
    // =====================================================

    const welcome = document.getElementById("welcomeMessage");

    if (welcome) {
        welcome.textContent = "Welcome to my portfolio page!";
        welcome.style.display = "block";
    }


    // =====================================================
    // OPTION 2 - SHOW / HIDE SECTIONS
    // Skills, Projects and Certifications
    // =====================================================

    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const targetId = button.dataset.target;
            const target = document.getElementById(targetId);

            if (!target) {
                return;
            }

            if (target.style.display === "none") {

                target.style.display = "block";

            } else {

                target.style.display = "none";

            }

        });

    });


    // =====================================================
    // OPTION 4 - DYNAMIC SKILLS LIST
    // =====================================================

    function addSkill(type) {

        let input;
        let list;

        if (type === "technical") {

            input = document.getElementById("technical-input");
            list = document.getElementById("technical-skills");

        } else if (type === "soft") {

            input = document.getElementById("soft-input");
            list = document.getElementById("soft-skills");

        } else if (type === "language") {

            input = document.getElementById("language-input");
            list = document.getElementById("languages");

        }

        if (!input || !list) {
            return;
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


    // Make addSkill available to the HTML onclick attributes
    window.addSkill = addSkill;


    // =====================================================
    // OPTION 3 - DARK MODE
    // =====================================================

    const darkModeButton = document.getElementById("dark-mode-btn");

    if (darkModeButton) {

        darkModeButton.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                darkModeButton.textContent = "Light Mode";

            } else {

                darkModeButton.textContent = "Dark Mode";

            }

        });

    }


    // =====================================================
    // OPTION 6 - INTERACTIVE PROJECTS
    // =====================================================

    const projectButtons = document.querySelectorAll(".project-btn");

    projectButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const project = button.closest(".project-card");

            if (!project) {
                return;
            }

            const details = project.querySelector(".project-details");

            if (!details) {
                return;
            }

            details.classList.toggle("visible");

            if (details.classList.contains("visible")) {

                button.textContent = "Hide Details";

            } else {

                button.textContent = "Show Details";

            }

        });

    });


    // =====================================================
    // OPTION 1 - CONTACT FORM VALIDATION
    // =====================================================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const result = document.getElementById("formMessage");

            // Check that all required fields are filled
            if (name === "" || email === "" || message === "") {

                result.textContent = "Please fill in all required fields.";
                result.className = "error";

                return;
            }


            // Check email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                result.textContent = "Please enter a valid email address.";
                result.className = "error";

                return;
            }


            // Successful validation
            result.textContent = "Message sent successfully!";
            result.className = "success";

            // Clear form
            contactForm.reset();

        });

    }

});