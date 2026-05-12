import { useState, useEffect } from "react";
import axios from "axios";

//un customHooks tiene que tener el prefijo 'use'
const useGetAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  // console.log({url})

  useEffect(() => {
    setLoading(true);

    axios.get(url)
    .then((response) => {
      // console.log(response.data)
      //Esto esta ajustado a nuestra API, sabemos que existe .data en la respuesta aparte de axios
      setData(response.data);
      setLoading(true);
    })
    .catch((error) => {
      setError(error);
      setLoading(error);
    })

  }, [url]);

  return { data, loading, error };
}

export default useGetAxios;
