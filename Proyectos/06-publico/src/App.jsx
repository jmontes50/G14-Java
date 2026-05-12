import { BrowserRouter, Routes, Route } from "react-router-dom"
import PlacesPage from "./pages/PlacesPage"

const App = () => {
  return (
    <BrowserRouter>
      <div className="container p-10 mx-auto">
        <Routes>
          <Route path="/" element={<PlacesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
