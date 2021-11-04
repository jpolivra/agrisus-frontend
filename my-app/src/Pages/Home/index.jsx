import React, { useState, useEffect } from "react";
import "./style.css";
import Produto from "../../Components/Produto";
import searchIcon from "../../assets/search-solid.svg";
import Footer from "../../Components/Footer";

function Home() {
  //debug

  return (
    <div className="home-background">
      <div className="nav-placeholder">
        <h1>Nav</h1>
      </div>
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
      <Produto />
      <Footer />
    </div>
  );
}

export default Home;
