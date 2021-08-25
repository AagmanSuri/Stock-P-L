import React from "react";

const Stocks = () => {
  const submitFun = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Stocks</h1>
      <form onSubmit={submitFun}>
        <label htmlFor="buy">Stock Buy Price : </label>
        <input id="buy"></input>
        <br></br>
        <br></br>
        <label htmlFor="currentPrice">Stock Current Price : </label>
        <input id="currentPrice"></input>
        <br></br>
        <br></br>
        <label htmlFor="qty">Qty baught : </label>
        <input id="qty"></input>
        <br></br>
        <br></br>
        <button type="submit">Calculate P/L</button>
      </form>
    </div>
  );
};

export default Stocks;
