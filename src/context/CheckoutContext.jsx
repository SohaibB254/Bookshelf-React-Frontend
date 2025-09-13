import React,{createContext,useContext,useState,useEffect} from "react";

const checkoutContext = createContext();

export const CheckoutProvider = ({children})=>{
    const [checkoutItem,setCheckoutItem] = useState(()=>{
        const savedItem = localStorage.getItem('itemToCheckout');
        return savedItem ? JSON.parse(savedItem):{};
    });

    useEffect(()=>{
        localStorage.setItem('itemToCheckout',JSON.stringify(checkoutItem));
    },[checkoutItem])

    const addToCheckout = (item)=>{
        setCheckoutItem(item)
    }
    return (
        <checkoutContext.Provider value={{checkoutItem,addToCheckout,setCheckoutItem}}>
            {children}
        </checkoutContext.Provider>
    )
};

export const useCheckout = ()=> useContext(checkoutContext);
