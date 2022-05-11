import { Button, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../redux/auth/actions";


export const Logout = ({ name }) => {

    const dispatch = useDispatch();
    const toast = useToast();

    const handleLogout = () => {
        dispatch(logoutRequest(toast));
    }

    return (
        <>
            <Menu>
                <MenuButton as={Button} bg={'transparent'} rightIcon={<BsFillCaretDownFill />}>{name}</MenuButton>
                <MenuList>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};


