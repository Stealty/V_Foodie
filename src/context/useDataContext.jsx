import { createContext, useContext } from "react";
import useFetch from "@hooks/useFetch";

export const useDataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, loading, error] = useFetch("@/../data.json");

  return (
    <useDataContext.Provider value={{ data, loading, error }}>
      {children}
    </useDataContext.Provider>
  );
};

export function useData() {
  return useContext(useDataContext);
}
