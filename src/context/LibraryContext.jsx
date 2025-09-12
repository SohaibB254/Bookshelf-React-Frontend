import React,{useContext, createContext, useState, useEffect} from "react";

const LibraryContext = createContext();

export const LibraryProvider = ({children})=>{
    const[libraryItems,setLibraryItems] = useState(()=> {
            const savedLibrary = localStorage.getItem('libraryItems');
            return savedLibrary ? JSON.parse(savedLibrary):[];
    })
    //
    useEffect(()=>{
        localStorage.setItem('libraryItems',JSON.stringify(libraryItems))
    },[libraryItems])
    const addToLibrary = (book)=>{
        setLibraryItems((prev)=>[...prev,book])
    }
    return (
        <LibraryContext.Provider value={{libraryItems,setLibraryItems,addToLibrary}}>
            {children}
        </LibraryContext.Provider>
    )
}

export const useLibrary = ()=>useContext(LibraryContext)