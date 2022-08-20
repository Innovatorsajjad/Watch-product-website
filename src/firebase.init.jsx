import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzQMipf1qMNcGn-YSnd1GpsckxmxFmoe0",
  authDomain: "watch-product-website-99a50.firebaseapp.com",
  projectId: "watch-product-website-99a50",
  storageBucket: "watch-product-website-99a50.appspot.com",
  messagingSenderId: "676009770969",
  appId: "1:676009770969:web:263139ec14508862b963c8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
