import React from "react";

import { FiLogIn } from "react-icons/fi";
import "./styles.css";
import logo from "../../assets/logo.svg";
const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Logo Ecoleta" />
        </header>
        <main>
          <h1>Seu marketpalce de coleta de resíduos</h1>
          <p>
            Ajudando pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>

          <a href="/cadastro">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Home;
