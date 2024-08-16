import { useEffect, useState, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // Defina fetchData usando useCallback para que a referência da função não mude
  const fetchData = useCallback(async () => {
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
  }, [url]); // Dependência de url para garantir que a função seja atualizada corretamente

  useEffect(() => {
    fetchData(); // Chame fetchData na montagem inicial
  }, [fetchData]);

  return { data, refetch: fetchData }; // Retorne fetchData como refetch
};
