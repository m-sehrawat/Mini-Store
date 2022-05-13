import { Box, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { SlideIcon } from "../theme/Theme";


export const SlideShow = () => {

    const arr = [
        "https://cdn.shopify.com/s/files/1/0882/5946/files/DB_Header_01_1944x.jpg?v=1631200875",
        "https://cdn.shopify.com/s/files/1/0882/5946/files/20211031_LLSupply_00248_1944x.jpg?v=1636496345",
        "https://cdn.shopify.com/s/files/1/0882/5946/files/20211031_LLSupply_00498-Edit_1944x.jpg?v=1636496548",
        "https://cdn.shopify.com/s/files/1/0882/5946/files/surf_cover_barrel_1944x.jpg?v=1647472200",
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
        <>
            <Box className="slide shadow" backgroundImage={arr[index]} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} h={['300px', '400px', '500px', '700px', '900px']}>
                <Center px={'15px'} h={['300px', '400px', '500px', '700px', '900px']}>
                    <Flex w={'100%'} justifyContent={'space-between'}>
                        <SlideIcon icon={AiFillCaretLeft} onClick={handleLeftIndex} value={-1} />
                        <SlideIcon icon={AiFillCaretRight} onClick={handleRightIndex} value={1} />
                    </Flex>
                </Center>
            </Box>
        </>
    );
};

