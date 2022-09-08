import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ProductDescription = ({ productInfo, blackMode }) => {

  const [counter, setCounter] = useState(1);

  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handlePlus = () => setCounter(counter + 1);

  return (

    <div className="product">
      <section className="product-info">
        <div className="product-title">
          <NavLink to="/">
            <h2 className="product-home">Home</h2>
          </NavLink>
          <i className="bx bxs-circle"></i>
          <h2>{productInfo?.title}</h2>
        </div>
        <div className="product-select">
          <div className="product-img">
            <i className="bx bxs-left-arrow"></i>
            <img src={productInfo?.productImgs[0]} alt="" />
            <i className="bx bxs-right-arrow"></i>
          </div>
          <div>
            <h2 className="product-info__name">{productInfo?.title}</h2>
          </div>
          <div
            className={`product-price ${
              blackMode == "off" ? "ligthModeS" : "blackModeS"
            }`}
          >
            <div className="product-price1">
              <span>Price</span>
              <h2>$ {productInfo?.price}</h2>
            </div>
            <div className="product-price2">
              <span className="quantily">Quantily</span>
              <div className="product-contador">
                <i onClick={handleMinus} className="bx bxs-minus-square"></i>
                <h2>{counter}</h2>
                <i onClick={handlePlus} className="bx bxs-plus-square"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default ProductDescription;
