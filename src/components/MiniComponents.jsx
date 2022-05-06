import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


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
}