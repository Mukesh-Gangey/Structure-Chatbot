document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.querySelector(
            'input[type="email"]'
        ).value;

        const password = document.querySelector(
            'input[type="password"]'
        ).value;

        if(email === "" || password === ""){
            alert("Please fill all fields");
            return;
        }

        alert("Login Successful!");

        window.location.href = "pages/dashboard.html";
    });

});
