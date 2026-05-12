import { useState, useEffect } from 'react';
import axios from "axios";
import PlacesCard from '../components/PlacesCard';

const PlacesPage = () => {
  const [places, setPlaces] = useState([
    {
      "id": 1,
      "name": "Yanahuara",
      "description": "Distrito residencial y turístico, famoso por su mirador y picanterías",
      "created_at": "2024-01-15 10:00:00"
    },
    {
      "id": 2,
      "name": "Cayma",
      "description": "Distrito tranquilo con parques y áreas verdes, ideal para familias",
      "created_at": "2024-01-20 14:30:00"
    },
    {
      "id": 3,
      "name": "Cerro Colorado",
      "description": "Distrito en crecimiento con centros comerciales y universidades",
      "created_at": "2024-01-25 09:15:00"
    }
  ]);

  // useEffect(() => {
  //   axios.get("")
  // }, [])

  // <li key={place.id}>
  //   <h2>{place.name}</h2>
  //   <p>{place.description}</p>
  //   <small>Creado el: {place.created_at}</small>
  // </li>

  return (
    <div>
      <h1>Lugares de Arequipa</h1>
      <div>
        {/* renderizado de listas, es transformar un array de datos a algo que el navegador pueda entender */}
        {/* el key es importante para que React pueda identificar cada elemento de la lista, tiene que ser único */}
        {places.map(place => (<PlacesCard
          key={place.id}
          id={place.id}
          name={place.name}
          description={place.description}
          image_url={place.image_url}
      />))}



      </div>
    </div>
  )
}

export default PlacesPage
