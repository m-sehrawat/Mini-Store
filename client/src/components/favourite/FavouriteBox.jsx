import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartRequest } from "../../redux/cartProducts/actions";
import { notify, numberWithCommas, shortString } from "../../utils/extrafunctions";

export const FavouriteBox = ({ data, onClick }) => {

    const { name, img, price } = data;
    const toast = useToast();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.authReducer.token);

    const handleAddToCart = () => {
        if (!token) return notify(toast, "Please login first", "error");
        dispatch(addToCartRequest(data, token, toast));
    };

    return (
        <Flex flexDirection={'column'} boxShadow='sm' overflow={'hidden'}>
            <Box overflow={'hidden'}>
                <Image className="zoom" src={img[0]} />
            </Box>
            <Box p={'10px'}>
                <Text fontWeight={600} fontSize={['12px', '13px', '13px', '16px']} m={"10px 10px 2px"}>{shortString(name)}</Text>
                <Text fontSize={['14px', '18px']} color={'grey'} m={"5px 10px"}>₹ {numberWithCommas(price)}</Text>
                <Flex flexDirection={'column'} gap={'10px'}>
                    <Button onClick={handleAddToCart}>Add to Cart</Button>
                    <Button
                        color={'red'}
                        borderColor={'red'}
                        _hover={{ 'bg': 'red', 'color': 'white' }}
                        onClick={onClick}
                    >Remove
                    </Button>

                </Flex>
            </Box>
        </Flex>
    );
};