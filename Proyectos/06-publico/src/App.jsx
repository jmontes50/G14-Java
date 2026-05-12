import { BrowserRouter, Routes, Route } from "react-router-dom"
import PlacesPage from "./pages/PlacesPage"
import PlaceInfoPage from "./pages/PlaceInfoPage"

const App = () => {
  return (
    <BrowserRouter>
      <div className="container p-10 mx-auto">
        <Routes>
          <Route path="/" element={<PlacesPage />} />
          {/* con :id estamos indicando que esa ruta recibira un parámetro, Ej. /restaurant/16 */}
          <Route path="/restaurant/:id" element={<PlaceInfoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
