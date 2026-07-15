import { auth } from "./firebase.js";

import { signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    try {

        await signInWithEmailAndPassword(auth, email, password);

        alert("Login Successful");

        window.location.href = "player.html";

    } catch (error) {

        alert(error.message);

    }

});
