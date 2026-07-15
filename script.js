// ===============================
// 7X GAMING
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Welcome Message
    console.log("7X GAMING Loaded Successfully");

    // Registration Form
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", function(e){

            e.preventDefault();

            alert(
`✅ Registration Successful!

Tournament : BGMI Solo
Time : 9:00 PM - 11:00 PM

Entry Fee : ₹20

Your registration request has been submitted.

After payment verification, Room ID & Password will be shared by the Admin.`
            );

            registerForm.reset();

        });

    }

    // Login Form
    const loginForm = document.getElementById("loginForm");

    if(loginForm){

        loginForm.addEventListener("submit",function(e){

            e.preventDefault();

            alert("✅ Login Successful");

            window.location.href="leaderboard.html";

        });

    }

});
