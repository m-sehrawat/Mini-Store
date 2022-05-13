import {  Button, Icon, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const NavButton = ({ path, name, onClick }) => {
    return <Button px={'0px'} onClick={onClick} bg={'transparent'} mr={'3px'} ><Link to={path}>{name}</Link></Button>;
};

export const BigIcon = ({ icon, label }) => {
    return <Tooltip label={label}><span><Icon w={'26px'} h={'26px'} as={icon} /></span></Tooltip>
};
