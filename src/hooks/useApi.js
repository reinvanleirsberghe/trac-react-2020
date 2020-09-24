import { useState, useEffect } from "react";
import "whatwg-fetch";
import { checkStatus } from "../utils/check-api-status";

export default function useAPI({ url, options = {}, immediately = true }) {
  const defaultOptions = {
    method: "GET",
    // mode: 'same-origin',
    cache: "default",
    // credentials: 'same-origin',
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrer: "client"
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  useEffect(() => {
    if (immediately) {
      fetchUrl();
    }
  });

  const fetchUrl = async () => {
    preFetch();
    try {
      const fetchOptions = {
        ...defaultOptions,
        ...options,
        headers: {
          ...defaultOptions.headers,
          ...options.headers
        }
      };
      const response = await fetch(
        `https://api.themoviedb.org/3/${url}?api_key=6e62477285de612040fd923e204d92b4&language=en-US&page=1`,
        fetchOptions
      );
      // checkStatus({ response, url });
      const json = await response.json();
      success(json);
    } catch (err) {
      failure(err);
    }
  };

  const preFetch = () => {
    setIsLoading(true);
    setError(null);
    setData(undefined);
  };

  const success = (data) => {
    setIsLoading(false);
    setError(null);
    setData(data);
  };

  const failure = (error) => {
    setIsLoading(false);
    setError(error);
    setData(undefined);
  };

  return [data, isLoading, error, fetchUrl];
}
