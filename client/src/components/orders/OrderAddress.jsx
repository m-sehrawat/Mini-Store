import { Box, Divider, Text } from "@chakra-ui/react";
import { AddressText } from "../theme/Theme";

export const OrderAddress = ({ address }) => {

    const { fullName, mobile, streetAddress, landmark, city, state, pincode } = address;

    return (
        <>
            <Box className="shadow" py={'15px'} px={'25px'}>
                <Text fontWeight={600} fontSize={'25px'} mb={'10px'} textAlign={'center'}>SHIPPING ADDRESS</Text>
                <Divider />
                <AddressText title={'Full Name :'} value={fullName} />
                <AddressText title={'Mobile :'} value={`+91 ${mobile}`} />
                <AddressText title={'Street Address :'} value={streetAddress} />
                {landmark && <AddressText title={'Landmark :'} value={landmark} />}
                <AddressText title={'City :'} value={city} />
                <AddressText title={'State :'} value={state} />
                <AddressText title={'Pincode :'} value={pincode} />
            </Box>
        </>
    );
};