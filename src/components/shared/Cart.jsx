import axios from "axios";
import React, { useEffect, useState } from "react";
import getConfig from "../../utils/getConfig";
import ProductCartInfo from "../cart/ProductCartInfo";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState();
  const [totalPrice, setTotalPrice] = useState()

  const getAllProductCart = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`;
    axios
      .get(URL, getConfig())
      .then(res => {
        const products = res.data.data.cart.products
        setCartProducts(products)
        const total = products.reduce(() =>{
          return Number(cv.price) * cv.productsInCart.quiantity + acc
        },0)
        setTotalPrice(total)
      })
      .catch((err) => setCartProducts())

  }

  useEffect(() => {
    getAllProductCart()
  }, []);

  const handleCheckout = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };
    axios
      .post(URL,obj,getConfig())
      .then((res) => {
        console.log(res.data)
        getAllProductCart()
      })
      .catch((err) => console.log(err));
  };
  return (
    <article className="cart">
      <h2 className="cart__title">Cart</h2>
      <div className="cart__container-item">
        {
        cartProducts?.map(product => (
          <ProductCartInfo getAllProductsCart={getAllProductsCart} key={product.id} product={product} />
        ))
        }
      </div>
      <hr className="cart__hr" />
      <footer className="cart__footer">
        <span className="cart__total-global-label">Total: </span>
        <p className="cart__total-global-value"></p>
        <button onClick={handleCheckout} className="car__btn">
          Checkout
        </button>
      </footer>
    </article>
  );
};

export default Cart;
