import React, { useState, useEffect } from "react";
import "./style.css";
import Produto from "../../Components/Produto";
import searchIcon from "../../assets/search-solid.svg";

import Header from "../../Components/Header";

function Home() {
  //debug

  const [identificador, setIdentificador] = useState(0);

  function openModal(event) {
    let productBg = document.querySelector(".modal-produto-info-bg");
    setIdentificador(
      identificador - identificador + event.target.getAttribute("id")
    );
    console.log(identificador);
    productBg.style.display = "flex";
    console.log(identificador);
  }

  function closeModal() {
    let productBg = document.querySelector(".modal-produto-info-bg");
    productBg.style.display = "none";
  }

  return (
    <div className="home-background">
      <div className="modal-produto-info-bg">
        <div className="modal-produto-info">
          <div onClick={closeModal} className="close-product-info">
            <p onClick={closeModal}>X</p>
          </div>
          <h1>Produto de id {identificador * 1}</h1>
        </div>
      </div>
      <Header />
      <div className="home-header">
        <h1>Mercado</h1>
        <div className="search-bar">
          <div className="search-bg">
            <img className="search-icon" src={searchIcon} />
            <input
              type="text"
              class="searchBar"
              id="searchBar"
              placeholder="Procurar produtos"
            />
          </div>

          <select name="state" id="state" class="select">
            <option value="todos">Categoria</option>
            <option value="true">Verduras</option>
            <option value="false">Frutas </option>
          </select>
        </div>
      </div>
      <div onClick={openModal}>
        <Produto />
      </div>
    </div>
  );
}

export default Home;
