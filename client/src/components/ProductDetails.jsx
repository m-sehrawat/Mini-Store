import { Box, Center, HStack, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneDataRequest } from "../redux/oneProduct/actions";
import { Error } from "./Error";
import { Loading } from "./Loading";

export const ProductDetails = () => {

    const { id } = useParams();
    const [num, setNum] = useState(0);
    const dispatch = useDispatch();
    const { isLoading, oneProduct, isError } = useSelector((state) => state.oneProductReducer, shallowEqual);
    const {img, name, category, gender, size, brand, rating, collections, price } = oneProduct;

    const handleImageChange = (value) => setNum(num + value);

    useEffect(() => {
        dispatch(getOneDataRequest(id));
    }, [id]);

    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <SimpleGrid columns={2} m={"20px auto"} w={1100} >
                <Box w={500} boxShadow='lg' overflow={'hidden'}>
                    <Image src={img[num]} />

                </Box>
                <Box overflow={'hidden'} p={10} >
                    <Text my={2} fontSize={18} color={'grey'}  >{category}</Text>
                    <Text my={2} fontSize={30}><b>{name}</b></Text>
                    <Text my={4} fontSize={40} color={'red'}>
                        <Text color={'grey'} as='del'>₹{price + Math.floor(0.2 * price)}.00</Text> &nbsp;
                        ₹{price}.00
                    </Text>
                    <Text my={2} fontSize={20} color={'grey'}>Brand: {brand}</Text>
                    <Text my={2} fontSize={20} color={'grey'}>Collection: {collections}</Text>
                    <Text my={2} fontSize={20} color={'grey'}>Rating: {rating}</Text>
                    <Text my={2} fontSize={20} color={'grey'}>Sizes: {size.join(", ")}</Text>
                    <Text my={2} fontSize={20} color={'grey'}>Gender: {gender === 'men' ? 'Men' : 'Women'}</Text>
                </Box>
                <Center>
                    <HStack mt={5} gap={3}>
                        <Button onClick={() => { handleImageChange(-1) }} disabled={num === 0} >Prev</Button>
                        <Button onClick={() => { handleImageChange(1) }} disabled={num === (img.length - 1)}>Next</Button>
                    </HStack>
                </Center>
            </SimpleGrid>
        </>
    );
};