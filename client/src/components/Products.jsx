import { Grid, Flex, Button, HStack, Heading, Text, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setItem } from "../helpers/sessionStorage";
import { getAllDataRequest, setGender } from "../redux/allProducts/actions";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { ProductBox } from "./MiniComponents";
import { SortMenu } from "./SortMenu";
import { RiFullscreenFill, RiFullscreenExitLine } from "react-icons/ri";
import { GridMenu } from "./GridMenu";

export const Products = () => {

    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(null);
    const [screen, setScreen] = useState(true)

    const dispatch = useDispatch();
    const { products, isLoading, isError, isGender, isSort, grid, size } = useSelector((state) => state.allProductsReducer, shallowEqual);

    const handleGenderChange = ({ target: { value } }) => {
        dispatch(setGender(value));
        setItem("isGender", value);
    }

    useEffect(() => {
        dispatch(getAllDataRequest(page, setlimit, size, isGender, isSort));
    }, [page, isGender, setlimit, isSort, dispatch, size]);



    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Flex flexDirection={['column', 'row']} gap={'20px'} justifyContent={'space-between'} maxW={'80%'} m={'20px auto'} px={'20px'}>
                <Center>
                    <Heading fontSize={['25px', '35px']}>{isGender === "men" ? "Men's Products"
                        : isGender === "women" ? "Women's Products"
                            : isGender === "kids" ? "Kids Products" : "All Products"}
                    </Heading>
                </Center>

                <Center gap={'10px'}>
                    <Button onClick={handleGenderChange} value={'allProducts'} display={['none', 'none', 'inline-block']}>All Products</Button>
                    <Button onClick={handleGenderChange} value={'men'}>Men</Button>
                    <Button onClick={handleGenderChange} value={'women'}>Women</Button>
                    <Button onClick={handleGenderChange} value={'kids'}>Kids</Button>
                    <Button onClick={() => { setScreen(!screen) }} leftIcon={screen ? <RiFullscreenFill /> : <RiFullscreenExitLine />}>View</Button>
                    <GridMenu />
                    <SortMenu />
                </Center>
            </Flex>

            <Grid className="expand" templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', `repeat(${grid}, 1fr)`]} gap={'20px'} p={'20px'} maxW={screen ? '80%' : '98%'} m={'40px auto'}>

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

