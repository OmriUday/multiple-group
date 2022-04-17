import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD1BhH08e8muvgxBqk9o7ukTjr0HcZ1G3g",
  authDomain: "wrdding-app-react.firebaseapp.com",
  projectId: "wrdding-app-react",
  storageBucket: "wrdding-app-react.appspot.com",
  messagingSenderId: "4209123348",
  appId: "1:4209123348:web:27f224dfdd86b40219c701"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;