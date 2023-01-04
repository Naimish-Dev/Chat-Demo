import { createContext,useContext, useEffect,useState } from "react";
import UserData from "../Data/User";
const UserContext=createContext()

const UserContextProvider=({children})=>{
const [users, setusers] = useState([]);
const [WithChat, setWithChat] = useState([]);

useEffect(() => {
    setusers(UserData)
}, [users])

    return <UserContext.Provider value={{ users, setusers, WithChat, setWithChat}}> {children}</UserContext.Provider> 
};


const useUsercontext=()=>{
    return useContext(UserContext)
}

export {UserContextProvider,useUsercontext}