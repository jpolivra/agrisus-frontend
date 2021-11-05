import axios from "axios";

const apiProdutos = axios.create({
  baseURL: "https://localhost:44362/api/produto/produto",
});

export default apiProdutos;