import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

const StoreContextProvider = ({children})=>{
    const [stores, setStores] = useState([]);
    const [currentStore, setCurrentStore] = useState([]);
    const [currentItem, setCurrentItem] = useState([]);



    const LoadStores = async()=>{
        try{
            let res = await fetch('http://localhost:8000/api/stores');
            let data = await res.json();
            setStores(data)
        }
        catch(err){
            console.log(err)
        }
    }


    const LoadCurrentStore = async(storeId)=>{
        try{
            let res = await fetch(`http://localhost:8000/api/stores/${storeId}`);
            let data = await res.json();
            setCurrentStore(data)
        }
        catch(err){
            console.log(err)
        }
    }


    const LoadCurrentItem = async(storeId, id)=>{
        console.log(storeId, id)
        try{
            let res = await fetch(`http://localhost:8000/api/stores/${storeId}/${id}`);
            let data = await res.json();
            setCurrentItem(data)
        }
        catch(err){
            console.log(err)
        }
    }


    useEffect(()=>{
        LoadStores();
    },[])




    const value = {
        stores, setStores, currentStore, LoadCurrentStore, LoadCurrentItem, currentItem
    }

    return(
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    )
}
export default StoreContextProvider;