import { useStore } from "@store/store";
import { useEffect, useState } from "react";

let identifiers = [];

//Por enquanto ela é utilizável somente com recipes
const useQuery = (identifier, url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [store, dispatch] = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const recipes = await response.json();
        dispatch("ADD_RECIPES", recipes); //isso faz com que ela deixe de ser genérica
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    //checks if has fetched before
    if (!identifiers.includes(identifier)) {
      identifiers.push(identifier);
      fetchData();
    } else {
      setLoading(false);
    }
  }, [url, identifier]);

  const data = store[identifier];
  return [data, loading, error];
};

export default useQuery;
