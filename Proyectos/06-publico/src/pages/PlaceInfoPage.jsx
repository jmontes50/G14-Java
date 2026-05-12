import { useParams } from "react-router-dom"

const PlaceInfoPage = () => {

  const params = useParams();

  console.log(params);

  return (
    <div>PlaceInfoPage</div>
  )
}

export default PlaceInfoPage
