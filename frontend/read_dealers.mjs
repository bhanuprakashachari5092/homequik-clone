import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, limit } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8yfL_9YR9ZvfO9ID6MKfn3eqCpZdhy-8",
  authDomain: "homequik-clone.firebaseapp.com",
  projectId: "homequik-clone",
  storageBucket: "homequik-clone.firebasestorage.app",
  messagingSenderId: "956042980288",
  appId: "1:956042980288:web:df5c2ef1a53848b3f03625"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkDealersDB() {
  console.log("Fetching dealers from Firebase database...");
  try {
    const q = query(collection(db, "dealers"), limit(5));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log("⚠️ No dealers found in the database yet.");
      process.exit(0);
    }

    console.log(`\n✅ Found ${querySnapshot.size} recent dealers. Here is the raw data:\n`);
    
    querySnapshot.forEach((doc) => {
      console.log(`Document ID: ${doc.id}`);
      console.log(JSON.stringify(doc.data(), null, 2));
      console.log("-".repeat(40));
    });

    process.exit(0);
  } catch (error) {
    console.error("❌ FAILED to read from dealers database:");
    console.error(error.message);
    process.exit(1);
  }
}

checkDealersDB();
