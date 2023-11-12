import axios from "axios";
import { createContext } from "react";

export let MealsContext = createContext();

export default function MealsContextProvider({ children }) {
  function getAllData(SearchType) {
    return axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?${SearchType}=list`
    );
  }
  async function getCategData(litter,categType) {
   return await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?${litter}=${categType}`
    );
  }

  return (
    <MealsContext.Provider value={{ getAllData ,getCategData}}>
      {children}
    </MealsContext.Provider>
  );
}
