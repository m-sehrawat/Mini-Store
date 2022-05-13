import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { numberWithCommas, shortString } from "../../utils/extrafunctions";

export const FavouriteBox = ({ data, onClick }) => {

    const { name, img, price } = data;

    return (
        <Flex flexDirection={'column'} boxShadow='sm' overflow={'hidden'}>
            <Box overflow={'hidden'}>
                <Image className="zoom" src={img[0]} />
            </Box>
            <Box p={'10px'}>
                <Text fontSize={['12px', '13px', '13px', '15px']} m={"10px 10px 2px"}>{shortString(name)}</Text>
                <Text fontSize={['14px', '18px']} color={'grey'} m={"1px 10px 2px"}>₹ {numberWithCommas(price)}</Text>
                <Button
                    color={'red'}
                    borderColor={'red'}
                    _hover={{ 'bg': 'red', 'color': 'white' }}
                    onClick={onClick}
                    w={'100%'}
                >Remove
                </Button>
            </Box>
        </Flex>
    );
};