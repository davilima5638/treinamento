import React, {useState} from "react";

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="cards">
        <div className="card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sem
          elit. Vestibulum malesuada arcu ac vehicula fringilla.{" "}
        </div>
        <div className="card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sem
          elit. Vestibulum malesuada arcu ac vehicula fringilla.
        </div>
        <div className="card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sem
          elit. Vestibulum malesuada arcu ac vehicula fringilla.
        </div>
      </div>
      <div className="buttons">
        <button onClick={() =>{ setCount(count + 1)}}>
          Adicionar Produto Ao Carrinho
        </button>
        <button onClick={() => setCount(count + 1)}>
          Adicionar Produto Ao Carrinho
        </button>
        <button onClick={() => setCount(count + 1)}>
          Adicionar Produto Ao Carrinho
        </button>
      </div>
    </>
  );
};
export default Main;
