import useGetAxios from "../hooks/useGetAxios";
import { data, useParams } from "react-router-dom"

const PlaceInfoPage = () => {

  const { id } = useParams();

  const URL = `https://api-donde.onrender.com/api/restaurants/${id}`;

  //placesInfo ({data: [], pagination: {}}) aquí es un alias para data.
  const { data, loading, error } = useGetAxios(URL);

  if(error) {
    return <h4 className="text-2xl">Ocurrió un error intente de nuevo</h4>
  }
  if(loading) {
    return <h4 className="text-2xl">Espere por favor...</h4>
  }

  console.log({ data, loading, error });
  return (
    <div>PlaceInfoPage</div>
  )
}

export default PlaceInfoPage
