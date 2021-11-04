import axios from "axios";

const apiAgricultor = axios.create({
  baseURL: "https://localhost:44362/api/pequenoAgricultor",
});

export default apiAgricultor;