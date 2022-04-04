import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { writable } from "svelte/store";

const config = {
  apiKey: "AIzaSyAgcnqNze85kqJV47x_p_ESXZi6NoR4UiY",
  authDomain: "ecolibrishop-54839.firebaseapp.com",
  databaseURL: "https://ecolibrishop-default-rtdb.firebaseio.com",
  projectId: "ecolibrishop",
  storageBucket: "ecolibrishop.appspot.com",
  messagingSenderId: "1009380579533",
  appId: "1:1009380579533:web:87dbdbefb039f5a78d7184",
};

export const app = initializeApp(config);
export const auth = getAuth(app);
export const user = writable(null);
