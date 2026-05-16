import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadown-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          RestApp
        </Link>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Busca"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
    </div>
  )
}

export default Navbar
