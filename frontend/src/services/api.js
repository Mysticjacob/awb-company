import axios from "axios";

const api = axios.create({
  baseURL: "https://cloud-computing-ecru.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
