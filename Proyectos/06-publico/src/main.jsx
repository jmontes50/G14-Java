import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoritesContextProvider } from './context/favoriteContext.jsx'
import { SearchContextProvider } from './context/searchContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </FavoritesContextProvider>
  </StrictMode>,
)
