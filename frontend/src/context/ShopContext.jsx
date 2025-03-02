import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([])
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {

      let cartData = structuredClone(cartItems);

      if(!size){
        toast.error("Select Product Size");
        return;
      }

      if(cartData[itemId]){
        if(cartData[itemId][size]){
          cartData[itemId][size] += 1;
        }
        else{
          cartData[itemId][size] = 1;
        }
      }else{
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
      }

      setCartItems(cartData);

      if(token){
        try {
          const response = await axios.post(backendUrl + "/api/cart/add", {itemId,size} ,{headers: {token}})
          if(response.data.success){
            toast.success(response.data.message)
          }else{
            toast.error(response.data.message)
          }
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    }


    const getCartCount = () => {
      let totalCount = 0;
      for(const items in cartItems){
        for(const item in cartItems[items]){
          try{
            if(cartItems[items][item] > 0){
              totalCount += cartItems[items][item];
            }
          }catch (error){

          }
        }
      }
      return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {

      let carData = structuredClone(cartItems);
      carData[itemId][size] = quantity;
      setCartItems(carData);

      if(token){
        try {
          await axios.post(backendUrl + "/api/cart/update", {itemId, size, quantity}, {headers: {token}})
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    }

    const getCartAmount =  () => {
      let totalAmount = 0;
      for(const items in cartItems){
        let itemInfo = products.find((product) => product._id === items);
        for(const item in cartItems[items]){
          try{
            if(cartItems[items][item] > 0){
              totalAmount += itemInfo.price * cartItems[items][item];
            }
          }catch (error){

          }
        }
      }
      return totalAmount;
    }

const getProductData = async () => {
  try {
    const respose = await axios.get(backendUrl + "/api/product/list")
    if(respose.data.success){
      setProducts(respose.data.product)
    }else{
      toast.error(respose.data.message)
    }
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
}

const getUserCart = async ( token ) => {
  try {
    const response = await axios.post(backendUrl + "/api/cart/get",{}, {headers: {token}})
    if(response.data.success){
      setCartItems(response.data.cartData)
    }
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
}

useEffect(() => {
  getProductData()
},[])


useEffect(() => {
  if(!token && localStorage.getItem("token")){
    setToken(localStorage.getItem("token"))
    getUserCart(localStorage.getItem("token"))
  }
},[])
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        setCartItems,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        token,
        setToken
    }
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider