import axios from "axios";

const apiUserJuridico = axios.create({
  baseURL: "https://localhost:44362/api/usuarioJuridico",
});

export default apiUserJuridico;