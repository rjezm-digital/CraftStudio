import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "craftstudio-75508.firebaseapp.com",
  projectId: "craftstudio-75508",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadProducts(){
  const digital = document.getElementById("digital");
  const physical = document.getElementById("physical");

  const data = await getDocs(collection(db,"products"));

  data.forEach(doc=>{
    const p = doc.data();

    const html = `
      <div>
        <img src="${p.image}" width="150">
        <h3>${p.name}</h3>
        <p>₱${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
      </div>
    `;

    if(p.type==="digital") digital.innerHTML+=html;
    else physical.innerHTML+=html;
  });
}

loadProducts();