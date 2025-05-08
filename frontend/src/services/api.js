import axios from "axios";

const api = axios.create({
  baseURL: "https://cloud-computing-2p5i.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
