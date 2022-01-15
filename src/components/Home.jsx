import { Box, Center, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

export const Home = () => {

    return (
        <>
            <Box>
                <Heading m={10} textAlign={'center'}>Home Page</Heading>
            </Box>
            <SimpleGrid columns={3} spacing={10} maxW={1100} m={'20px auto'}>
                <Box>
                    <Image boxShadow={'2xl'} borderRadius='full' src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/066cb1d4e2fd4281aceaac8300b7f4c9_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_21_model.jpg"></Image>
                    <Flex justify={'center'}>
                        <Text mt={5} fontSize={25}>MEN</Text>
                    </Flex>
                </Box>
                <Box>
                    <Image boxShadow={'2xl'} borderRadius='full' src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/420cc5514bed47f68e4cac43014baef3_9366/High-Support_Bra_Black_GL0589_21_model.jpg"></Image>
                    <Flex justify={'center'}>
                        <Text mt={5} fontSize={25}>WOMEN</Text>
                    </Flex>
                </Box>
                <Box>
                    <Image boxShadow={'2xl'} borderRadius='full' src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/37f69f2a03fa4897b526ac8900dff31d_9366/X_Training_Goalkeeper_Gloves_Yellow_GK3513_01_standard.jpg"></Image>
                    <Flex justify={'center'}>
                        <Text mt={5} fontSize={25}>KIDS</Text>
                    </Flex>
                </Box>
            </SimpleGrid>
        </>
    );
};