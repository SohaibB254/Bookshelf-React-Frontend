import React, { useState, useContext, createContext, useEffect } from 'react'

const HomeVContext = createContext()

export const HomeVProvider = ({children})=>{
    // Home Version controlling state
    const [homeV, setHomeV ] = useState(()=>{
        const SavedHomeV = localStorage.getItem('homeVer');
        return SavedHomeV ? JSON.parse(SavedHomeV):'';
    })
    // Updating local storage variable based on state
    useEffect(()=>{
        localStorage.setItem('homeVer',JSON.stringify(homeV))
        console.log(homeV)
    },[homeV])
    const handleHomeV = (homeV) =>{
        setHomeV(homeV)
    }


    return <HomeVContext.Provider value={{ homeV, handleHomeV, setHomeV }}>
        {children}
    </HomeVContext.Provider>
}

export const useHomeV = () => useContext(HomeVContext);
