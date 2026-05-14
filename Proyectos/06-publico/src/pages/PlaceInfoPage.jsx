import useGetAxios from "../hooks/useGetAxios";
import { data, useParams } from "react-router-dom"

const PlaceInfoPage = () => {

  const { id } = useParams();

  const URL = `https://api-donde.onrender.com/api/restaurants/${id}`;

  //placesInfo ({data: [], pagination: {}}) aquí es un alias para data.
  const { data, loading, error } = useGetAxios(URL);

  console.log(data);
  return (
    <div>PlaceInfoPage</div>
  )
}

export default PlaceInfoPage
