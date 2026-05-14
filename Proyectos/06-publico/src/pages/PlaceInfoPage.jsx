import useGetAxios from "../hooks/useGetAxios";
import { data, useParams } from "react-router-dom"

const PlaceInfoPage = () => {

  const { id } = useParams();

  const URL = `https://api-donde.onrender.com/api/restaurants/${id}`;

  //placesInfo ({data: [], pagination: {}}) aquí es un alias para data.
  const { data:restaurant, loading, error } = useGetAxios(URL);

  console.log({ restaurant, loading, error });

  if(error) {
    return <h4 className="text-2xl">Ocurrió un error intente de nuevo</h4>
  }
  if(loading) {
    return <h4 className="text-2xl">Espere por favor...</h4>
  }

  const { data: { name, address, phone, district_name, dishes, image_url, description }} = restaurant;

  // console.table({ address, phone, district_name, dishes })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <h2 className="text-3xl font-bold col-span-2">{ name }</h2>
      <div className="w-full h-90 md:h-112.5 overflow-hidden rounded-2xl col-span-2">
        <img src={image_url} alt={`foto ${name}`} className="w-full h-full object-cover" />

      </div>
      <div className="col-span-2 md:col-span-1 p-4">
        <h4 className="text-lg font-bold mb-2">Descripción</h4>
        <p className="text-shadow-md">
          {description}
        </p>
      </div>
      <div className="card col-span-2 md:col-span-1 rounded bg-base-200 p-4">
        <h4 className="text-lg font-bold mb-2">Info</h4>
        <ul className="list">
          <li className="flex flex-col gap-2">
            <span>Dirección: {address}</span>
            <span>Teléfono: {phone}</span>
            <span>Distrito: {district_name}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PlaceInfoPage
