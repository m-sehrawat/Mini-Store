import { Box, Divider, Text } from "@chakra-ui/react";
import { totalMRP } from "../../utils/extrafunctions";

export const OrderSummary = ({ data }) => {

    const {amount, prodCount} = totalMRP(data);
    console.log('prodCount:', prodCount)
    console.log('amount:', amount)

    return (
        <>
            <Box className="shadow">
                <Text fontSize={'25px'} my={'10px'} textAlign={'center'}>ORDER SUMMARY</Text>
                <Divider />
                <Text>Total MRP { }</Text>
            </Box>
        </>
    );
};