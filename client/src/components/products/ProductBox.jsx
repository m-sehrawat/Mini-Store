import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { numberWithCommas, shortString } from "../../utils/extrafunctions";

export const ProductBox = ({ data }) => {

    const { _id, name, img, description, brand, price, rating } = data;

    return (
        <Link to={`/products/${_id}`}>
            <Flex flexDirection={'column'} boxShadow='sm' overflow={'hidden'}>
                <Box overflow={'hidden'}>
                    <Image className="zoom" src={img[0]} />
                </Box>
                <Box p={'10px'}>
                    <Text fontSize={17} m={"10px 10px 2px"}>{shortString(name)}</Text>
                    <Text fontSize={14} color={'grey'} m={"2px 10px 2px"}>{description}</Text>
                    <Text fontSize={14} color={'grey'} m={"1px 10px 2px"}>{brand}</Text>
                    <Text fontSize={20} color={'grey'} m={"1px 10px 2px"}>₹ {numberWithCommas(price)}</Text>
                    <Text fontSize={14} color={'grey'} m={"1px 10px 2px"}>Rating: {rating}</Text>
                </Box>
            </Flex>
        </Link>
    );
};