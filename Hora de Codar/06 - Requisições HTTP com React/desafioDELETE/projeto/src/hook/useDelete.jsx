import { useEffect } from "react";
import { useFetch } from "./useFetch"

export const useDelete = ()=>{

   const deleteItem = async (url, id) =>{
    
    const res = await fetch(`${url}/${id}`,{
        method:"DELETE",
    });
   };
   return {deleteItem};
}