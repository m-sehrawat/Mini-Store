import { Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setItem } from "../helpers/sessionStorage";
import { setGender } from "../redux/allProducts/actions";
import { Logout } from "./Logout";
import { NavButton } from "./MiniComponents";

export const Navbar = () => {

    const dispatch = useDispatch();
    const { token, user } = useSelector((state) => state.authReducer, shallowEqual)

    const handleGenderChange = () => {
        dispatch(setGender("allProducts"));
        setItem("isGender", "allProducts");
    }

    return (
        <>
            <Flex h={14} bg={'#F5F5F5'} pr={'20px'}>
                <Center>
                    <Link to={'/'}>
                        <Heading ml={5} display={['none', 'block']} fontSize={'20px'}>Mini Store</Heading>
                    </Link>
                </Center>
                <Spacer />
                <Center>
                    <NavButton name={'Home'} path={'/'} />
                    <NavButton onClick={handleGenderChange} name={'Products'} path={'/products'} />
                    {!!token ? <Logout name={user.name} /> : <NavButton name={'Login'} path={'/login'} />}
                </Center>
            </Flex>
        </>
    );
};
