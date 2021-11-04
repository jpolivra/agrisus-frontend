import axios from "axios";

const apiLogin = axios.create({
  baseURL: "https://localhost:44362/api/login",
});

export default apiLogin;