import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../components/Cart";
import { Favourite } from "../components/Favourite";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Navbar } from "../components/Navbar";
import { ProductDetails } from "../components/ProductDetails";
import { Products } from "../components/Products";
import { Signup } from "../components/Signup";
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
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/favourite" element={<Private><Favourite /></Private>} />
                </Routes>
            </Box>

            <Footer />
        </>
    );
};