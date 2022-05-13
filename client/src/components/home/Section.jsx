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
            <Box cursor={'pointer'} className='shadow' overflow={'hidden'}>
                <Image onClick={handleGenderChange} className="zoom" src={img} />
            </Box>
            <Text color={'#0863be'} mt={5} align={'center'} fontWeight={700} fontSize={30}>{title}</Text>
        </Box>
    );
};