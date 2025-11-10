import React, { createContext, useContext, useState, useEffect } from "react";

const checkoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [checkoutItem, setCheckoutItem] = useState(() => {
    const savedItem = localStorage.getItem("itemToCheckout");
    return savedItem ? JSON.parse(savedItem) : {};
  });

  const [totals, setTotals] = useState(() => {
    const savedTotal = localStorage.getItem("totals");
    return savedTotal
      ? JSON.parse(savedTotal)
      : {
          totalItems: 0,
          totalPrice: 0,
          totalDelivery: 0,
          subTotal: 0,
        };
  });
//Update checkout item from localStorage
  useEffect(() => {
    localStorage.setItem("itemToCheckout", JSON.stringify(checkoutItem));
  }, [checkoutItem]);
  //Update totals from localStorage
  useEffect(() => {
    localStorage.setItem("totals", JSON.stringify(totals));
  }, [totals]);

  const handleTotalCheckout = (
    totalItems,
    totalPrice,
    totalDelivery,
    subTotal
  ) => {
    setTotals({ totalItems, totalPrice, totalDelivery, subTotal });
  };

  const addToCheckout = (item) => {
    setCheckoutItem(item);
  };
  return (
    <checkoutContext.Provider
      value={{
        checkoutItem,
        addToCheckout,
        setCheckoutItem,
        handleTotalCheckout,
        totals,
      }}
    >
      {children}
    </checkoutContext.Provider>
  );
};

export const useCheckout = () => useContext(checkoutContext);
