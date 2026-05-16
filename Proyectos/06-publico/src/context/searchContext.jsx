import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [search, setSearch] = useState("");

  return <SearchContext.Provider value={{ search, setSearch }}>
    { props.children }
  </SearchContext.Provider>
}

export { SearchContext, SearchContextProvider };
