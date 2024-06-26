import { createContext , useState} from "react";

import dataProducts from './../../data/dataProducts'

export const ShopContext = createContext();


export const ShopProvider = ({children})=>{

    const [productsList, setProductsList] = useState([...dataProducts])
    
    const [shopList, setShopList] = useState(null)


    



    const contextValue={
        productsList,
        setProductsList,
        shopList,
        setShopList
    }
    return(
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}