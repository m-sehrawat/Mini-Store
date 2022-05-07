import { Container, Image } from "@chakra-ui/react";

export const Error = () => {

    return (
        <>
            <Container my={['150px', '0px']} maxW={'470px'}>
                <Image src="images/error.gif" />
            </Container>
        </>
    );
};