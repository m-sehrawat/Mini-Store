import { Box, Button, Divider, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { notify, numberWithCommas } from "../../utils/extrafunctions";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCartDataRequest } from "../../redux/cartProducts/actions";
import { getItem } from "../../utils/sessionStorage";
import { PriceText } from "../theme/Theme";

export const OrderSummary = ({ data }) => {

    const { discount, productCount, shippingCharges, totalMRP, payableAmount } = data;
    const [couponCode, setCouponCode] = useState("");

    const dispatch = useDispatch();
    const toast = useToast();
    const token = useSelector((state) => state.authReducer.token);

    const handleCouponDiscount = () => {
        if (totalMRP === 0) {
            return notify(toast, "Please add some products to the cart", "info");
        }
        dispatch(getCartDataRequest(token, toast, couponCode));
    };

    const handleRemoveCoupon = () => {
        if (!getItem("coupon")) {
            return notify(toast, "No coupon is applied", "info");
        }
        dispatch(getCartDataRequest(token, toast, "", true));
    };


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
                {getItem("coupon") && <PriceText title={'Coupon Code'} num={`${getItem("coupon")?.couponCode}`} />}
                <Divider />
                <PriceText fs={'23px'} fw={600} title={'Amount Payable'} num={`₹ ${numberWithCommas(payableAmount)}`} />
                <Divider />

                <Flex mt={'30px'} gap={'15px'} flexDirection={'column'}>
                    <Input onChange={(e) => { setCouponCode(e.target.value) }} type={'text'} placeholder='Coupon Code' />
                    <Button onClick={handleCouponDiscount} w={'100%'}>Apply Coupon</Button>
                    <Button color={'red'} borderColor={'red'} _hover={{ 'bg': 'red', 'color': 'white' }} onClick={handleRemoveCoupon} w={'100%'}>Remove Coupon</Button>
                </Flex>
            </Box>
        </>
    );
};

