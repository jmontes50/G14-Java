import { useContext } from "react";
import useGetAxios from "../hooks/useGetAxios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FavoriteContext } from "../context/favoriteContext";
import { Heart } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

const PlaceInfoPage = () => {

  const { id } = useParams();

  const { state, dispatch } = useContext(FavoriteContext);

  console.log({ state, dispatch })

  const URL = `https://api-donde.onrender.com/api/restaurants/${id}`;

  //placesInfo ({data: [], pagination: {}}) aquí es un alias para data.
  const { data:restaurant, loading, error } = useGetAxios(URL);

  const navigate = useNavigate();

  console.log({ restaurant, loading, error });


  const handleReserva = async () => {
    const result = await Swal.fire({
      title: "Reserva solicitada!",
      text: "Te responderemos en las siguientes horas",
      icon: "success",
      theme: "dark",
      showCancelButton: true,
      cancelButtonText: "Quedarme aquí",
      showConfirmButton: true,
      confirmButtonText: "Regresar a Inicio"
    })
   if(result.isConfirmed) {
    navigate("/");
   }else {
    alert("Cancelo")
   }
  }

  const handleFavorito = () => {
    // alert("Agregado como favorito!");
    dispatch({ type: "AGREGAR", payload: { ...restaurant.data }});
    alert("Restaurante agregado!!");
  }

  if(error) {
    return <h4 className="text-2xl">Ocurrió un error intente de nuevo</h4>
  }
  if(loading) {
    return <h4 className="text-2xl">Espere por favor...</h4>
  }

  const { data: { name, address, phone, district_name, dishes, image_url, description, lat, lng }} = restaurant;

  const coords = [lat, lng];
  // console.table({ address, phone, district_name, dishes })

  const LocationMarker = () => {
    const map = useMapEvents ({
      click(ev){
        console.log(ev);
        const { latlng: { lat, lng }} = ev;
        map.flyTo([lat, lng]);
      }
    })
    return <></>
  }

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
        <ul className="list mb-3">
          <li className="flex flex-col gap-2">
            <span>: {address}</span>
            <span>Teléfono: {phone}</span>
            <span>Distrito: {district_name}</span>
          </li>
        </ul>
        <div className="flex flex-row gap-2">
          <button className="btn btn-primary btn-lg rounded-3xl grow" onClick={handleReserva}>
          Consultar Reserva
          </button>
          <button className="btn btn-secondary btn-lg rounded-full" onClick={handleFavorito}>
            <Heart />
          </button>
        </div>

      </div>
      <div className="flex flex-col md:flex-row gap-4 col-span-2">
        {dishes && dishes.map((dish) => (
          <div
            className="card border border-white rounded p-4 w-full gap-2"
            key={`dish-${dish.id}`}
          >
            <div className="w-full h-60 overflow-hidden rounded">
              <img src={dish.image_url} alt={dish.name} className="w-full h-full object-cover" />
            </div>
            <h5 className="text-md font-bold">{dish.name}</h5>
            <p className="text-sm text-ellipsis">{dish.description}</p>
            <div>
              <span className="font-bold text-sm">Precio:</span> <span>S/. {dish.price}</span>
            </div>
          </div>
        ))}
      </div>
      {restaurant?.data && (<div className="col-span-2 w-full h-100 border">
        <MapContainer center={coords} zoom={13} scrollWheelZoom={false}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coords}>
            <Popup>
              <span>Encuenta a {name} en {address}</span>
            </Popup>
          </Marker>
          <LocationMarker />
        </MapContainer>
      </div>)}

    </div>
  )
}

export default PlaceInfoPage
