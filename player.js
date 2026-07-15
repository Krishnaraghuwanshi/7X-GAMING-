import { auth, db } from "./firebase.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import {
collection,
query,
where,
getDocs
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        alert("Please Login First");
        window.location.href = "login.html";
        return;
    }

    const q = query(
        collection(db, "players"),
        where("email", "==", user.email)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {

        const data = doc.data();

        document.getElementById("playerName").textContent = data.playerName;
        document.getElementById("playerEmail").textContent = data.email;
        document.getElementById("playerPhone").textContent = data.phone;

        document.getElementById("roomId").textContent =
            data.roomId || "Waiting for Admin";

        document.getElementById("roomPassword").textContent =
            data.roomPassword || "Waiting for Admin";

    });

});
