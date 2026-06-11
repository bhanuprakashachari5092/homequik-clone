import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8yfL_9YR9ZvfO9ID6MKfn3eqCpZdhy-8",
  authDomain: "homequik-clone.firebaseapp.com",
  projectId: "homequik-clone",
  storageBucket: "homequik-clone.firebasestorage.app",
  messagingSenderId: "956042980288",
  appId: "1:956042980288:web:df5c2ef1a53848b3f03625",
  measurementId: "G-534LQS00XG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testFirebase() {
  console.log("Starting Firebase test...");
  
  try {
    const newDealerId = `DLR-${Math.floor(Math.random() * 1000000)}`;
    const testDocRef = doc(db, "dealers", newDealerId);
    
    console.log("1. Testing WRITE access...");
    await setDoc(testDocRef, {
      businessName: "Automated Test Security",
      ownerName: "Test Dealer",
      email: "test.dealer@example.com",
      phone: "+91 9999988888",
      city: "Hyderabad",
      category: "CCTV & Security Solutions",
      experience: "5+ Years",
      plan: "Premium Dealer",
      amount: 4999,
      orderId: "ORDER_TEST123",
      transactionId: "TXN_TEST123",
      paymentId: "PAY_TEST123",
      paymentDate: new Date().toISOString(),
      status: "Active"
    });
    console.log("✅ WRITE successful! Document created.");
    
    console.log("2. Testing READ access...");
    const snap = await getDoc(testDocRef);
    if (snap.exists()) {
      console.log("✅ READ successful! Document data:", snap.data());
    } else {
      console.log("❌ READ failed! Document not found after writing.");
    }
    
    console.log("Firebase is working perfectly!");
    process.exit(0);
  } catch (error) {
    console.error("❌ FIREBASE TEST FAILED:");
    console.error(error.message);
    process.exit(1);
  }
}

testFirebase();
