import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { writable } from "svelte/store";
import axios from "axios";

const config = {
  apiKey: "AIzaSyAgcnqNze85kqJV47x_p_ESXZi6NoR4UiY",
  authDomain: "ecolibrishop-54839.firebaseapp.com",
  databaseURL: "https://ecolibrishop-default-rtdb.firebaseio.com",
  projectId: "ecolibrishop",
  storageBucket: "ecolibrishop.appspot.com",
  messagingSenderId: "1009380579533",
  appId: "1:1009380579533:web:87dbdbefb039f5a78d7184",
};

export const api = "http://localhost:8000/api/"
export const app = initializeApp(config);
export const auth = getAuth(app);
export const user = writable(null);

export const client = axios.create({
  baseURL: api,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const crud = writable({
  getAll: async (table) => {
    const response = await client.get(`${table}/`)
    return response.data.json();
  },
  get: async (table, id) => {
    const response = await client.get(`${table}/${id}`)
    return response.data.json();
  },
  post: async (table, data) => {
    const response = await client.post(`${table}/`, data)
    return response.data.json();
  },
  put: async (table, id, data) => {
    const response = await client.put(`${table}/${id}`, data)
    return response.data.json();
  },
  delete: async (table, id) => {
    const response = await client.delete(`${table}/${id}`)
    return response.data.json();
  }
});