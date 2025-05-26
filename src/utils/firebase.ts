import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCtTWbYm3yCc_5nZWAguLQsN0sfjKXUvBA",
  authDomain: "portcontact-95172.firebaseapp.com",
  projectId: "portcontact-95172",
  storageBucket: "portcontact-95172.firebasestorage.app",
  messagingSenderId: "469999918547",
  appId: "1:469999918547:web:8f40bb810fdb11e23ba326",
  measurementId: "G-YNR6TT6YFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const submitContactForm = async (name: string, email: string, message: string) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      name,
      email,
      message,
      createdAt: new Date()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};

export default app;