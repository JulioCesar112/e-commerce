import axios from "axios";
import React from "react";
import getConfig from "../../utils/getConfig";

const ProductCartInfo = ({product,getAllProductsCart}) => {
  
  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL,getConfig)
    .then(res => getAllProductsCart())
    .catch(err => console.log(err))
  }
  return (
    <article className="cart__item">
      <header className="cart__item-header">
        <h3 className="cart__category">{product.brand}</h3>
        <h3 className="cart__name">{product.title}</h3>
      </header>
      <i onClick={handleDeleteProduct} className='bx bxs-trash-alt' ></i>
      <span className="cart__quentity">{product.productsInCart.quantity}</span>
      <footer className="cart_item-footer">
        <span className="cart__total-label">total</span>
        <p className="cart__total-number">{product.price}</p>
      </footer>
    </article>
  );
};

export default ProductCartInfo;
