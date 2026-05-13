import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Buscador } from './pages/Buscador'
import { Ciudades } from './pages/Ciudades'
import { Detalle } from './pages/Detalle'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Buscador />} />
        <Route path="/ciudades" element={<Ciudades />} />
        <Route path="/detalle" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App