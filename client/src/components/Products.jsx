import { Grid, Box, Image, Text, Flex, Button, HStack, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shortString } from "../helpers/extrafunctions";
import { ProductBox } from "./MiniComponents";

export const Products = () => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(null);

    useEffect(() => {
        getAllProducts();
    }, [page])

    const getAllProducts = async () => {

        // fetch(`http://localhost:3004/data?_page=${page}&_limit=8`)
        //     .then((res) => {
        //         setlimit(Math.ceil(res.headers.get("X-Total-Count") / 8))
        //         return res.json();
        //     })
        //     .then((res) => {
        //         setProducts(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })

        try {
            let res = await axios.get("/products");
            res = res.data;
            console.log('res:', res)
            setProducts(res);
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <>
            <Box maxW={1200} m={'20px auto'} px={'20px'}>
                <Heading>All Products</Heading>
            </Box>

            <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={'20px'} p={'20px'} maxW={1200} m={'40px auto'}>

                {products.map((e) => (
                    <ProductBox data={e} />
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

