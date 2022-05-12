import { Box, Button, Center, Flex, Grid, Heading, Text, useToast } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { EmptyList } from "./EmptyList";
import { FavouriteBox } from "./MiniComponents";
import { useState, useEffect } from 'react';
import { RiFullscreenFill, RiFullscreenExitLine } from "react-icons/ri";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { getFavouriteRequest, removeFavouriteRequest } from "../redux/favouriteProducts/actions";

export const Favourite = () => {

    const [screen, setScreen] = useState(true);
    const toast = useToast();
    const dispatch = useDispatch();
    const { isLoading, favourite, isError } = useSelector((state) => state.favouriteReducer, shallowEqual);
    const token = useSelector((state) => state.authReducer.token);

    const handleRemoveFavourite = (id) => {
        dispatch(removeFavouriteRequest(id, toast, token));
        
    }

    useEffect(() => {
        dispatch(getFavouriteRequest(token));
    }, [dispatch, token]);

    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Flex justify={'space-between'} maxW={1200} m={'20px auto'} px={'20px'}>
                <Center>
                    <Heading fontSize={['25px', '35px']}>Favourite</Heading>
                    <Text fontSize={['18px', '24px']}> ({favourite.length})</Text>
                </Center>
                <Center>
                    <Button
                        onClick={() => { setScreen(!screen) }}
                        leftIcon={screen ? <RiFullscreenFill /> : <RiFullscreenExitLine />}
                        display={['none', 'none', 'none', 'inline-block']}
                    >View</Button>
                </Center>
            </Flex>

            <Box>
                {favourite.length === 0 ? <EmptyList /> : <Grid className="expand" templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', `repeat(4, 1fr)`]} gap={['10px', '15px', '20px']} p={'20px'} maxW={screen ? 1200 : '98%'} m={'40px auto'}>
                    {favourite.map((e, i) => (
                        <FavouriteBox key={i} data={e} onClick={() => { handleRemoveFavourite(e._id) }} />
                    ))}
                </Grid>}
            </Box>
        </>
    );
};