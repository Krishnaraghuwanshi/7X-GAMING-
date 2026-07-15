import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const form = document.getElementById("registerForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");

    const data = {
      playerName: inputs[0].value,
      email: inputs[1].value,
      phone: inputs[2].value,
      bgmiId: inputs[3].value,
      createdAt: serverTimestamp(),
      status: "Pending",
      roomId: "",
      roomPassword: ""
    };

    try {
      await addDoc(collection(db, "players"), data);

      alert("Registration Successful! Payment verify hone ke baad Room ID & Password diya jayega.");

      form.reset();
    } catch (err) {
      alert("Error: " + err.message);
    }
  });
}
