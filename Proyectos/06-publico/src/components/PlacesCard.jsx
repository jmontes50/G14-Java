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
          <button className="btn btn-primary">
            Ver más!
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlacesCard
