import { createContext, useReducer } from "react";

const FavoriteContext = createContext();

//useReducer
const initialState = {
  favorites: [],
  city: "Arequipa"
}

const favoritesReducer = (state, action) => {
  //Agregar un restaurante a favoritos
  if(action.type === "AGREGAR"){
    //retornamos en una acción, va a ser que cambio queremos realizar
    return {
      ...state,
      favorites: [...state.favorites, action.payload]
    }
  } else if(action.type === "LIMPIAR"){
    return {
      favorites: [],
      city: ""
    }
  } else {
    return state;
  }
}

//Context
const FavoritesContextProvider = (props) => {
  //useReducer(lasAccionesARealizar, estadoInicial)
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  return (
    //value en el Provider van a ser las referencias que podemos compartir
    <FavoriteContext.Provider value={{ state, dispatch }}>
      { props.children }
    </FavoriteContext.Provider>
  )
}

export { FavoriteContext, FavoritesContextProvider };
