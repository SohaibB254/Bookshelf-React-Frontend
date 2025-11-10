import React,{useContext,createContext,useState,useEffect} from "react";

const WishContext = createContext();

export function WishProvider({children}){
     // Step 1: Load from localStorage, or start with empty array
   const [itemsInWish, setItemsInWish] = useState(() => {
    const savedWish = localStorage.getItem("wishItems");
    return savedWish ? JSON.parse(savedWish) : [];
  });
    // Step 2: Whenever itemsInWish changes, update localStorage
  useEffect(() => {
    localStorage.setItem("wishItems", JSON.stringify(itemsInWish));
  }, [itemsInWish]);


   const updateWishlist = (action, book) => {
  switch (action) {
    case "add": {
      const foundBook = itemsInWish.find((item) => item.id === book.id);
      if (foundBook) {
        // Already in wishlist, do nothing
        setItemsInWish(itemsInWish);
      } else {
        setItemsInWish((prev) => [...prev, book]);
      }
      break;
    }

    case "remove": {
      // Remove the book by filtering it out
      const updatedList = itemsInWish.filter((item) => item.id !== book.id);
      setItemsInWish(updatedList);
      break;
    }

    case "clear": {
      // Optional - clears entire wishlist
      setItemsInWish([]);
      break;
    }

    default: {
      console.warn(`Unknown action: ${action}`);
    }
  }
};
;
    return (
        <WishContext.Provider value={{itemsInWish,updateWishlist ,setItemsInWish}}>
            {children}
        </WishContext.Provider>
    )
}

export const useWish = () => useContext(WishContext)
