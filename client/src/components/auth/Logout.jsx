import { Button, Divider, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react";
import { BsFillCaretDownFill, BsCart, BsHeart, BsMinecartLoaded } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutRequest } from "../../redux/auth/actions";


export const Logout = ({ name }) => {

    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutRequest(toast));
    }

    return (
        <>
            <Menu>
                <MenuButton border={'none'} px={'10px'} mr={'2px'} as={Button} bg={'transparent'} rightIcon={<BsFillCaretDownFill />}>{name}</MenuButton>
                <MenuList>
                    <MenuItem onClick={() => { navigate("/favourite") }} my={'6px'} icon={<BsHeart />}>Favourite</MenuItem>
                    <MenuItem onClick={() => { navigate("/orders") }} my={'6px'} icon={<BsMinecartLoaded />}>My Orders</MenuItem>
                    <MenuItem onClick={() => { navigate("/cart") }} my={'6px'} icon={<BsCart />}>Cart</MenuItem>
                    <Divider />
                    <MenuItem my={'6px'} onClick={handleLogout} icon={<FiLogOut />}>Logout</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};


