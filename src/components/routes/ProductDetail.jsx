import axios from 'axios'
import './productDetail.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/ProductDescription'

const ProductDetail = ({blackMode}) => {

  const [productInfo, setProductInfo] = useState()
  const [productCategory, setProductCategory] = useState()

  const { id } = useParams()

  useEffect(() => {
    const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
    .then(res => setProductInfo(res.data.data.product))
    .catch(err => console.log(err))
  }, [])

  
  

  
  return (
    <div className={`product-container ${blackMode==='off'? 'ligthMode':'blackMode'}`}>
      <ProductDescription blackMode={blackMode} productInfo={productInfo}/>
    </div>
  )
}

export default ProductDetail