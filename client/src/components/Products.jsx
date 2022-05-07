import { Grid, Box,  Flex, Button, HStack, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getRequest } from "../redux/actions";
import { ProductBox } from "./MiniComponents";

export const Products = () => {

    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(null);

    const dispatch = useDispatch();
    const { products, isLoading, isError } = useSelector((state) => state, shallowEqual);

    useEffect(() => {
        dispatch(getRequest());
    }, [page])

    // const getAllProducts = async () => {

    //     // fetch(`http://localhost:3004/data?_page=${page}&_limit=8`)
    //     //     .then((res) => {
    //     //         setlimit(Math.ceil(res.headers.get("X-Total-Count") / 8))
    //     //         return res.json();
    //     //     })
    //     //     .then((res) => {
    //     //         setProducts(res);
    //     //     })
    //     //     .catch((err) => {
    //     //         console.log(err);
    //     //     })
    // }



    return (
        <>
            <Box maxW={1200} m={'20px auto'} px={'20px'}>
                <Heading>All Products</Heading>
            </Box>

            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={'20px'} p={'20px'} maxW={1200} m={'40px auto'}>

                {products.map((e) => (
                    <ProductBox key={e._id} data={e} />
                ))}

            </Grid>

            <Flex justify={'center'}>
                <HStack gap={3}>
                    <Button onClick={() => { setPage((prev) => prev - 1) }} disabled={page === 1}>Prev</Button>
                    <Button onClick={() => { setPage((prev) => prev + 1) }} disabled={page === limit}>Next</Button>
                </HStack>
            </Flex>
        </>
    );
};

