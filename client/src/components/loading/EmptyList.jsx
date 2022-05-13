import { Container, Heading, Image } from "@chakra-ui/react";

export const EmptyList = () => {

    return (
        <>
            <Container mt={['150px', '0px']} mb={['150px', '50px']} maxW={'470px'}>
                <Image src='images/no-products.gif' />
                <Heading textAlign={'center'} fontSize={'24px'}>No products found</Heading>
            </Container>
        </>
    );
};