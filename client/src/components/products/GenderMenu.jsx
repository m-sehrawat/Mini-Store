import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setItem } from "../../utils/sessionStorage";
import { setGender } from "../../redux/allProducts/actions";

export const GenderMenu = () => {

    const dispatch = useDispatch();

    const handleGenderChange = ({ target: { value } }) => {
        dispatch(setGender(value));
        setItem("isGender", value);
    }

    return (
        <>
            <Menu>
                <MenuButton px={'10px'} as={Button} rightIcon={<BsFillCaretDownFill />}>Gender</MenuButton>
                <MenuList>
                    <MenuItem onClick={handleGenderChange} value={'allProducts'}>All Products</MenuItem>
                    <MenuItem onClick={handleGenderChange} value={'men'}>Men</MenuItem>
                    <MenuItem onClick={handleGenderChange} value={'women'}>Women</MenuItem>
                    <MenuItem onClick={handleGenderChange} value={'kids'}>Kids</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};