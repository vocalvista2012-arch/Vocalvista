import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword
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

const signupBtn = document.getElementById("signupBtn");
const message = document.getElementById("message");

signupBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    message.innerHTML = "Please fill in all fields.";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      message.innerHTML = "✅ Account created successfully!";
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    })
    .catch((error) => {
      message.innerHTML = "❌ " + error.message;
    });
});
