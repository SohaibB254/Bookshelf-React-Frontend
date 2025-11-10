import React,{useContext, createContext, useState, useEffect} from "react";

const LibraryContext = createContext();

export const LibraryProvider = ({children})=>{
    const[bookExistLib,setBookExistLib] = useState('Book added to Library');
    const[libraryItems,setLibraryItems] = useState(()=> {
            const savedLibrary = localStorage.getItem('ItemsInLibrary');
            return savedLibrary ? JSON.parse(savedLibrary):[];
    })
    //
    useEffect(()=>{
        localStorage.setItem('ItemsInLibrary',JSON.stringify(libraryItems))
    },[libraryItems])
    const addToLibrary = (book)=>{
        const foundBook = libraryItems.some(item => item.id === book.id);
        if(!foundBook){
            setLibraryItems((prev)=>[...prev,book])
        }else{
            setBookExistLib('Book is already added to Library')
        }
    }
    return (
        <LibraryContext.Provider value={{libraryItems,setLibraryItems,addToLibrary,bookExistLib}}>
            {children}
        </LibraryContext.Provider>
    )
}

export const useLibrary = ()=>useContext(LibraryContext)