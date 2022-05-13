import { Box, Button, Image, Text, Flex, Grid, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneDataRequest } from "../../redux/oneProduct/actions";
import { Error } from "../loading/Error";
import { Loading } from "../loading/Loading";
import { BsCart, BsHeart } from 'react-icons/bs';
import { addFavouriteRequest } from "../../redux/favouriteProducts/actions";
import { addToCartRequest } from "../../redux/cartProducts/actions";
import { notify, numberWithCommas } from "../../utils/extrafunctions";


export const ProductDetails = () => {

    const { id } = useParams();
    const [num, setNum] = useState(0);
    const toast = useToast();
    const dispatch = useDispatch();
    const { isLoading, oneProduct, isError } = useSelector((state) => state.oneProductReducer, shallowEqual);
    const token = useSelector((state) => state.authReducer.token);
    const { img, name, description, gender, size, brand, rating, collections, price } = oneProduct;

    const handleImageChange = (value) => setNum(num + value);

    const handleFavourite = () => {
        if (!token) return notify(toast, "Please login first", "error");
        dispatch(addFavouriteRequest(oneProduct, token, toast));
    };
    

    const handleAddToCart = () => {
        if (!token) return notify(toast, "Please login first", "error");
        dispatch(addToCartRequest(oneProduct, token, toast));
    };

    useEffect(() => {
        dispatch(getOneDataRequest(id));
    }, [id, dispatch]);


    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <Grid m={'80px auto 40px'} p={'10px'} gap={'10px'} maxW={'1100px'} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} >

            <Box>
                <Box boxShadow='lg' overflow={'hidden'}>
                    <Image className="zoom" src={img[num]} />
                </Box>
                <Flex justifyContent={'center'} gap={'30px'} my={'20px'}>
                    <Button onClick={() => { handleImageChange(-1) }} disabled={num === 0} >Prev</Button>
                    <Button onClick={() => { handleImageChange(1) }} disabled={num === (img.length - 1)}>Next</Button>
                </Flex>
            </Box>

            <Box overflow={'hidden'} p={'30px'} >
                <Text my={2} fontSize={18} color={'grey'}  >{description}</Text>
                <Text my={2} fontSize={['22px', '30px']}><b>{name}</b></Text>
                <Text my={4} fontSize={['30px', '40px']} color={'red'}>
                    <Text color={'grey'} as='del'>₹{numberWithCommas(price + Math.floor(0.2 * price))}.00</Text> &nbsp;
                    ₹{numberWithCommas(price)}.00
                </Text>
                <Text my={2} fontSize={20} color={'grey'}>Brand: {brand}</Text>
                <Text my={2} fontSize={20} color={'grey'}>Collection: {collections}</Text>
                <Text my={2} fontSize={20} color={'grey'}>Rating: {rating}</Text>
                <Text my={2} fontSize={20} color={'grey'}>Sizes: {size.join(", ")}</Text>
                <Text my={2} fontSize={20} color={'grey'}>Gender: {gender === 'men' ? 'Men' : 'Women'}</Text>
                <Flex mr={['0px', '0px', '30px']} gap={'12px'} flexDirection={'column'}>
                    <Button onClick={handleAddToCart} variant={'solid'} leftIcon={<BsCart />} fontSize={'18px'} h={'50px'}>Add to Cart</Button>
                    <Button onClick={handleFavourite} leftIcon={<BsHeart />} fontSize={'18px'} h={'50px'}>Add to Favourite</Button>
                </Flex>
            </Box>
        </Grid>
    );
};