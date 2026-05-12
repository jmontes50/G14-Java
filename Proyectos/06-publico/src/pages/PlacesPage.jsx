import { useState, useEffect } from 'react';
import axios from "axios";
import PlacesCard from '../components/PlacesCard';
import useGetAxios from '../hooks/useGetAxios';

const PlacesPage = () => {

  //places aquí es un alias para data.
  const { data:places, loading, error } = useGetAxios("https://api-donde.onrender.com/api/restaurants");

  return (
    <div>
      <h1>Lugares de Arequipa</h1>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {/* renderizado de listas, es transformar un array de datos a algo que el navegador pueda entender */}
        {/* el key es importante para que React pueda identificar cada elemento de la lista, tiene que ser único */}
        {/* renderizado condicional */}
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
