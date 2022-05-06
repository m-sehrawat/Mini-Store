import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { shortString } from "../helpers/extrafunctions";


export const Section = ({ path, img, title }) => {
    return (
        <Box>
            <Box shadow={'lg'} borderRadius={'10%'} overflow={'hidden'}>
                <Link to={path}>
                    <Image className="zoom" src={img} />
                </Link>
            </Box>
            <Text mt={5} align={'center'} fontSize={25}>{title}</Text>
        </Box>
    );
};



export const ProductBox = ({ data }) => {

    const { id, name, img, category, brand } = data;

    return (
        <>
            <Link key={id} to={`/products/${id}`}>
                <Flex flexDirection={'column'} boxShadow='sm' overflow={'hidden'}>
                    <Box overflow={'hidden'}>
                        <Image className="zoom" src={img[0]} />
                    </Box>
                    <Box p={'10px'}>
                        <Text fontSize={17} m={"10px 10px 2px"}>{shortString(name)}</Text>
                        <Text fontSize={14} color={'grey'} m={"2px 10px 2px"}>{category}</Text>
                        <Text fontSize={14} color={'grey'} m={"1px 10px 2px"}>{brand}</Text>
                    </Box>
                </Flex>
            </Link>
        </>
    );
};