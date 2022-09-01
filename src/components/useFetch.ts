import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { WeatherData } from "../api/types";

export const useFetch = (url: string, cookieName: string) => {
  const [cookies, setCookie] = useCookies([cookieName]);
  const REQUEST_OK = 200;
  const [data, setData] = useState<AxiosResponse<WeatherData> | undefined>(
    undefined
  );

  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (cookies[cookieName]) {
      setData(cookies[cookieName]);
      setPending(false);
    } else {
      const abortCont = new AbortController();
      axios
        .get(url, { signal: abortCont.signal })
        .then((res) => {
          if (res.status !== REQUEST_OK) {
            throw Error("could not fetch data for that resource");
          }
          return res;
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setError(null);
          setCookie(cookieName, data, { maxAge: 600 });
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setPending(false);
            setError(err.message);
          }
        });
      return () => abortCont.abort();
    }
  }, [url]);
  return { data, pending, error };
};
