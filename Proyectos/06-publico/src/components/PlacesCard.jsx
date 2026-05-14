import { Link } from "react-router-dom"

const PlacesCard = ({ id, name, description, image_url }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={image_url}
          alt={description}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {/* Link en react seria el equivalente a un <a> */}
          <Link to={`/restaurant/${id}`} className="btn btn-primary">
            Ver más!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PlacesCard
