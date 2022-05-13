import { Box, Button, Center, Divider, Grid, Image, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCartRequest, updateQuantityInCartRequest } from "../../redux/cartProducts/actions";
import { numberWithCommas, shortString } from "../../utils/extrafunctions";


export const CartBox = ({ data }) => {

    const { _id, name, img, price, quantity } = data;

    const dispatch = useDispatch();
    const toast = useToast();
    const token = useSelector((state) => state.authReducer.token);

    const handleDeleteItemChange = () => {
        dispatch(deleteFromCartRequest(_id, token, toast));
    };

    const handleQuantityChange = (value) => {
        if (quantity === 1 && value === -1) {
            dispatch(deleteFromCartRequest(_id, token, toast));
        } else {
            let payload = {
                quantity: quantity + value,
                price: value === 1 ? price + (price / quantity) : price - (price / quantity)
            };
            dispatch(updateQuantityInCartRequest(_id, payload, token, toast));
        }
    };

    return (
        <>
            <Grid templateColumns={['100%', '60% 40%']} h={['190px', '120px']} overflow={'hidden'} p={'5px'}>
                <Grid templateColumns={'110px 70%'}>
                    <Box w={'110px'} overflow={'hidden'}>
                        <Image src={img[0]} />
                    </Box>
                    <Center>
                        <Box w={'100%'} >
                            <Text fontSize={['16px']} m={"10px 10px 2px"}>{shortString(name)}</Text>
                            <Text fontWeight={500} fontSize={['20px']} m={"1px 10px 2px"}>₹ {numberWithCommas(price)}</Text>
                        </Box>
                    </Center>
                </Grid>
                <Grid templateColumns={'50% 50%'} h={['70px', '100%']}>
                    <Box >
                        <Center h={'100%'} >
                            <Button onClick={() => { handleQuantityChange(-1) }} size={'sm'} fontSize={'20px'} >-</Button>
                            <Text fontSize={'18px'} mx={'15px'}>{quantity}</Text>
                            <Button onClick={() => { handleQuantityChange(1) }} size={'sm'} fontSize={'20px'} >+</Button>
                        </Center>
                    </Box>
                    <Box >
                        <Center h={'100%'} px={'10px'}>
                            <Button
                                onClick={handleDeleteItemChange}
                                size={'sm'}
                                colorScheme={'red'}
                                color={'red'}
                                borderColor={'red'}
                                _hover={{ 'bg': 'red', 'color': 'white' }}
                            >
                                Remove
                            </Button>
                        </Center>
                    </Box>
                </Grid>
            </Grid>
            <Divider />
        </>
    );
};