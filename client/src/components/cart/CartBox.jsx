import { Box, Button, Center, Divider, Grid, Image, Text } from "@chakra-ui/react";
import { numberWithCommas, shortString } from "../../utils/extrafunctions";


export const CartBox = ({ data, onClick }) => {

    const { name, img, price, quantity } = data;

    return (
        <>
            <Grid templateColumns={['100%', '60% 40%']} h={['180px', '110px']} overflow={'hidden'}>
                <Grid templateColumns={'110px 70%'}>
                    <Box w={'110px'} overflow={'hidden'}>
                        <Image src={img[0]} />
                    </Box>
                    <Center>
                        <Box w={'100%'} >
                            <Text fontSize={['16px']} m={"10px 10px 2px"}>{shortString(name)}</Text>
                            <Text fontWeight={500} fontSize={['20px']} m={"1px 10px 2px"}>₹ {numberWithCommas(price)}</Text>
                        </Box>
                    </Center>
                </Grid>
                <Grid templateColumns={'50% 50%'} h={['70px', '100%']}>
                    <Box >
                        <Center h={'100%'} >
                            <Button size={'sm'} fontSize={'20px'} >-</Button>
                            <Text fontSize={'18px'} mx={'15px'}>{quantity}</Text>
                            <Button size={'sm'} fontSize={'20px'} >+</Button>
                        </Center>
                    </Box>
                    <Box >
                        <Center h={'100%'} px={'10px'}>
                            <Button size={'sm'} colorScheme={'red'} onClick={onClick} >Remove</Button>
                        </Center>
                    </Box>
                </Grid>
            </Grid>
            <Divider />
        </>
    );
};