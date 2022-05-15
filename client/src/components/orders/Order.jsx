import { Box, Center, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getOrderDataRequest } from "../../redux/orderDetails/actions";
import { EmptyList } from "../loading/EmptyList";
import { Error } from "../loading/Error";
import { Loading } from "../loading/Loading";
import { OrderAddress } from "./OrderAddress";
import { OrderBox } from "./OrderBox";
import { Summary } from "./Summary";

export const Order = () => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.authReducer.token);
    const { isLoading, isError, orderData } = useSelector((state) => state.orderReducer, shallowEqual);

    useEffect(() => {
        dispatch(getOrderDataRequest(token));
    }, [token, dispatch]);

    if (orderData.length === 0) {
        return <EmptyList />;
    }

    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Box px={'20px'}>
                <Flex justify={'space-between'} maxW={1200} m={'90px auto 20px'}>
                    <Center color={'#0863be'}>
                        <Heading fontSize={['25px', '35px']}>Orders &nbsp;</Heading>
                        <Text fontSize={['18px', '24px']}> ({orderData.length})</Text>
                    </Center>
                </Flex>

                <Box maxW={1200} m={'40px auto'}>
                    {orderData.map((item) => (
                        <Box key={item._id}>
                            <Grid templateColumns={['100%', '48% 48%', '48% 48%', '31% 30% 31%']} gap={['30px', '4%', '4%', '4%']} >

                                <Box className="shadow">
                                    <Text mt={'15px'} fontWeight={600} fontSize={'25px'} mb={'10px'} textAlign={'center'}>ORDERED ITEMS</Text>
                                    <Divider />
                                    {item.product.map((e) => (
                                        <OrderBox key={e._id} product={e} />
                                    ))}
                                </Box>

                                <Summary createdAt={item.createdAt} amount={item.amount} />

                                <OrderAddress address={item.address} />
                            </Grid>

                            <Divider my={'30px'} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
};