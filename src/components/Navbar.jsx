import { Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <>
            <Flex h={14} bg={'#F5F5F5'}>
                <Center>
                    <Link to={'/'}>
                        <Heading ml={5} fontSize={20}>ProKart</Heading>
                    </Link>
                </Center>
                <Spacer />
                <Center>
                    <Button mr={4} ><Link to={"/"}>Home</Link></Button>
                    <Button mr={4} ><Link to={"/products"}>Products</Link></Button>
                    <Button mr={4} ><Link to={"/about"}>About</Link></Button>
                    <Button mr={4} ><Link to={"/contact"}>Contact us</Link></Button>
                    <Button mr={4} ><Link to={"/faq"}>FAQ</Link></Button>
                    <Button mr={4} ><Link to={"/"}>Login</Link></Button>
                </Center>
            </Flex>
        </>
    );
};