import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgyxk97l7CTsmgGADDvJ8jhiN6Df7WRwQ",
  authDomain: "vocalvista-fb898.firebaseapp.com",
  projectId: "vocalvista-fb898",
  storageBucket: "vocalvista-fb898.firebasestorage.app",
  messagingSenderId: "89615036410",
  appId: "1:89615036410:web:e50666f37f7416cbc8be43"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if the user is logged in
onAuthStateChanged(auth, (user) => {

    if (user) {
        document.getElementById("userEmail").textContent =
            "Logged in as: " + user.email;
    } else {
        // Not logged in
        window.location.href = "login.html";
    }

});

// Logout button
document.getElementById("logoutBtn").addEventListener("click", () => {

    signOut(auth)
    .then(() => {
        alert("Logged out successfully!");
        window.location.href = "login.html";
    })
    .catch((error) => {
        alert(error.message);
    });

});
import { collection, query, where, getDocs }
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const user = auth.currentUser;

if(user){

const q = query(
  collection(db,"orders"),
  where("userId","==",user.uid)
);

const snapshot = await getDocs(q);
let totalOrders = snapshot.size;
let completedOrders = 0;
let pendingOrders = 0;

snapshot.forEach((doc) => {
    const order = doc.data();

    const status = (order.status || "").toLowerCase();

    if (status === "completed" || status === "complete") {
        completedOrders++;
    } else {
        pendingOrders++;
    }
});

document.getElementById("totalOrders").textContent = totalOrders;
document.getElementById("completedOrders").textContent = completedOrders;
document.getElementById("pendingOrders").textContent = pendingOrders;
ordersBox.innerHTML="";

snapshot.forEach((doc)=>{

let order = doc.data();

ordersBox.innerHTML += `
<div class="order-card">
<h2>${order.service}</h2>

<p>Status:
<span>${order.status}</span>
</p>

<p>Order ID: ${doc.id}</p>

<button>Leave Review</button>

</div>
`;

});

}
