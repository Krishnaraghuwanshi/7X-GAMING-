import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const table = document.getElementById("leaderboard");

async function loadLeaderboard() {

    table.innerHTML = "";

    const snapshot = await getDocs(collection(db, "players"));

    let rank = 1;

    snapshot.forEach((doc) => {

        const data = doc.data();

        const kills = Number(data.kills || 0);
        const chicken = data.chickenDinner ? 1 : 0;

        const prize = (kills * 5) + (chicken * 500);

        table.innerHTML += `
        <tr>
            <td>${rank++}</td>
            <td>${data.playerName}</td>
            <td>${kills}</td>
            <td>${chicken ? "🏆" : "-"}</td>
            <td>₹${prize}</td>
        </tr>`;
    });

}

loadLeaderboard();
