import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
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
    } else if (method === "DELETE") {
      setConfig({
        method,
      });
    }
    setData(data);
    setMethod(method);
    setCallFetch(!callFetch);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError("Houve um erro ao carregar os dados!");
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method) {
        let fetchOptions = [url, config];
        if (method === "DELETE") {
          fetchOptions[0] = `${url}/${data}`; // Construct the URL with the ID for DELETE
        }
        try {
          const res = await fetch(...fetchOptions);
          if (!res.ok) {
            throw new Error("Failed to fetch");
          }
          const json = await res.json();
          setCallFetch(json);
        } catch (error) {
          setError("Houve um erro ao realizar a requisição!");
          console.log(error.message);
        }
      }
    };
    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
