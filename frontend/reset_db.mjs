import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

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

async function resetCollection(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const count = querySnapshot.size;
  console.log(`Found ${count} documents in '${collectionName}'...`);
  
  let deletedCount = 0;
  for (const document of querySnapshot.docs) {
    await deleteDoc(doc(db, collectionName, document.id));
    deletedCount++;
  }
  
  console.log(`✅ Deleted ${deletedCount} documents from '${collectionName}'`);
}

async function resetDB() {
  console.log("Starting full Database Reset...");
  
  try {
    await resetCollection("dealers");
    await resetCollection("bookings");
    await resetCollection("custom_revenues");
    
    console.log("🔥 Database Reset Complete! Revenues are now 0.");
    process.exit(0);
  } catch (error) {
    console.error("❌ RESET FAILED:");
    console.error(error.message);
    process.exit(1);
  }
}

resetDB();
