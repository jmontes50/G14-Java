import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoritesContextProvider } from './context/favoriteContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesContextProvider>
      <App />
    </FavoritesContextProvider>
  </StrictMode>,
)
