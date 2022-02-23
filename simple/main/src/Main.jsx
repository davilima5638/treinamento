import React, { useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="carrinho">
        {" "}
        <span>Frete grátis acima de R$ 200,00 </span>
        <span>Carrinho - {count}</span>
      </div>
      <div className="cards">
        <div className="card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sem
          elit. Vestibulum malesuada arcu ac vehicula fringilla.{" "}
          <div className="buttons">
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Adicionar Produto Ao Carrinho
            </button>
          </div>
        </div>
        <div className="card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sem
          elit. Vestibulum malesuada arcu ac vehicula fringilla.
          <div className="buttons">
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Adicionar Produto Ao Carrinho
            </button>
          </div>
        </div>
        <div className="card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sem
          elit. Vestibulum malesuada arcu ac vehicula fringilla.
          <div className="buttons">
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Adicionar Produto Ao Carrinho
            </button>
          </div>
        </div>
        <div className="card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sem
          elit. Vestibulum malesuada arcu ac vehicula fringilla.
          <div className="buttons">
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Adicionar Produto Ao Carrinho
            </button>
          </div>
        </div>
      </div>
      <div className="buttons"></div>
    </>
  );
};
export default Main;
