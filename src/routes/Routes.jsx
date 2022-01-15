import { Route, Routes } from "react-router-dom";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { ProductDetails } from "../components/ProductDetails";
import { Products } from "../components/Products";

export const Router = () => {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>

            <Footer />
        </>
    );
};