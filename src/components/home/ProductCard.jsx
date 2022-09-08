import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import getConfig from "../../utils/getConfig";
import './css/productCard.css'

const ProductCard = ({ product, blackMode}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }
  const handleAddCart = (e) => {
    e.stopPropagation()
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: product.id,
      quantity: 1
    }
    axios.post(URL,obj,getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  return (
    <article onClick={handleClick} className="card">
      <header className='card-header'>
        <img
          className="card-products_img"
          src={product.productImgs[0]}
          alt={product.title}
        />
      </header>
      <section className={`card-section ${blackMode=='off'? 'ligthModeS':'blackModeS'}`}>
        <h1 className="card-section-name">{product.title}</h1>
        <span className="card-section-span">Price</span>
        <h2 className="card-section-price">$ {product.price}</h2>
        <i onClick={handleAddCart} className="card-btn-buy bx bxs-cart-add"></i>
      </section>
    </article>
  );
};

export default ProductCard;
