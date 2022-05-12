import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setItem } from "../helpers/sessionStorage";
import { setCategory } from "../redux/allProducts/actions";

export const CategoryMenu = () => {

    const dispatch = useDispatch();

    const handleCategoryChange = ({ target: { value } }) => {
        dispatch(setCategory(value));
        setItem("category", value);
    }

    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsFillCaretDownFill />}>Category</MenuButton>
                <MenuList>
                    <MenuItem onClick={handleCategoryChange} value={'allCategory'}>All Categories</MenuItem>
                    <MenuItem onClick={handleCategoryChange} value={'cloths'}>Cloths</MenuItem>
                    <MenuItem onClick={handleCategoryChange} value={'shoes'}>Shoes</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};