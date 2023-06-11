import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [pending, setPending] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const getData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setPending(false);
        setData(data);
      } catch (err) {
        const msg = err.message ? err.message : "Something went wrong";
        setError(msg);
        setPending(false);
      }
    };
    getData(url);
  }, [url]);
  return { data, setData, error, setError, pending, setPending };
};

export default useFetch;
