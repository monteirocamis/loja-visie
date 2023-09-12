import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import ProductDetails  from "./pages/ProductDetails";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import "./globals.css";
import { ProductItemProps } from "./components/ProductItem";
import { APIContextProvider } from "./context/AllProducts";

function App() {
  return (
    <APIContextProvider>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
     
            <Routes>
              <Route path="/" element={<Store />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/productdetails/:id" element={<ProductDetails />} />
              {/* <Route path="/about" element={<About />} /> */}
            </Routes>
     
          {/* <Router/> */}
    
        </Container>
      </ShoppingCartProvider>
    </APIContextProvider>
  );
}

export default App;
