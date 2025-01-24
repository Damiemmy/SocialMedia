import { createContext } from "react";
import { useEffect,useState } from "react";
import bolu from "../asset/homepic.jpg"



export const Authcontext=createContext();
export const AuthcontextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(
        JSON.parse(localStorage.getItem('user')) || null
    )

    const login=()=>{
        setCurrentUser({
            "id":1,
            "profilename":"don Joe",
            "profileimage": bolu
           

        });
        

    };
        
    
    
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(currentUser))
    },[currentUser])
    return(
        <Authcontext.Provider value={{login,currentUser}}>
        {children}
        </Authcontext.Provider>
    )
};
