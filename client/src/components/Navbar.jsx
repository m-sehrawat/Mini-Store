import { Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setItem } from "../helpers/sessionStorage";
import { setGender } from "../redux/allProducts/actions";

export const Navbar = () => {

    const dispatch = useDispatch();

    const handleGenderChange = () => {
        dispatch(setGender("allProducts"));
        setItem("isGender", "allProducts");
    }

    return (
        <>
            <Flex h={14} bg={'#F5F5F5'}>
                <Center>
                    <Link to={'/'}>
                        <Heading ml={5} display={['none', 'block']} fontSize={'20px'}>Mini Store</Heading>
                    </Link>
                </Center>
                <Spacer />
                <Center>
                    <Button bg={'transparent'} mr={'2px'} ><Link to={"/"}>Home</Link></Button>
                    <Button onClick={handleGenderChange} bg={'transparent'} mr={'2px'} ><Link to={"/products"}>Products</Link></Button>
                    <Button bg={'transparent'} mr={'2px'} ><Link to={"/login"}>Login</Link></Button>
                </Center>
            </Flex>
        </>
    );
};