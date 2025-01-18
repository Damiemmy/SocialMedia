import React from 'react'
import { createContext,useState,useEffect} from 'react';

export const Darkmodecontext=createContext();
export const AuthDarkmodeProvider = ({children}) => {

    const [darkmode,setDarkmode]=useState(JSON.parse(localStorage.getItem('darkmode')) || false);

    const toogle=()=>{
        setDarkmode(!darkmode);
    };
    
    useEffect(()=>{
        localStorage.setItem('darkmode',darkmode);
        console.log(darkmode)
    },[darkmode]);


  return (
        <Darkmodecontext.Provider value={{darkmode, toogle}}>
            {children}
        </Darkmodecontext.Provider>
        
  );
};
