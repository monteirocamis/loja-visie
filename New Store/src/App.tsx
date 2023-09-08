import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { ProductDetails } from "./pages/ProductDetails"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"


function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        {/* <Router/> */}
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
