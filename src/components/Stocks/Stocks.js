import React, { useState } from "react";
import loss from "./loss.svg";
import profit from "./profit.svg";
const Stocks = () => {
  const [buyPrice, setBuyPrice] = useState();
  const [currPrice, setCurrPrice] = useState();
  const [qty, setqty] = useState();
  const [isShow, setisShow] = useState(false);
  const submitFun = (e) => {
    e.preventDefault();
    setisShow(!isShow);
  };
  const img = () => {
    if ((currPrice - buyPrice) * qty >= 0) {
      return profit;
    } else {
      return loss;
    }
  };
  const color = () => {
    if ((currPrice - buyPrice) * qty >= 0) {
      return "green";
    } else {
      return "red";
    }
  };
  return (
    <div>
      <h1>Stock Profile &amp; Loss Calculator</h1>
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
          <h1 style={{ color: color() }}>
            The P/L is {(currPrice - buyPrice) * qty} and percentage is :{" "}
            {(((currPrice - buyPrice) * qty) / buyPrice) * 100}
          </h1>
          <img alt="img" height="200rem" src={img()}></img>
        </div>
      )}
    </div>
  );
};

export default Stocks;
