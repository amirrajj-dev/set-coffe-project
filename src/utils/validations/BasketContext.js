"use client";
import React, { createContext, useContext, useState } from "react";
const basketContext = createContext();
export default function BasketProvider({ children }) {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const closeBasket = () => {
    setIsBasketOpen(false);
  };
  const openBasket = ()=>{
    
    setIsBasketOpen(true);
  }
  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  return (
    <basketContext.Provider
      value={{
        isBasketOpen,
        closeBasket,
        openBasket,
        toggleBasket
      }}
    >
      {children}
    </basketContext.Provider>
  );
}

export const useBaket = () => {
  const basket = useContext(basketContext)
  if (basket){
    return basket;
  }else{
    throw new Error('Basket provider is not available for use with this')
  }
}