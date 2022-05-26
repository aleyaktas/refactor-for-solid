import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //called everytime document renders
  useEffect(() => {
    //to abort Dom request when needed
    //fetch aborted will be shown when there is sudden swicth of page without the content full load
    const abortCont = new AbortController();

    //Fetching the data
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          //auto cattch other errors i.e network or other
          setIsPending(false);
          setError(err.message);
        }
      });

    //abort the fetch when switched
    return () => abortCont.abort();
  }, [url]);

  //Returning the data
  return { data, isPending, error };
};

export default useFetch;
