import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
  name:'procucts',
  initialState: null,
  reducers:{
    setProducts:(state, action)=> action.payload
  }
})

export const {setProducts} = productsSlice.actions

export default productsSlice.reducer

export const getAllProducts =() => (dispatch) => {
  return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
    .then(res => dispatch(setProducts(res.data.data.products)))
    .catch(err => console.log(err))
}