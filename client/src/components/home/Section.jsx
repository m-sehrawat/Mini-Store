import { Box, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../utils/sessionStorage";
import { setGender } from "../../redux/allProducts/actions";

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