import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
