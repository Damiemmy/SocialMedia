import { createContext } from "react";
import { useEffect,useState } from "react";



export const Authcontext=createContext();
export const AuthcontextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(
        JSON.parse(localStorage.getItem('user')) || null
    )

    const login=()=>{
        setCurrentUser({
            "id":1,
            "profilename":"don Joe"
           

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
