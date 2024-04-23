import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllFood from './pages/AllFood'
import CreateProduct from './pages/CreateProduct'
import UpdateProduct from './pages/UpdateProduct'

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllFood />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  )
}
