import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Buscador } from './pages/Buscador'
import { Detalles } from './pages/Detalles'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Buscador />} />
        <Route path="/detalle/:lat/:lon/:nombre" element={<Detalles />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App