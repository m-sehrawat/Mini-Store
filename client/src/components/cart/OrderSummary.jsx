import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import { numberWithCommas } from "../../utils/extrafunctions";

export const OrderSummary = ({ data }) => {
    const { discount, productCount, shippingCharges, totalMRP, payableAmount } = data;

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
                    <Input type={'text'} placeholder='Coupon Code' />
                    <Button w={'100%'}>Apply Coupon</Button>
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