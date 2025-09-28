import React,{useContext,createContext,useState,useEffect} from "react";

const CartContext = createContext();

export function CartProvider({children}){
     // Step 1: Load from localStorage, or start with empty array
   const [itemsInCart, setItemsInCart] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
    // Step 2: Whenever itemsInCart changes, update localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
  }, [itemsInCart]);


    const addToCart =(book)=>{
     const foundBook = itemsInCart.find((item) => item.id === book.id);
     if(foundBook){
      setItemsInCart(prev => prev.map(item=>item.id === book.id?{...item,quantity: item.quantity + 1}:item))
     }else{
       setItemsInCart((prev)=>[...prev,book])
     }
    };
    return (
        <CartContext.Provider value={{itemsInCart,addToCart ,setItemsInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
