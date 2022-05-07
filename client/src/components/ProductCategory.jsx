import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ProductCategory = () => {

    const { id } = useParams();
    console.log('id:', id)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = () => {

        fetch(`http://localhost:3004/data?gender=${id}`)
            .then((res) => res.json())
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
                <Heading m={10} textAlign={'center'}>
                    {id === 'men' ? 'Men Products' : id === 'women' ? 'Women Products' : 'Kids Products'}
                </Heading>
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
        </>
    );
};