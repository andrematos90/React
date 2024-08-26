import { useEffect, useState } from "react"

export const useFetch =(url)=>{

    const [data, setData]=useState(null);

useEffect(()=>{
    const fetchData = async () =>{
        const res = await fetch(url);

        const jsConvertido = await res.json();

        setData(jsConvertido);
    };

    fetchData();

},[url]);

return {data};
};
