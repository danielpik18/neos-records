import React, { createContext, useState, useEffect } from "react";
import { refreshToken } from "../api/axios";
import jwt_decode from "jwt-decode";


export const AuthContext = createContext({});

export const AuthContextProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();

    const refreshUser = async () => {
        const newAccessToken = await refreshToken();

        if (!newAccessToken) return setLoading(false);

        const user = jwt_decode(newAccessToken);

        localStorage.setItem('accessTokenExp', user.exp)
        setUser(user)
        setLoading(false)
    }

    /* Silent Refresh */
    useEffect(() => {
        if(user) {
            console.log('user was set!!!')

            setTimeout(() => {        
                if(user !== null) refreshUser()
            }, 600000)
        }
    }, [user])

    /* Refresh user on page reload */
    useEffect(() => {
      if(!user) {
        refreshUser();
      }
    }, [user])
    
    
    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;