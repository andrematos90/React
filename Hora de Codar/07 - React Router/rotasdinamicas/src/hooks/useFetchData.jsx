import { useEffect } from "react";
import { useState } from "react";

export const useFetchData = (url) =>{

    

    const [data, setData]=useState(null);

    useEffect(()=>{
        
        const fetchData = async () =>{
            
            const res = await fetch(url);

            const json = res.json();

            setData(json);
        }

        fetchData();
    },[url])

    return { data};

};