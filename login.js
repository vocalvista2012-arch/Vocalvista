import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

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

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

const email = document.getElementById("email").value.trim();

const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)

.then((userCredential)=>{

document.getElementById("message").innerHTML="✅ Login Successful!";

setTimeout(()=>{

window.location.href="dashboard.html";

},1000);

})

.catch((error)=>{
    console.log(error.code);
    console.log(error.message);
    document.getElementById("message").innerHTML =
        error.code + "<br>" + error.message;
});
