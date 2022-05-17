import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { gridSize } from "../../utils/extrafunctions";
import { setItem } from "../../utils/sessionStorage";
import { setGrid } from "../../redux/allProducts/actions";

export const GridMenu = () => {

    const dispatch = useDispatch();

    const handleGrid = ({ target: { value } }) => {
        const payload = gridSize(+value);
        dispatch(setGrid(payload));
        setItem("grid", payload.grid);
        setItem("size", payload.size);
    }

    return (
        <>
            <Menu >
                <MenuButton as={Button} display={['none', 'none', 'none', 'block']} rightIcon={<BsFillCaretDownFill />} >Grid</MenuButton>
                <MenuList>
                    <MenuItem onClick={handleGrid} value={2}>(2 X 2) Products Grid</MenuItem>
                    <MenuItem onClick={handleGrid} value={3}>(2 X 3) Products Grid</MenuItem>
                    <MenuItem onClick={handleGrid} value={4}>(2 X 4) Products Grid</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};