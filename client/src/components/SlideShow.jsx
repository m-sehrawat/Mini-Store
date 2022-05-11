import { Box, Center, Flex, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export const SlideShow = () => {

    const [index, setIndex] = useState(0);

    const handleIndexChange = (value) => {
        setIndex((prev) => prev === 5 ? 0 : prev === 0 ? 4 : prev + value);
    }

    useEffect(() => {
        let timerId = setInterval(() => {
            setIndex((prev) => prev === 5 ? 0 : prev + 1);
        }, 6000);

        return () => {
            clearInterval(timerId);
        }
    }, []);

    return (
        <>
            <Box className="slide" backgroundImage={`slideImages/img${index}.jpg`} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} borderRadius={'30px'} h={['150px', '200px', '300px', '400px']} shadow={'lg'}>
                <Center px={'15px'} h={['150px', '200px', '300px', '400px']}>
                    <Flex w={'100%'} justifyContent={'space-between'}>
                        <Icon onClick={() => { handleIndexChange(-1) }} className="expand" w={['30px', '40px', '50px']} h={['30px', '40px', '50px']} _hover={{ 'bg': 'white' }} padding={['5px', '7px', '10px']} borderRadius={'50%'} as={AiFillCaretLeft} />
                        <Icon onClick={() => { handleIndexChange(1) }} className="expand" w={['30px', '40px', '50px']} h={['30px', '40px', '50px']} _hover={{ 'bg': 'white' }} padding={['5px', '7px', '10px']} borderRadius={'50%'} as={AiFillCaretRight} />
                    </Flex>
                </Center>
            </Box>
        </>
    );
};