import { Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {

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
                    <Button bg={'transparent'} mr={'2px'} ><Link to={"/products"}>Products</Link></Button>
                    <Button bg={'transparent'} mr={'2px'} ><Link to={"/"}>Login</Link></Button>
                </Center>
            </Flex>
        </>
    );
};