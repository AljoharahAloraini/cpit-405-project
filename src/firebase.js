import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtVnZW1tXHadt06JwTfmZibtM9fSttKn4",
  authDomain: "muqaddim-project.firebaseapp.com",
  projectId: "muqaddim-project",
  storageBucket: "muqaddim-project.firebasestorage.app",
  messagingSenderId: "610094909222",
  appId: "1:610094909222:web:80595a4e89add547b263e7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);   