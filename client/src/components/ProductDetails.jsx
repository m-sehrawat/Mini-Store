import { Box, Button, Image, Text, Flex, Grid, VStack, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneDataRequest } from "../redux/oneProduct/actions";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { BsCartPlusFill, BsHeartFill } from "react-icons/bs";
import { notify } from "../helpers/extrafunctions";
import { addFavouriteRequest } from "../redux/favouriteProducts/actions";

export const ProductDetails = () => {

    const { id } = useParams();
    const [num, setNum] = useState(0);
    const toast = useToast();
    const dispatch = useDispatch();
    const { isLoading, oneProduct, isError } = useSelector((state) => state.oneProductReducer, shallowEqual);
    const { token, user: { _id } } = useSelector((state) => state.authReducer, shallowEqual);
    const { img, name, category, gender, size, brand, rating, collections, price } = oneProduct;

    const handleImageChange = (value) => setNum(num + value);

    const handleFavourite = () => {
        if (!token) return notify(toast, "Please login first", "error");
        dispatch(addFavouriteRequest({ ...oneProduct, user: _id }, toast));
    }

    useEffect(() => {
        dispatch(getOneDataRequest(id));
    }, [id, dispatch]);


    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <Grid m={'40px auto'} p={'10px'} gap={'10px'} maxW={'1100px'} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} >

            <Box>
                <Box borderRadius={'10%'} boxShadow='lg' overflow={'hidden'}>
                    <Image className="zoom" src={img[num]} />
                </Box>
                <Flex justifyContent={'center'} gap={'30px'} my={'20px'}>
                    <Button onClick={() => { handleImageChange(-1) }} disabled={num === 0} >Prev</Button>
                    <Button onClick={() => { handleImageChange(1) }} disabled={num === (img.length - 1)}>Next</Button>
                </Flex>
            </Box>

            <Box overflow={'hidden'} p={'30px'} >
                <Text my={2} fontSize={18} color={'grey'}  >{category}</Text>
                <Text my={2} fontSize={['22px', '30px']}><b>{name}</b></Text>
                <Text my={4} fontSize={['30px', '40px']} color={'red'}>
                    <Text color={'grey'} as='del'>₹{price + Math.floor(0.2 * price)}.00</Text> &nbsp;
                    ₹{price}.00
                </Text>
                <Text my={2} fontSize={20} color={'grey'}>Brand: {brand}</Text>
                <Text my={2} fontSize={20} color={'grey'}>Collection: {collections}</Text>
                <Text my={2} fontSize={20} color={'grey'}>Rating: {rating}</Text>
                <Text my={2} fontSize={20} color={'grey'}>Sizes: {size.join(", ")}</Text>
                <Text my={2} fontSize={20} color={'grey'}>Gender: {gender === 'men' ? 'Men' : 'Women'}</Text>
                <Flex mr={['0px', '0px', '20px']} gap={'10px'} flexDirection={'column'}>
                    <Button leftIcon={<BsCartPlusFill />} borderRadius={'30px'} fontSize={'20px'} h={'60px'}>Add to Cart</Button>
                    <Button onClick={handleFavourite} leftIcon={<BsHeartFill />} borderRadius={'30px'} fontSize={'20px'} h={'60px'}>Add to Favourite</Button>
                </Flex>
            </Box>
        </Grid>
    );
};