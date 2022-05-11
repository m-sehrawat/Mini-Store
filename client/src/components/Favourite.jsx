import { Box, Button, Center, Flex, Grid, Heading } from "@chakra-ui/react";
import { shallowEqual, useSelector } from "react-redux";
import { EmptyList } from "./EmptyList";
import { ProductBox } from "./MiniComponents";
import { useState } from 'react';
import { RiFullscreenFill, RiFullscreenExitLine } from "react-icons/ri";

export const Favourite = () => {

    let products = [
        {
            "img": [
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/066cb1d4e2fd4281aceaac8300b7f4c9_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_21_model.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a51495b9f92f465ca774ac8300b80557_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_23_hover_model.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/abed66812f144b909d9bac8300b81a3e_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_25_model.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b6f31e854c3748489c87ac6901450277_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_01_laydown.jpg"
            ],
            "name": "AEROREADY DESIGNED TO MOVE SPORT TEE",
            "description": "Men Training",
            "category": "cloths",
            "price": 599,
            "size": [
                32,
                34,
                36,
                38
            ],
            "rating": 4.0,
            "gender": "men",
            "brand": "sportsWear",
            "collections": "adicolor"
        },
        {
            "img": [
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/cacb7e977fda43e88809ac1e00f709ef_9366/Runner_Tee_Blue_GC6719_21_model.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ce32b2af33894226be97ac1e00f71762_9366/Runner_Tee_Blue_GC6719_22_model.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d748c364ef2348eaa79aac1e00f725e6_9366/Runner_Tee_Blue_GC6719_23_hover_model.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/dcb67a193f6f4c8a8654ac1e00f73739_9366/Runner_Tee_Blue_GC6719_25_model.jpg"
            ],
            "name": "RUNNER TEE",
            "description": "Men Training",
            "category": "cloths",
            "price": 1499,
            "size": [
                32,
                34,
                36,
                38
            ],
            "rating": 4.2,
            "gender": "men",
            "brand": "sportsWear",
            "collections": "adicolor"
        },
        {
            "img": [
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c4afb89143854ec28068ac86014b64a0_9366/Tennis_Freelift_Printed_Primeblue_Tee_Yellow_GQ2221_21_model.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3a73241109b84060b1faac86014b8fd6_9366/Tennis_Freelift_Printed_Primeblue_Tee_Yellow_GQ2221_23_hover_model.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c97b731a56164d6d8f11ac86014bbb80_9366/Tennis_Freelift_Printed_Primeblue_Tee_Yellow_GQ2221_25_model.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1b8be63adf174d03ad2bac86014bc444_9366/Tennis_Freelift_Printed_Primeblue_Tee_Yellow_GQ2221_41_detail.jpg"
            ],
            "name": "TENNIS FREELIFT PRINTED PRIMEBLUE TEE",
            "description": "Men Tennis",
            "category": "cloths",
            "price": 2000,
            "size": [
                32,
                34,
                36,
                38
            ],
            "rating": 4.5,
            "gender": "men",
            "brand": "sportsWear",
            "collections": "clima"
        }
    ]

    const [screen, setScreen] = useState(true);
    const { isLoading, isError, isGender, isSort, grid, size } = useSelector((state) => state.allProductsReducer, shallowEqual);

    return (
        <>
            <Flex justify={'space-between'} maxW={1200} m={'20px auto'} px={'20px'}>
                <Center>
                    <Heading>Favourite</Heading>
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
                {products.length === 0 ? <EmptyList /> : <Grid className="expand" templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', `repeat(${grid}, 1fr)`]} gap={'20px'} p={'20px'} maxW={screen ? 1200 : '98%'} m={'40px auto'}>
                    {products.map((e, i) => (
                        <ProductBox key={i} data={e} />
                    ))}
                </Grid>}
            </Box>
        </>
    );
};