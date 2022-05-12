import { Button, Center, Flex, Heading, Icon, Spacer, useColorMode } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setItem } from "../helpers/sessionStorage";
import { setGender } from "../redux/allProducts/actions";
import { Logout } from "./Logout";
import { BigIcon, NavButton } from "./MiniComponents";
import { BsSun, BsMoonStars, BsCart, BsHeart } from 'react-icons/bs';
import { FiLogIn, FiHome } from 'react-icons/fi';
import { CgDisplayGrid } from 'react-icons/cg';

export const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const dispatch = useDispatch();
    const { token, user } = useSelector((state) => state.authReducer, shallowEqual);

    const handleGenderChange = () => {
        dispatch(setGender("allProducts"));
        setItem("isGender", "allProducts");
    }

    return (
        <>
            <Flex top={'0px'} bg={colorMode === "dark" ? '#1a202c' : 'white'} h={14} pr={'10px'} w={'100%'} shadow={'sm'} pos={'fixed'} zIndex={2}>
                <Center>
                    <Link to={'/'}>
                        <Heading ml={5} display={['none', 'block']} fontSize={'20px'}>Mini Store</Heading>
                    </Link>
                </Center>
                <Spacer />
                <Center>
                    <NavButton name={<BigIcon label={'Home'} icon={FiHome} />} path={'/'} />
                    <NavButton onClick={handleGenderChange} name={<BigIcon label={'All Products'} icon={CgDisplayGrid} />} path={'/products'} />

                    <NavButton name={<BigIcon label={'Favourite'} icon={BsHeart} />} path={'/favourite'} />
                    <NavButton name={<BigIcon label={'Cart'} icon={BsCart} />} path={'/cart'} />

                    {!!token ? <Logout name={user.name} /> : <NavButton name={<BigIcon label={'Login'} icon={FiLogIn} />} path={'/login'} />}

                    

                    <Button px={'0px'} bg={'transparent'} onClick={toggleColorMode}>
                        {colorMode === "light" ? <BigIcon label={'Dark Mode'} icon={BsMoonStars} /> : <BigIcon label={'Light Mode'} icon={BsSun} />}
                    </Button>
                </Center>
            </Flex>
        </>
    );
};
