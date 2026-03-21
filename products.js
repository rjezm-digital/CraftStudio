import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// SAME CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyC4WQfNT3x6MFRftIlKPlfLcYMoY4juIhM",
  authDomain: "craftstudio-75508.firebaseapp.com",
  projectId: "craftstudio-75508",
  storageBucket: "craftstudio-75508.firebasestorage.app",
  messagingSenderId: "989141876605",
  appId: "1:989141876605:web:f36254dd915f2c84219614"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadProducts(){
  const digital = document.getElementById("digital");
  const physical = document.getElementById("physical");

  digital.innerHTML = "";
  physical.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    const p = doc.data();

    const html = `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p class="price">₱${p.price}</p>
      </div>
    `;

    if(p.type === "digital"){
      digital.innerHTML += html;
    } else {
      physical.innerHTML += html;
    }
  });
}

loadProducts();