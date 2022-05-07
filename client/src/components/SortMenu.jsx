import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsFillCaretDownFill } from "react-icons/bs";

export const SortMenu = () => {

    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsFillCaretDownFill />}>Sort</MenuButton>
                <MenuList>
                    <MenuItem>Price: Low - High</MenuItem>
                    <MenuItem>Price: High - Low</MenuItem>
                    <MenuItem>Rating: Low - High</MenuItem>
                    <MenuItem>Rating: High - Low</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};