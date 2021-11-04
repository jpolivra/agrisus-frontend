import axios from "axios";

const apiUserFisico = axios.create({
  baseURL: "https://localhost:44362/api/usuarioFisico",
});

export default apiUserFisico;