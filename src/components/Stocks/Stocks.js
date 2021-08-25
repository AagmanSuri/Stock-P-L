import React, { useState } from "react";

const Stocks = () => {
  const [buyPrice, setBuyPrice] = useState(0);
  const [currPrice, setCurrPrice] = useState(0);
  const [qty, setqty] = useState(0);
  const submitFun = (e) => {
    e.preventDefault();
    alert(`buy price ${buyPrice}, ${currPrice},${qty}`);
  };

  return (
    <div>
      <h1>Stocks Profit/Loss</h1>
      <form onSubmit={submitFun}>
        <label htmlFor="buy">Stock Buy Price : </label>
        <input
          id="buy"
          name="buy"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="currentPrice">Stock Current Price : </label>
        <input
          id="currentPrice"
          name="currentPrice"
          value={currPrice}
          onChange={(e) => setCurrPrice(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="qty">Qty baught : </label>
        <input
          id="qty"
          name="qty"
          value={qty}
          onChange={(e) => setqty(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <button type="submit">Calculate P/L</button>
      </form>
      <div>
        <h1> the net is {(currPrice - buyPrice) * qty}</h1>
      </div>
    </div>
  );
};

export default Stocks;
