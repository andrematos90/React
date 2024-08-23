import { useEffect, useState } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);

      const jsonConvertido = await res.json();

      setData(jsonConvertido);
    };
    fetchData();
  }, [url]);

  return {data};
};

export default useFetchData;