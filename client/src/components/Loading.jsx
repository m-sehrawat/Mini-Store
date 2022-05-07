import { Container, Image } from "@chakra-ui/react";

export const Loading = () => {

    return (
        <>
            <Container my={['150px', '0px']} maxW={'470px'}>
                <Image src="images/loading.gif" />
            </Container>
        </>
    );
};