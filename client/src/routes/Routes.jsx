import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Signup } from "../components/auth/Signup";
import { Cart } from "../components/cart/Cart";
import { ProductDetails } from "../components/description/ProductDetails";
import { Favourite } from "../components/favourite/Favourite";
import { Footer } from "../components/footer/Footer";
import { Home } from "../components/home/Home";
import { Navbar } from "../components/navbar/Navbar";
import { Products } from "../components/products/Products";
import { Private } from "./PrivateRoute";

export const Router = () => {

    return (
        <>
            <Navbar />

            <Box mt={'80px'}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Private><Cart /></Private>} />
                    <Route path="/favourite" element={<Private><Favourite /></Private>} />
                </Routes>
            </Box>

            <Footer />
        </>
    );
};