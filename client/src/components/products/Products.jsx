import { Grid, Flex, Button, HStack, Heading, Text, Center, Spacer, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllDataRequest, resetFilter, setPage } from "../../redux/allProducts/actions";
import { Error } from "../loading/Error";
import { Loading } from "../loading/Loading";
import { SortMenu } from "./SortMenu";
import { RiFullscreenFill, RiFullscreenExitLine } from "react-icons/ri";
import { GridMenu } from "./GridMenu";
import { EmptyList } from "../loading/EmptyList";
import { GenderMenu } from "./GenderMenu";
import { CategoryMenu } from "./CategoryMenu";
import { setItem } from "../../utils/sessionStorage";
import { ProductBox } from "./ProductBox";

export const Products = () => {

    const [reset, setReset] = useState(false);
    const [limit, setlimit] = useState(null);
    const [totalProducts, setTotalProducts] = useState(0);
    const [screen, setScreen] = useState(true);

    const toast = useToast();
    const dispatch = useDispatch();
    const { products, isLoading, isError, isGender, category, isSort, grid, size, page } = useSelector((state) => state.allProductsReducer, shallowEqual);

    const handlePageChange = (payload) => {
        dispatch(setPage(payload));
        setItem("page", page + payload);
    }

    const handleResetFilter = () => {
        dispatch(resetFilter());
        setReset(true);
    }

    useEffect(() => {
        dispatch(getAllDataRequest(page, setlimit, size, isGender, category, isSort, setTotalProducts, grid, reset, setReset, toast));
    }, [page, isGender, setlimit, isSort, dispatch, size, category, grid, reset, toast]);


    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Flex flexDirection={['column', 'row']} gap={'20px'} justifyContent={'space-between'} maxW={1200} m={'90px auto 20px'} px={'20px'}>
                <Center color={'#0863be'}>
                    <Heading fontSize={['25px', '35px']}>{isGender === "men" ? "Men"
                        : isGender === "women" ? "Women"
                            : isGender === "kids" ? "Kids" : "All"}
                    </Heading>
                    <Text fontSize={['18px', '24px']}>({totalProducts})</Text>
                    <Spacer />
                    <Button onClick={handleResetFilter} display={['inline-block', 'none']}>Reset</Button>
                </Center>

                <Center gap={'10px'}>
                    <Button
                        onClick={() => { setScreen(!screen) }}
                        leftIcon={screen ? <RiFullscreenFill /> : <RiFullscreenExitLine />}
                        display={['none', 'none', 'none', 'inline-block']}
                    >View</Button>
                    <GridMenu />
                    <CategoryMenu />
                    <GenderMenu />
                    <SortMenu />
                    <Button onClick={handleResetFilter} display={['none', 'inline-block']}>Reset</Button>
                </Center>
            </Flex>

            {products.length === 0 ? <EmptyList /> : <Grid className="expand" templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', `repeat(${grid}, 1fr)`]} gap={'20px'} p={'20px'} maxW={screen ? 1200 : '98%'} m={'40px auto'}>
                {products.map((e) => (
                    <ProductBox key={e._id} data={e} />
                ))}
            </Grid>}

            <Flex justify={'center'}>
                <HStack gap={3}>
                    <Button onClick={() => { handlePageChange(-1) }} disabled={page === 1}>Prev</Button>
                    <Text>{page}</Text>
                    <Button onClick={() => { handlePageChange(1) }} disabled={page === limit}>Next</Button>
                </HStack>
            </Flex>
        </>
    );
};


