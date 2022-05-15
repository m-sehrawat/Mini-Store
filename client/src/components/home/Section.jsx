import { Box, Button, Center, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
        <Box >
            <Box
                h={'480px'}
                backgroundImage={img}
                backgroundSize={'cover'}
                cursor={'pointer'}
                className='shadow expand'
                _hover={{ 'filter': 'brightness(80%)' }}
                overflow={'hidden'}
            >
                <Center h={'100%'}>
                    <Button onClick={handleGenderChange} borderWidth={'3px'} fontSize={'23px'} py={'30px'} mt={'15px'} w={'70%'}>{title}</Button>
                </Center>
            </Box>
        </Box>
    );
};


export const MainText = ({ title }) => {
    return (
        <Text
            display={'inline'}
            border={'4px solid #0863be'}
            fontSize={['40px', '50px', '50px', '60px']}
            _hover={{ 'bg': '#0863be', 'color': 'white', 'px': ['40px', '50px', '50px', '50px'] }}
            fontWeight={900}
            px={['20px', '30px', '30px', '30px']}
            color={'#0863be'}
            className='expand'
        >
            {title}
        </Text>
    );
};


export const SlideText = ({ title, path }) => {
    return (
        <Text
            display={'inline'}
            border={'4px solid #0863be'}
            fontSize={['24px', '30px', '50px', '60px']}
            _hover={{ 'bg': '#0863be', 'color': 'white', 'px': ['30px', '50px', '50px', '50px'] }}
            fontWeight={900}
            px={['10px', '30px', '30px', '30px']}
            color={'#0863be'}
            className='expand'
        >
            <Link to={path}>
                {title}
            </Link>
        </Text>
    );
};