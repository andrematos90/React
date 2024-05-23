import { useState, useEffect } from "react";

// 05 - customhook

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 06 - refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 07 - Loading
  const [loading, setLoading] = useState(false);

  //09 - tratramento de erros
  const [error, setError] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      //07 - loading
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);

      } catch (error) {
        setError("Houve um erro ao carregar os dados!");
        console.log(error.message);
      }

      

      //07 - loading
      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // 06 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        // 06 - refatorando post
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config, method, url]);

  console.log(config);

  return { data, httpConfig, loading, error };
};
