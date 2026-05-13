import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Buscador } from './pages/Buscador'
import { Ciudades } from './pages/Ciudades'
import { Detalles } from './pages/Detalles'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Buscador />} />
        <Route path="/ciudades" element={<Ciudades />} />
        <Route path="/detalle/:lat/:lon/:nombre" element={<Detalles />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App