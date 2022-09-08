import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import ProductCard from '../home/ProductCard'

const Home = ({blackMode}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  
  const products = useSelector(state => state.products)
  

  return (
    <div className={`card-container ${blackMode==='off'?'ligthMode':'blackMode'}`}>
      {
        products?.map(product =>(
          <ProductCard blackMode={blackMode} key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default Home