import { db } from "./firebase.js";

import {
collection,
getDocs,
doc,
updateDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const playersList = document.getElementById("playersList");

async function loadPlayers(){

playersList.innerHTML="";

const querySnapshot=await getDocs(collection(db,"players"));

querySnapshot.forEach((player)=>{

const data=player.data();

playersList.innerHTML += `

<div class="player-card">

<h2>${data.playerName}</h2>

<p><b>Email:</b> ${data.email}</p>

<p><b>Phone:</b> ${data.phone}</p>

<p><b>BGMI ID:</b> ${data.bgmiId}</p>

<input
type="text"
placeholder="Room ID"
id="roomid-${player.id}">

<input
type="text"
placeholder="Room Password"
id="password-${player.id}">

<button onclick="savePlayer('${player.id}')">

Save

</button>

</div>

`;

});

}

window.savePlayer=async(id)=>{

const roomId=document.getElementById("roomid-"+id).value;

const roomPassword=document.getElementById("password-"+id).value;

await updateDoc(doc(db,"players",id),{

roomId:roomId,

roomPassword:roomPassword,

status:"Approved"

});

alert("Room Details Saved");

};

loadPlayers();
