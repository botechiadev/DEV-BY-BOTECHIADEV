import { useState, createContext, useEffect } from "react";
import { useRequestData } from "../../hooks/useRequestData";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { data: users, isLoading: isLoadingUsers, isError: isErrorUsers } = useRequestData('http://localhost:3003/users', []);
    const [fullList, setFullList] = useState([]);
    const [user, setUser] = useState(null);
    const [id, setId ] = useState('')
    
  
    useEffect(() => {
      setFullList(users);
    }, [users]);





    const login = (user) => {
      setUser(user);
      console.log(user);
    };
  
    const logout = () => {
      setUser(null);
      console.log('logout');
    };
  
    const contextValue = {
      user,
      login,
      logout,
      fullList,
      isLoadingUsers,
      isErrorUsers,
    };
  
    return (
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    );
  };