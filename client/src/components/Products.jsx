import { Grid, Flex, Button, HStack, Heading, Text, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllDataRequest } from "../redux/allProducts/actions";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { ProductBox } from "./MiniComponents";
import { SortMenu } from "./SortMenu";

export const Products = () => {

    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(null);

    const dispatch = useDispatch();
    const { products, isLoading, isError, isGender, isSort } = useSelector((state) => state.allProductsReducer, shallowEqual);
    console.log('isSort:', isSort)
    console.log('isGender:', isGender)

    useEffect(() => {
        dispatch(getAllDataRequest(page, setlimit, isGender, isSort));
    }, [page, isGender, setlimit, isSort, dispatch]);



    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Flex justifyContent={'space-between'} maxW={1200} m={'20px auto'} px={'20px'}>
                <Center>
                    <Heading fontSize={['25px', '35px']}>{isGender === "men" ? "Men's Products"
                        : isGender === "women" ? "Women's Products"
                            : isGender === "kids" ? "Kids Products" : "All Products"}
                    </Heading>
                </Center>

                <Center>
                    <SortMenu />
                </Center>
            </Flex>

            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={'20px'} p={'20px'} maxW={1200} m={'40px auto'}>

                {products.map((e) => (
                    <ProductBox key={e._id} data={e} />
                ))}

            </Grid>

            <Flex justify={'center'}>
                <HStack gap={3}>
                    <Button onClick={() => { setPage((prev) => prev - 1) }} disabled={page === 1}>Prev</Button>
                    <Text>{page}</Text>
                    <Button onClick={() => { setPage((prev) => prev + 1) }} disabled={page === limit}>Next</Button>
                </HStack>
            </Flex>
        </>
    );
};

