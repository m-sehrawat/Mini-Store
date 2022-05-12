import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
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

    const { _id, name, img, category, brand, price, rating } = data;

    return (
        <>
            <Link to={`/products/${_id}`}>
                <Flex flexDirection={'column'} boxShadow='sm' overflow={'hidden'}>
                    <Box overflow={'hidden'}>
                        <Image className="zoom" src={img[0]} />
                    </Box>
                    <Box p={'10px'}>
                        <Text fontSize={17} m={"10px 10px 2px"}>{shortString(name)}</Text>
                        <Text fontSize={14} color={'grey'} m={"2px 10px 2px"}>{category}</Text>
                        <Text fontSize={14} color={'grey'} m={"1px 10px 2px"}>{brand}</Text>
                        <Text fontSize={20} color={'grey'} m={"1px 10px 2px"}>₹ {numberWithCommas(price)}</Text>
                        <Text fontSize={14} color={'grey'} m={"1px 10px 2px"}>Rating: {rating}</Text>
                    </Box>
                </Flex>
            </Link>
        </>
    );
};


export const NavButton = ({ path, name, onClick }) => {
    return <Button onClick={onClick} bg={'transparent'} mr={'2px'} ><Link to={path}>{name}</Link></Button>;
}


export const BigIcon = ({icon}) => {

    return (
        <>
            <Icon w={'26px'} h={'26px'} as={icon} />
        </>
    );
};