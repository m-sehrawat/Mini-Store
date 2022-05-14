import { Container, Image } from "@chakra-ui/react";

export const OrderPlaced = () => {

    return (
        <>
             <Container my={['150px', '0px']} maxW={'470px'}>
                <Image src="images/success.gif" />
            </Container>
        </>
    );
};