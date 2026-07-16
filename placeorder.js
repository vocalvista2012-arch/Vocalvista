import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// 🔥 COPY THE SAME firebaseConfig FROM YOUR login.js
const firebaseConfig = {
  apiKey: "AIzaSyDgyxk97l7CTsmgGADDvJ8jhiN6Df7WRwQ",
  authDomain: "vocalvista-fb898.firebaseapp.com",
  projectId: "vocalvista-fb898",
  storageBucket: "vocalvista-fb898.firebasestorage.app",
  messagingSenderId: "89615036410",
  appId: "1:89615036410:web:e50666f37f7416cbc8be43"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

document.getElementById("submitBtn").addEventListener("click", async () => {

  const user = auth.currentUser;

  if (!user) {
    alert("Please login first.");
    return;
  }

  const service = document.getElementById("service").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const description = document.getElementById("description").value;

  if (name === "" || phone === "" || description === "") {
    alert("Please fill all fields.");
    return;
  }

  try {

    await addDoc(collection(db, "orders"), {
      userEmail: user.email,
      name: name,
      phone: phone,
      service: service,
      description: description,
      status: "Pending",
      price: "",
      deliveryLink: "",
      reviewGiven: false,
      createdAt: serverTimestamp()
    });

    alert("Order submitted successfully!");

    window.location.href = "myorders.html";

  } catch (error) {

    console.log(error);
    alert("Failed to submit order.");

  }

});
