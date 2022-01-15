import { Box, Center, HStack, Button, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [num, setNum] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProduct(id);
    }, [])

    const getProduct = (id) => {

        fetch(`http://localhost:3004/data/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            })
    }

    const handleImageChange = (value) => {
        setNum(num + value)
    }

    return isLoading ? (
        <div>...Loading</div>
    ) : (
        <>
            <SimpleGrid columns={2} m={"20px auto"} w={1100} >
                <Box w={500} boxShadow='lg' overflow={'hidden'}>
                    <Image src={product.img[num]} />

                </Box>
                <Box overflow={'hidden'} p={10} >
                    <Text my={2} fontSize={18} color={'grey'}  >{product.category}</Text>
                    <Text my={2} fontSize={30}><b>{product.name}</b></Text>
                    <Text my={4} fontSize={40} color={'red'}>
                        <Text color={'grey'} as='del'>₹{product.price + Math.floor(0.2 * product.price)}.00</Text> &nbsp;
                        ₹{product.price}.00
                    </Text>
                    <Text my={2} fontSize={20} color={'grey'}>Brand: {product.brand}</Text>
                    <Text my={2} fontSize={20} color={'grey'}>Collection: {product.collection}</Text>
                    <Text my={2} fontSize={20} color={'grey'}>Gender: {product.gender === 'men' ? 'Men' : 'Women'}</Text>
                </Box>
                <Center>
                    <HStack mt={5} gap={3}>
                        <Button onClick={() => { handleImageChange(-1) }} disabled={num === 0} >Prev</Button>
                        <Button onClick={() => { handleImageChange(1) }} disabled={num === (product.img.length - 1)}>Next</Button>
                    </HStack>
                </Center>
            </SimpleGrid>
        </>
    );
};