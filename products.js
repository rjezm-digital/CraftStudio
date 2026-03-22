// FIREBASE IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// FIREBASE CONFIG
const app = initializeApp({
  apiKey: "AIzaSyC4WQfNT3x6MFRftIlKPlfLcYMoY4juIhM",
  authDomain: "craftstudio-75508.firebaseapp.com",
  projectId: "craftstudio-75508",
  storageBucket: "craftstudio-75508.appspot.com",
  messagingSenderId: "989141876605",
  appId: "1:989141876605:web:f36254dd915f2c84219614"
});

const db = getFirestore(app);

// LOAD PRODUCTS
async function loadProducts() {
  const digitalDiv = document.getElementById("digital");
  const physicalDiv = document.getElementById("physical");

  digitalDiv.innerHTML = "";
  physicalDiv.innerHTML = "";

  const snapshot = await getDocs(collection(db, "products"));

  snapshot.forEach(doc => {
    const p = doc.data();

    // 🔥 FIX IMAGE (IMPORTANT)
    const image = p.image && p.image !== ""
      ? p.image
      : "https://via.placeholder.com/300x200?text=No+Image";

    const card = `
      <div class="product">
        <img src="${image}" 
             onerror="this.src='https://via.placeholder.com/300x200?text=Error'">
        <h3>${p.name || "No Name"}</h3>
        <p>${p.desc || ""}</p>
        <div class="price">₱${p.price || 0}</div>
        <button onclick="addToCart('${doc.id}')">Add to Cart</button>
      </div>
    `;

    // 🔥 FIX TYPE CHECK
    if (p.type === "digital") {
      digitalDiv.innerHTML += card;
    } else {
      physicalDiv.innerHTML += card;
    }
  });
}

// RUN
loadProducts();