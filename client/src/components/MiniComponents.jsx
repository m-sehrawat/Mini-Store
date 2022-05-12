import { Box, Button, Center, Flex, Grid, Icon, Image, Text, Tooltip } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { numberWithCommas, shortString } from "../helpers/extrafunctions";
import { setItem } from "../helpers/sessionStorage";
import { setGender } from "../redux/allProducts/actions";


export const Section = ({ img, title, gender }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGenderChange = () => {
        dispatch(setGender(gender));
        setItem("isGender", gender);
        navigate("/products");
    }

    return (
        <Box>
            <Box cursor={'pointer'} shadow={'lg'} borderRadius={'10%'} overflow={'hidden'}>
                <Image onClick={handleGenderChange} className="zoom" src={img} />
            </Box>
            <Text mt={5} align={'center'} fontSize={25}>{title}</Text>
        </Box>
    );
};


export const ProductBox = ({ data }) => {

    const { _id, name, img, description, brand, price, rating } = data;

    return (
        <Link to={`/products/${_id}`}>
            <Flex flexDirection={'column'} boxShadow='sm' overflow={'hidden'}>
                <Box overflow={'hidden'}>
                    <Image className="zoom" src={img[0]} />
                </Box>
                <Box p={'10px'}>
                    <Text fontSize={17} m={"10px 10px 2px"}>{shortString(name)}</Text>
                    <Text fontSize={14} color={'grey'} m={"2px 10px 2px"}>{description}</Text>
                    <Text fontSize={14} color={'grey'} m={"1px 10px 2px"}>{brand}</Text>
                    <Text fontSize={20} color={'grey'} m={"1px 10px 2px"}>₹ {numberWithCommas(price)}</Text>
                    <Text fontSize={14} color={'grey'} m={"1px 10px 2px"}>Rating: {rating}</Text>
                </Box>
            </Flex>
        </Link>
    );
};


export const FavouriteBox = ({ data, onClick }) => {

    const { name, img, price } = data;

    return (
        <Flex flexDirection={'column'} boxShadow='sm' overflow={'hidden'}>
            <Box overflow={'hidden'}>
                <Image className="zoom" src={img[0]} />
            </Box>
            <Box p={'10px'}>
                <Text fontSize={['12px', '13px', '13px', '15px']} m={"10px 10px 2px"}>{shortString(name)}</Text>
                <Text fontSize={['14px', '18px']} color={'grey'} m={"1px 10px 2px"}>₹ {numberWithCommas(price)}</Text>
                <Button onClick={onClick} w={'100%'}>Remove</Button>
            </Box>
        </Flex>
    );
};


export const CartBox = ({ data, onClick }) => {

    const { name, img, price, quantity } = data;

    return (
        <Grid className="shadow" templateColumns={['100%', '60% 40%']} h={['180px', '110px']}  overflow={'hidden'}>
            <Grid templateColumns={'110px 70%'}>
                <Box w={'110px'} overflow={'hidden'}>
                    <Image src={img[0]} />
                </Box>
                <Center  >
                    <Box>
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
    );
};


export const NavButton = ({ path, name, onClick }) => {
    return <Button px={'0px'} onClick={onClick} bg={'transparent'} mr={'3px'} ><Link to={path}>{name}</Link></Button>;
};

export const BigIcon = ({ icon, label }) => {
    return <Tooltip label={label}><span><Icon w={'26px'} h={'26px'} as={icon} /></span></Tooltip>
};
