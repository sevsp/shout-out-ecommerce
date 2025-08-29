import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CatalogPage from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";

function App() {
    return (
        <BrowserRouter>
            <TopBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<CatalogPage />} />
                <Route path="/producto/:slug" element={<ProductDetail />} />

            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
