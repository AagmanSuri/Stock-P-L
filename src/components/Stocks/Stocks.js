import React, { useState } from "react";

const Stocks = () => {
  const [buyPrice, setBuyPrice] = useState();
  const [currPrice, setCurrPrice] = useState();
  const [qty, setqty] = useState();
  const [isShow, setisShow] = useState(false);
  const submitFun = (e) => {
    e.preventDefault();
    setisShow(!isShow);
  };

  return (
    <div>
      <h1>Stocks Profit/Loss</h1>
      <form onSubmit={submitFun}>
        <label htmlFor="buy">Stock initial Price : </label>
        <input
          id="buy"
          name="buy"
          value={buyPrice}
          type="Number"
          onChange={(e) => setBuyPrice(e.target.value)}
          placeholder="Enter the initial price"
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="currentPrice">Stock Current Price : </label>
        <input
          id="currentPrice"
          name="currentPrice"
          value={currPrice}
          type="Number"
          onChange={(e) => setCurrPrice(e.target.value)}
          placeholder="Enter the current price"
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="qty">Qty baught : </label>
        <input
          id="qty"
          name="qty"
          value={qty}
          type="Number"
          placeholder="Enter the qty baught"
          onChange={(e) => setqty(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <button type="submit">Calculate P/L</button>
      </form>
      {isShow && (
        <div>
          <h1> the net is {(currPrice - buyPrice) * qty}</h1>
        </div>
      )}
    </div>
  );
};

export default Stocks;
