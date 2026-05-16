import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { SearchContext } from "../context/searchContext";

const Navbar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { search, setSearch } = useContext(SearchContext);

  const manejarSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="navbar bg-base-100 shadown-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          RestApp
        </Link>
      </div>
      <div className="flex gap-2">
        <form onSubmit={manejarSubmit}>
          <input
            type="text"
            placeholder="Busca"
            className="input input-bordered w-24 md:w-auto"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default Navbar
