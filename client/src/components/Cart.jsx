import { Box, Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getCartDataRequest } from "../redux/cartProducts/actions";
import { EmptyList } from "./EmptyList";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { CartBox } from "./MiniComponents";

export const Cart = () => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.authReducer.token);
    const { isLoading, isError, cart } = useSelector((state) => state.cartReducer, shallowEqual);

    useEffect(() => {
        dispatch(getCartDataRequest(token));
    }, [dispatch, token])



    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Flex justify={'space-between'} maxW={1200} m={'20px auto'} px={'20px'}>
                <Center>
                    <Heading fontSize={['28px', '35px']}>Cart &nbsp;</Heading>
                    <Text fontSize={['18px', '24px']}> ({cart.length})</Text>
                </Center>
            </Flex>

            <Grid templateColumns={['100%', '100%', '100%', '62% 33%']} gap={'50px'} maxW={1200} m={'40px auto'} p={'20px'}>

                <Box>
                    {cart.length === 0 ? <EmptyList /> : <Flex flexDirection={'column'} gap={['30px', '15px', '20px']}  >
                        {cart.map((e, i) => (
                            <CartBox key={i} data={e} />
                        ))}
                    </Flex>}
                </Box>

                <Box border={'1px solid red'}>
                    <Heading textAlign={'center'}>Total</Heading>
                    <Text>Total price {}</Text>
                </Box>

            </Grid>
        </>
    );
};