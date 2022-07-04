import { Button, Center, Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setItem } from "../../utils/sessionStorage";
import { setGender } from "../../redux/allProducts/actions";
import { Logout } from "../auth/Logout";
import { BigIcon, NavButton } from "../theme/Theme";
import { BsSun, BsMoonStars, BsCart, BsHeart } from 'react-icons/bs';
import { FiLogIn, FiHome } from 'react-icons/fi';
import { CgDisplayGrid } from 'react-icons/cg';
import { getFirstName } from "../../utils/extrafunctions";


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
                        <Heading color={'#0863be'} ml={5} display={['none','none', 'block']} fontWeight={900} fontSize={'40px'}>Mini Store</Heading>
                    </Link>
                </Center>
                <Spacer />
                <Center>
                    <NavButton name={<BigIcon label={'Home'} icon={FiHome} />} path={'/'} />
                    <NavButton onClick={handleGenderChange} name={<BigIcon label={'All Products'} icon={CgDisplayGrid} />} path={'/products'} />

                    <NavButton name={<BigIcon label={'Favourite'} icon={BsHeart} />} path={'/favourite'} />
                    <NavButton name={<BigIcon label={'Cart'} icon={BsCart} />} path={'/cart'} />

                    <Button px={'0px'} borderRadius={'50%'} border={'none'} onClick={toggleColorMode}>
                        {colorMode === "light" ? <BigIcon label={'Dark Mode'} icon={BsMoonStars} /> : <BigIcon label={'Light Mode'} icon={BsSun} />}
                    </Button>

                    {!!token ? <Logout name={getFirstName(user.name)} /> : <NavButton name={<BigIcon label={'Login'} icon={FiLogIn} />} path={'/login'} />}
                </Center>
            </Flex>
        </>
    );
};
