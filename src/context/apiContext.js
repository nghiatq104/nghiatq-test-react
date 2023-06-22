import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { EndPoint } from "../constans/api";

export const apiContext = createContext({});

const ApiProvider = ({children})=>{
const [dataSpecies,setDataSpecies] = useState([]);
const [searchText,setSearchText] = useState('');

const param = `/species?paginate=true&page=5&perpage=10&with=roles,createdBy&search=${searchText}&inactive=-1`
const url = EndPoint + param;
useEffect(()=>{
    const GetData = async ()=>{
        try {
            const response = await axios.get(url);
            setDataSpecies(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    GetData();
},[url])



    return <apiContext.Provider value={{
        dataSpecies,
        setSearchText
    }}>
        {children}
    </apiContext.Provider>
}

export default ApiProvider