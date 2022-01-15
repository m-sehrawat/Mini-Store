import { Grid, Box, Image, Text, Flex, Center, Button, HStack, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(null);

    useEffect(() => {
        getAllProducts();
    }, [page])

    const getAllProducts = () => {

        fetch(`http://localhost:3004/data?_page=${page}&_limit=8`)
            .then((res) => {
                setlimit(Math.ceil(res.headers.get("X-Total-Count") / 8))
                return res.json();
            })
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }



    return (
        <>
            <Box>
                <Heading m={10} textAlign={'center'}>All Products Page</Heading>
            </Box>

            <Grid templateColumns='repeat(4, 1fr)' gap={6} maxW={1200} m={'40px auto'}>
                {products.map(({ id, name, img, category, brand }) => (
                    <Link key={id} to={`/products/${id}`}>
                        <Box height='400px' boxShadow='xl' overflow={'hidden'} _hover={{ border: '1px solid grey' }}>
                            <Image src={img[0]} />
                            <Text fontSize={17} m={"10px 10px 2px"}>{name}</Text>
                            <Text fontSize={14} color={'grey'} m={"2px 10px 2px"}>{category}</Text>
                            <Text fontSize={14} color={'grey'} m={"1px 10px 2px"}>{brand}</Text>
                        </Box>
                    </Link>
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