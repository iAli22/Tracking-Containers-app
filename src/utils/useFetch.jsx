import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchData = async (url) => {
    if (url) {
      fetch(url)
        .then((res) => {
          setDone(true);

          if (res.ok) {
            return res.json();
          }
          throw new Error("Error.");
        })
        .then((data) => {
          setData(null);
          setErrors(null);
          setData(data);
          setDone(false);
        })
        .catch((error) => {
          setErrors(error);
          setDone(false);
        });
    }
  };

  return {
    data,
    errors,
    done,
  };
}

export default useFetch;
