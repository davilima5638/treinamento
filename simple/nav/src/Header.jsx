import React, { useState } from "react";
import "./header.css";

  const header = () => {
    
  return (
    <>
      <header>
        <div className="navbar">S.Store</div>
        <div>
          <div>
            <ul className="menu">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Sobre nós</a>
              </li>
              <li>
                <a>Serviços</a>
              </li>
              <li>
                <a>Contatos</a>
              </li>
              <li>
                <a>Produtos no Carrinho: </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default header;
