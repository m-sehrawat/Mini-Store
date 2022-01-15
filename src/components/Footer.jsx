import { Flex, Center, Text, HStack, Button, VStack } from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons'
import { FaTwitter, FaFacebook } from 'react-icons/fa'
import { MdCall } from "react-icons/md"
import { Link } from "react-router-dom";

export const Footer = () => {

    return (
        <>
            <Flex h={200} bg={'#212121'} color={'white'} justify={'center'} mt={20}>
                <VStack>
                    <Text my={3}>Made by Mohit Sehrawat | New Delhi | Contact us</Text>
                    <HStack>
                        <Button colorScheme='facebook' size='sm' leftIcon={<FaFacebook />}>
                            <Link to={"/contact"}>Facebook</Link>
                        </Button>
                        <Button colorScheme='twitter' size='sm' leftIcon={<FaTwitter />}>
                             <Link to={"/contact"}>Twitter</Link>
                        </Button>
                        <Button leftIcon={<EmailIcon />} size='sm' colorScheme='teal' variant='solid'>
                        <Link to={"/contact"}>Email</Link>
                        </Button>
                        <Button rightIcon={<MdCall />} size='sm' colorScheme='red'>
                        <Link to={"/contact"}>Call us</Link>
                        </Button>
                    </HStack>
                </VStack>
            </Flex>
        </>
    );
};