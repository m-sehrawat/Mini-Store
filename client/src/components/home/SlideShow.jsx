import { Box, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { SlideIcon } from "../theme/Theme";


export const SlideShow = () => {

    const arr = [
        "slideImages/slide0.png",
        "slideImages/slide1.png",
        "slideImages/slide2.png",
        "slideImages/slide3.png",
    ]

    const [index, setIndex] = useState(0);

    const handleLeftIndex = () => {
        setIndex((prev) => prev === 0 ? arr.length - 1 : prev - 1);
    };

    const handleRightIndex = () => {
        setIndex((prev) => prev === arr.length - 1 ? 0 : prev + 1);
    };

    useEffect(() => {
        let timerId = setInterval(() => {
            setIndex((prev) => prev === arr.length - 1 ? 0 : prev + 1);
        }, 6000);

        return () => {
            clearInterval(timerId);
        }
    }, []);

    return (
        <Box className="slide shadow" backgroundImage={arr[index]} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} h={['300px', '400px', '500px', '700px', '900px']}>
            <Center px={'15px'} h={['300px', '400px', '500px', '700px', '900px']}>
                <Flex w={'100%'} justifyContent={'space-between'}>
                    <SlideIcon icon={AiFillCaretLeft} onClick={handleLeftIndex} value={-1} />
                    <SlideIcon icon={AiFillCaretRight} onClick={handleRightIndex} value={1} />
                </Flex>
            </Center>
        </Box>
    );
};

