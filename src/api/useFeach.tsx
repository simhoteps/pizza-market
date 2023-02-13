import React, { useState, useEffect } from "react";

interface dataProps {
  confirmed: number;
  deaths: number;
  lastChecked: string;
  lastReported: string;
  location: string;
  recovered: null;
}

const useFetch = (param?: any) => {
  const [data, setData] = useState<dataProps[]>([]);
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  /*  const url = `https://dummyjson.com/products${new URLSearchParams(param)}`; */
  const url = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      await fetch(url, {
        method: "GET", // default, so we can ignore
      })
        .then((response) => {
          return response.json();
        })
        .then((datas) => {
          datas.status === 404 || datas.status === 404 || datas.status === 400
            ? setError(true)
            : setError(false);
          setData(datas.data);
        })
        .catch((err) => {
          setError(err.message);
          setData([]);
        });
      setIsLoading(false);
    };
    fetchAPI();
  }, [url]);

  return [data, error, isLoading];
};

export default useFetch;
