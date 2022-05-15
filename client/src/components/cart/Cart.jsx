import { Box, Button, Center, Flex, Grid, Heading, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getCartDataRequest } from "../../redux/cartProducts/actions";
import { CartBox } from "./CartBox";
import { EmptyList } from "../loading/EmptyList";
import { Error } from "../loading/Error";
import { Loading } from "../loading/Loading";
import { OrderSummary } from "./OrderSummary";
import { Link } from 'react-router-dom';


export const Cart = () => {

    const dispatch = useDispatch();
    const toast = useToast();
    const token = useSelector((state) => state.authReducer.token);
    const { isLoading, isError, cart, amount } = useSelector((state) => state.cartReducer, shallowEqual);

    useEffect(() => {
        dispatch(getCartDataRequest(token, toast));
    }, [dispatch, token, toast])


    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Flex justify={'space-between'} maxW={1200} m={'90px auto 20px'} px={'20px'}>
                <Center color={'#0863be'}>
                    <Heading fontSize={['28px', '35px']}>Cart &nbsp;</Heading>
                    <Text fontSize={['18px', '24px']}> ({cart.length})</Text>
                </Center>
            </Flex>

            <Grid templateColumns={['100%', '100%', '100%', '62% 33%']} gap={'50px'} maxW={1200} m={'40px auto'} p={'20px'}>

                <Box>
                    {cart.length === 0 ? <EmptyList /> : <Flex className="shadow" flexDirection={'column'}  >
                        {cart.map((e, i) => (
                            <CartBox key={i} data={e} />
                        ))}
                        <Flex flexDirection={['column','row','row','row']} p={'20px'} justify={'end'} gap={'10px'}>
                            <Button><Link to={'/products'}>Add more Products</Link></Button>
                            <Button variant={'solid'}><Link to={'/checkout'}>Proceed to Checkout</Link></Button>
                        </Flex>
                    </Flex>}
                </Box>

                <OrderSummary data={amount} />
            </Grid>
        </>
    );
};