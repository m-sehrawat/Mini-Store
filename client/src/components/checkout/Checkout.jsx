import { Box, Button, Container, Divider, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setShippingAddressRequest } from "../../redux/cartProducts/actions";
import { addressValidator, notify, productRequiredData } from "../../utils/extrafunctions";
import { OrderPlaced } from "../loading/OrderPlaced";

export const Checkout = () => {

    const initState = { fullName: "", mobile: "", streetAddress: "", landmark: "", city: "", state: "", pincode: "" }
    const [shippingData, setShippingData] = useState(initState);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const token = useSelector((state) => state.authReducer.token);
    const { cart, amount } = useSelector((state) => state.cartReducer, shallowEqual);

    const handleInputChange = ({ target: { name, value } }) => {
        setShippingData({ ...shippingData, [name]: value });
    }

    const handlePlaceOrder = () => {
        if (addressValidator(shippingData, toast)) {
            dispatch(setShippingAddressRequest(shippingData, amount, productRequiredData(cart), token, toast));
            setTimeout(() => {
                setOrderPlaced(true);
                notify(toast, "Order placed successfully", "success");
                setTimeout(() => {
                    navigate("/orders");
                }, 3000);
            }, 2000);
        }
    };

    if (orderPlaced) {
        return <OrderPlaced />;
    }

    return (
        <Box px={'10px'}>
            <Container p={['10px 15px 30px', '10px 40px 30px']} mt={'90px'} className='shadow'>
                <Text my={'20px'} fontWeight={600} fontSize={'25px'} textAlign={'center'}>SHIPPING ADDRESS</Text>
                <Divider />
                <Flex mt={'30px'} flexDirection={'column'} gap={'20px'}>
                    <Input onChange={handleInputChange} name="fullName" type={'text'} placeholder='Full Name*' />
                    <Input onChange={handleInputChange} name="mobile" type={'number'} placeholder='Mobile*' />
                    <Input onChange={handleInputChange} name="streetAddress" type={'text'} placeholder='Street Address*' />
                    <Input onChange={handleInputChange} name="landmark" type={'text'} placeholder='Landmark' />
                    <Input onChange={handleInputChange} name="city" type={'text'} placeholder='City*' />
                    <Flex gap={'5px'} mb={'10px'}>
                        <Input onChange={handleInputChange} name="state" type={'text'} placeholder='State*' />
                        <Input onChange={handleInputChange} name="pincode" type={'number'} placeholder='Pincode*' />
                    </Flex>
                    <Button onClick={handlePlaceOrder} variant={'solid'}>Place Order</Button>
                    <Button><Link to={'/cart'}>Check cart products</Link></Button>
                </Flex>
            </Container>
        </Box>
    );
};