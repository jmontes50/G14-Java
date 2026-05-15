import { useState, useContext } from 'react';
import axios from "axios";
import { FavoriteContext } from '../context/favoriteContext';
import PlacesCard from '../components/PlacesCard';
import useGetAxios from '../hooks/useGetAxios';

const PlacesPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [query, setQuery] = useState("");

  const URL = `https://api-donde.onrender.com/api/restaurants?page=${page}&limit=${limit}`;

  //placesInfo ({data: [], pagination: {}}) aquí es un alias para data.
  const { data:placesInfo, loading, error } = useGetAxios(URL);

  const { state } = useContext(FavoriteContext);

  const previousPage = () => setPage(page - 1);

  const nextPage = () => setPage(page + 1);

  //optional chaining ?.property para saber si una propiedad existe, de no hacerlo, da un undefined
  const places = placesInfo?.data;

  const paginationInfo = placesInfo?.pagination;

  console.log({ paginationInfo })

  return (
    <div>
      <div className='px-4 py-6 mb-6 flex rounded-4xl border-2 border-white items-center'>
        <h1 className='text-4xl font-bold'>Lugares de Arequipa</h1>
        <span className='text-secondary text-3xl ml-auto'>Favoritos: {state.favorites.length}</span>
      </div>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
        {/* renderizado de listas, es transformar un array de datos a algo que el navegador pueda entender */}
        {/* el key es importante para que React pueda identificar cada elemento de la lista, tiene que ser único */}
        {/* renderizado condicional */}
        {places && places.map(place => (<PlacesCard
          key={place.id}
          id={place.id}
          name={place.name}
          description={place.description}
          image_url={place.image_url}
        />))}
      </div>
      <div className='flex w-full'>
        {/* hacemos un renderizado condicional con un operador ternario */}
        {paginationInfo?.hasPrevPage ? (<button className='btn btn-secondary' onClick={previousPage}>
          Página anterior
        </button>) : null}
        {paginationInfo?.hasNextPage ? (<button className='btn btn-secondary ml-auto' onClick={nextPage}>
          Página siguiente
        </button>) : null}
      </div>
    </div>
  )
}

export default PlacesPage
