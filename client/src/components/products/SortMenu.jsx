import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setSort } from "../../redux/allProducts/actions";

export const SortMenu = () => {

    const dispatch = useDispatch();

    const handleSort = ({ target: { value } }) => {
        dispatch(setSort(value));
    }

    return (
        <>
            <Menu>
                <MenuButton px={'10px'} as={Button} rightIcon={<BsFillCaretDownFill />}>Sort</MenuButton>
                <MenuList>
                    <MenuItem onClick={handleSort} value={'priceLH'}>Price: Low - High</MenuItem>
                    <MenuItem onClick={handleSort} value={'priceHL'}>Price: High - Low</MenuItem>
                    <MenuItem onClick={handleSort} value={'ratingLH'}>Rating: Low - High</MenuItem>
                    <MenuItem onClick={handleSort} value={'ratingHL'}>Rating: High - Low</MenuItem>
                    <MenuItem onClick={handleSort} value={'nameAZ'}>Name: A - Z</MenuItem>
                    <MenuItem onClick={handleSort} value={'nameZA'}>Name: Z - A</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};