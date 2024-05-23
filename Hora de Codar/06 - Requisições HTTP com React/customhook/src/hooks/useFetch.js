import { useState, useEffect } from "react";

// 4 - customhook

export const useFetch = (url) => {
  const [data, setData] = useState(null);

    // 5 - refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 06 - Loading
    const [loading, setLoading] = useState(false);
    

    const httpConfig = (data, method) =>{
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(data),
            });
            
            setMethod(method);
        }
    };

  useEffect(() => {
    const fetchData = async () => {

      //06 - loading
      setLoading(true);

      const res = await fetch(url);

      const json = await res.json();

      setData(json);

      //06 - loading
      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // 5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
       
        // 5 - refatorando post
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
        
      } 
    };

    httpRequest();
  }, [config, method, url]);

  console.log(config);

  return { data, httpConfig, loading };
};
