import { Flex, Text, HStack, Button, VStack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'


export const Footer = () => {

    return (
        <Flex h={'160px'} bg={'#212121'} color={'white'} justify={'center'} mt={20}>
            <VStack>
                <Text my={'26px'}>Made with ❤️ by Mohit Sehrawat</Text>
                <HStack>
                    <Button colorScheme='linkedin' size='sm' leftIcon={<FaLinkedin />}>
                        <Link target={"_blank"} href={"https://www.linkedin.com/in/m-sehrawat/"}>LinkedIn</Link>
                    </Button>
                    <Button colorScheme='red' size='sm' leftIcon={<FaGithub />}>
                        <Link target={"_blank"} href={"https://github.com/m-sehrawat"}>GitHub</Link>
                    </Button>
                </HStack>
            </VStack>
        </Flex>
    );
};