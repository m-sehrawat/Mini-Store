import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setItem } from "../../utils/sessionStorage";
import { setCategory } from "../../redux/allProducts/actions";

export const CategoryMenu = () => {

    const dispatch = useDispatch();

    const handleCategoryChange = ({ target: { value } }) => {
        dispatch(setCategory(value));
        setItem("category", value);
    }

    return (
        <>
            <Menu>
                <MenuButton px={'10px'} as={Button} rightIcon={<BsFillCaretDownFill />}>Category</MenuButton>
                <MenuList>
                    <MenuItem onClick={handleCategoryChange} value={'allCategory'}>All Categories</MenuItem>
                    <MenuItem onClick={handleCategoryChange} value={'cloths'}>Cloths</MenuItem>
                    <MenuItem onClick={handleCategoryChange} value={'shoes'}>Shoes</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};