import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CatalogPage from "./pages/Catalog";

function App() {
    return (
        <BrowserRouter>
            <TopBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<CatalogPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
