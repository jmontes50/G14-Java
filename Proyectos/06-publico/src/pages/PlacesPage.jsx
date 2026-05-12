import { useState, useEffect } from 'react';
import axios from "axios";
import PlacesCard from '../components/PlacesCard';

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("https://api-donde.onrender.com/api/restaurants")
    .then((response) => {
      console.log(response);
      const datos = response.data.data;
      setPlaces(datos);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <div>
      <h1>Lugares de Arequipa</h1>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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
