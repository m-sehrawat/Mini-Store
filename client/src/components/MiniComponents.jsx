import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { shortString } from "../helpers/extrafunctions";
import { setItem } from "../helpers/sessionStorage";
import { setGender } from "../redux/allProducts/actions";


export const Section = ({ img, title, gender }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDisplayData = () => {
        dispatch(setGender(gender));
        setItem("isGender", gender);
        navigate("/products");
    }

    return (
        <Box>
            <Box shadow={'lg'} borderRadius={'10%'} overflow={'hidden'}>
                <Image onClick={handleDisplayData} className="zoom" src={img} />
            </Box>
            <Text mt={5} align={'center'} fontSize={25}>{title}</Text>
        </Box>
    );
};



export const ProductBox = ({ data }) => {

    const { _id, name, img, category, brand } = data;

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
                    </Box>
                </Flex>
            </Link>
        </>
    );
};