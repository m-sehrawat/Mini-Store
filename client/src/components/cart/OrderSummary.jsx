import { Box, Button, Divider, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { numberWithCommas } from "../../utils/extrafunctions";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCartDataRequest } from "../../redux/cartProducts/actions";

export const OrderSummary = ({ data }) => {

    const { discount, productCount, shippingCharges, totalMRP, payableAmount } = data;
    const [couponCode, setCouponCode] = useState("");

    const dispatch = useDispatch();
    const toast = useToast();
    const token = useSelector((state) => state.authReducer.token);

    const handleCouponDiscount = () => {
        dispatch(getCartDataRequest(token, toast, couponCode));
    }

    return (
        <>
            <Box className="shadow" p={'25px'}>
                <Text fontWeight={600} fontSize={'25px'} mb={'10px'} textAlign={'center'}>ORDER SUMMARY</Text>
                <Divider />
                <PriceText title={'Total MRP'} num={`₹ ${numberWithCommas(totalMRP)}`} />
                <PriceText title={'Shipping Charges'} num={`₹ ${shippingCharges}`} />
                <PriceText title={'Quantity'} num={productCount} />
                <Divider />
                <PriceText title={'Coupon Discount'} num={`₹ ${numberWithCommas(discount)}`} />
                <Divider />
                <PriceText fs={'23px'} fw={600} title={'Amount Payable'} num={`₹ ${numberWithCommas(payableAmount)}`} />
                <Divider />

                <Flex mt={'30px'} gap={'15px'} flexDirection={'column'}>
                    <Input onChange={(e) => { setCouponCode(e.target.value) }} type={'text'} placeholder='Coupon Code' />
                    <Button onClick={handleCouponDiscount} w={'100%'}>Apply Coupon</Button>
                </Flex>
            </Box>
        </>
    );
};

export const PriceText = ({ title, num, fs = '20px', fw }) => {

    return (
        <>
            <Flex fontWeight={fw} fontSize={fs} my={'15px'} justify={'space-between'}>
                <Text>{title}</Text>
                <Text>{num}</Text>
            </Flex>
        </>
    );
};